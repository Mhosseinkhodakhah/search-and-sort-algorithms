
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






}



// const algorithms = new search()


// algorithms.bubbleSort([9, 8, 5, 6, 3, 2, 1, 44, 5, 8, 99]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
