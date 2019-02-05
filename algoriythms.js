function sumAll(arr) {
    let sum = 0
    if (arr[0] < arr[1]) {
        for (let index = arr[0]; index <= arr[1]; index++) {
            sum += index
        }
        return sum
    }
}


console.log(sumAll([5, 10])); // should return 10.

/////////////////////////////////7


function destroyer(arr, ...destroyers) {
    let newArray = []
    arr.map(element => { if (!destroyers.includes(element)) { newArray.push(element) } })
    console.log(newArray);

}



destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].