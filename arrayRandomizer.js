var originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  //Set the array of items that you'll be working with
var copyOfOriginalArray = originalArray.slice();  //Create a copy of it by value 
var randomizedArray = [];

window.onload = function() {
    DisplayArray(originalArray, 'originalArrayDiv');  //Display the original array on the web page
}

//A function that displays a specified array on a web page
//The web page must contain an HTML element with the ID of the specified 'outputId'
function DisplayArray(array, outputId) {
    var output = '';
    for (var i=0; i <= array.length - 1; i++) {
        if(i < array.length - 1) {
            output += '<span>' + array[i] + ', </span>';
        }
        else {
            output += '<span>' + array[i] + '</span>';
        }
    }
    var targetDiv = document.getElementById(outputId);
    targetDiv.innerHTML = output;   
}


//A function that randomly shuffles the original array
function RandomizeArray() {
    var randomIndex;
    var itemToAdd;
    var originalArrayLength = originalArray.length;  //Need to know the length of the original array in its initial form
    
    //A loop that randomly choses an index of the remaining array,
    //then selects the item in the remaining array at that index,
    //then puts that item into the new "shuffled" array,
    //then removes that item from the original array
    for (var i=0; i <= originalArrayLength - 1; i++) {
        randomIndex = Math.floor((Math.random() * (originalArrayLength - i)));  //Select an index of the remaining original array
        itemToAdd = originalArray[randomIndex];  //Select the item in the original array that is at the randomly chosen index
        
        randomizedArray[i] = itemToAdd;         //Put that item in the new array
        originalArray.splice(randomIndex, 1);  //Remove array element at the index of the randomly chosen index
    }
    
    DisplayArray(randomizedArray, 'randomizedArrayDiv');  //Once the new shuffled array is completely built, display it on the web page
    
    originalArray = copyOfOriginalArray.slice(); //In case you want to re-shuffle it, you need to restore the originalArray back to its initial form
}
