
class search {

    async linearSearch(searchList: any, method: any) {
        for (let i of searchList) {
            if (i === method) {
                return searchList.indexOf(i);
            }
        }
    }


    //! it has a little problem
    private async recursiveSearch(searchList: any, method: any): Promise<any> {
        console.log('get in', searchList[searchList.length - 1])
        let low = 0;
        let listLen = searchList.length - 1;
        let firstMethod = Math.floor(listLen / 2)
        let answer: any;
        if (searchList[firstMethod] == method) {
            return firstMethod
        } else if (searchList[firstMethod] > method) {
            console.log('its upper . . .')
            let newList = searchList.slice(0, firstMethod)
            return await this.recursiveSearch(newList, method)
        } else if (searchList[firstMethod] < method) {
            console.log('its lower. . .', searchList[searchList.length - 1])
            let newList = searchList.slice(firstMethod + 1, searchList.length)
            return await this.recursiveSearch(newList, method)
        }
    }


    async binarySearch(searchList: any, method: any) {
        searchList = searchList.sort(function (a: any, b: any) { return a - b })
        const resault = await this.recursiveSearch(searchList, method)
        console.log(resault)
        return resault
    }

    /**
     *  this function sort the lists based on the selection sort
     * @param unSortedList is the unsorted list that we want to sort
     * @returns sorted list after sorting
     */
    async selectionSorting(unSortedList: number[]): Promise<number[]> {
        let n = unSortedList.length
        for (let i = 0; i < n; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (unSortedList[j] < unSortedList[minIndex]) {
                    minIndex = j
                }
            }

            let temp = unSortedList[i]
            unSortedList[i] = unSortedList[minIndex]
            unSortedList[minIndex] = temp
        }


        return unSortedList
    }

    /**
     * this function sort the lists based on the bubble sort algorithm
     * @param unSortedList is the unsorted list that we want to sorting
     * @returns sorted list after sorting
     */
    async bubbleSort(unSortedList: number[]): Promise<number[]> {
        while (1) {
            let swap: boolean = false
            for (let i = 0; i < unSortedList.length; i++) {
                if (unSortedList[i + 1]) {
                    if (unSortedList[i] > unSortedList[i + 1]) {
                        let temp = unSortedList[i]
                        unSortedList[i] = unSortedList[i + 1]
                        unSortedList[i + 1] = temp
                        swap = true
                    }
                }
            }
            if (!swap) {
                break;
            }
        }
        return unSortedList
    }

    async insertionSort(unSortedList : number[]):Promise<number[]>{
        for (let i = 1 ; i <unSortedList.length ; i++ ){
            let key = unSortedList[i]
            let j = i-1;

            while (j >= 0 && unSortedList[j] > key){
                let temp = unSortedList[j+1]
                unSortedList[j+1] = unSortedList[j]
                unSortedList[j] = temp;
                j -= 1
            }
        }
        return unSortedList
    }


    private async merge(left : number[], right :number[]) {
        let resultArray = [],
            leftIndex = 0,
            rightIndex = 0;
    
        // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // Move to the next element in the `left` array
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // Move to the next element in the `right` array
            }
        }
    
        // Concatenate the remaining elements from either `left` or `right` (if any)
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }


    async mergeSort(array : number[]):Promise<any> {
        // Base case: If the array has only one element, return it (already sorted)
        if (array.length === 1) {
            return array;
        }
    
        // Divide the array into two halves
        const middle = Math.floor(array.length / 2); // Find the middle index
        const left = array.slice(0, middle); // Split the array into left half
        const right = array.slice(middle); // Split the array into right half
    
        // Recursively call mergeSort on the left and right halves
        return this.merge(
            await this.mergeSort(left), // Recursively sort the left half
            await this.mergeSort(right) // Recursively sort the right half
        );
    }



}



const algorithms = new search()


algorithms.mergeSort([9, 8, 5, 6, 3, 2, 1, 44, 5, 8, 99]).then((res) => {
    console.log( 'sorted is . . .', res)
}).catch((err) => {
    console.log(err)
})  
 