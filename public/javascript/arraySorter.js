// Javascript code to sort an array of integers
// with the help of single loop

// Function for Sorting the array
// using a single loop
function sortArrays(arr) {

    // Finding the length of array 'arr'
    let length = arr.length;

    // Sorting using a single loop
    for (let j = 0; j < length - 1; j++) {

        // Checking the condition for two
        // simultaneous elements of the array
        if (arr[j] > arr[j + 1]) {

            // Swapping the elements.
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            // updating the value of j = -1
            // so after getting updated for j++
            // in the loop it becomes 0 and
            // the loop begins from the start.
            j = -1;
        }
    }

    return arr;
}

// Declaring main method
let arr = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3];
document.write("Original array: [" +
    (arr).join(", ") + "]<br>");
// Sorting the array using a single loop
arr = sortArrays(arr);

// Printing the sorted array.
document.write("Sorted array: [" +
    arr.join(", ") + "]<br>");


// // --------------------------


// function sortArray(array) {
//     var temp = 0;
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 temp = array[j];
//                 array[j] = array[i];
//                 array[i] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(sortArray([3, 1, 2]));