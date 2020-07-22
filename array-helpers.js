// Array Helper Functions

// 1. WRITE YOUR OWN VERSION OF THE INCLUDES METHOD (do not use array.includes)
// Function Name:   includes
// Parameters:      item: the item to search for
//                  anArray: the array to search in
// Purpose:         Search anArray for item.  Return true if item is in anArray, else return false.
// Return Value:    true or false, depending on whether item is in anArray

function includes(item, anArray) {

    for (let i = 1; i < anArray.length; i++) {
        if (anArray[i] === item) {
            return 'True';
        } else {
            return 'False';
        }
    }
}



// 2. WRITE YOUR OWN VERSION OF MATH.MIN (do not use Math.min)
// Function Name:   minItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The minimum value in anArray.

function minItem(anArray) {

    let firstidx = anArray;
    let lowestvalue = firstidx[0]; // Assign First Index as the lowest
    for (let i = 1; i < firstidx.length; i++) {
        if (firstidx[i] < lowestvalue) { // If any other numbers are smaller it replaces the first index
            lowestvalue = firstidx[i];
        }
    }
    return lowestvalue; // Return the lowest value
}



// 3. WRITE YOUR OWN VERSION OF MATH.MAX (do not use Math.max)
// Function Name:   maxItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The mmaximum value in anArray.

function maxItem(anArray) {

    let firstidx = anArray;
    let largestvalue = firstidx[0]; // Assign First Index as the largest
    for (let i = 1; i < firstidx.length; i++) {
        if (firstidx[i] > largestvalue) { // If any other numbers are bigger it replaces the first index
            largestvalue = firstidx[i];
        }
    }
    return largestvalue; // Return the largest value
}



// 4. WRITE A FUNCTION TO DETERMINE THE AVERAGE OF ARRAY ITEMS
// Function Name:   arrayAverage
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the average of the values in anArray.
// Return Value:    The average of the values in anArray.

function arrayAverage(anArray) {
    let sum = 0;      // Assign the sum to be 0
    for (let i = 0; i < anArray.length; i++) {      // Loop through all the indexes while adding them
        sum += anArray[i];        // Add all the indexes to the sum
    }
    let average = sum / anArray.length;       // Divide the sum by the number of indexes to get average
    return average;
}