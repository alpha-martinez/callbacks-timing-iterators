

function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name + '. ';

    let otherSentence = callback();

    return sentence + otherSentence;
}


function anotherGreeting() {
    let sentence = 'I forgot my last name ';
    
    
    return sentence;
}


let myName = 'Rome';
console.log(greeting(myName, anotherGreeting));


// exercise 2

function printArray(array, callback) {
    for (i=0; i < array.length; i++) {
        let arr = array[i];

        console.log(arr);
    }
    callback(array);
}

function printArrayAgain(array) {
    for(let i = 0; i < array.length; i++) {
        let arr = array[i];

        console.log(arr);
    }
}

const numbersArray = [1,2,3,4,5,6,7,8,9];

printArray(numbersArray, printArrayAgain);


// exercise 
function calculator(num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne (num1, num2) + callbackTwo(num1, num2);

    return result;
}

function addNumbers(num1, num2){
    sum = num1 + num2

    console.log(sum);
}


function subtractNumbers(num1, num2) {
    sum = num1 - num2

    console.log(sum);

}

console.log(calculator(5, 77, addNumbers, subtractNumbers));