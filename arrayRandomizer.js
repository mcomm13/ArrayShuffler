var originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var copyOfOriginalArray = originalArray.slice();
var randomizedArray = [];

window.onload = function() {
    DisplayArray(originalArray, 'originalArrayDiv');;
}

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

function RandomizeArray() {
    var randomIndex;
    var itemToAdd;
    var originalArrayLength = originalArray.length;
    
    for (var i=0; i <= originalArrayLength - 1; i++) {
        randomIndex = Math.floor((Math.random() * (originalArrayLength - i)));
        itemToAdd = originalArray[randomIndex];
        
        randomizedArray[i] = itemToAdd;
        originalArray.splice(randomIndex, 1);  //Remove array element at index of 'randomIndex'
    }
    
    DisplayArray(randomizedArray, 'randomizedArrayDiv');
    
    originalArray = copyOfOriginalArray.slice(); //In case you want to re-sort it, you need to restore the originalArray back to its initial form
}