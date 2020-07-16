

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
    sum = num1 + num2 // should have been let result = num1 + num2;

    console.log(sum); //should have been return result(sum);
}


function subtractNumbers(num1, num2) {
     sum = num1 - num2;  //should have been let result(sum) = num1 - num2;

    console.log(sum); //should have been return result(sum in this case);

}

console.log(calculator(5, 77, addNumbers, subtractNumbers));

//exercise numero tres
//make a superHero function
//take in two callbacks
// return a string in each callback describing the superhero 

function superHero (name, callbackTwo){
    let hero = "I am " +  name + " and one of my powers is I can shoot lasers." + " ";
    let otherSuperhero = callbackTwo();

    return hero + otherSuperhero;
}

function superHeroTwo (){ 
    let hero = "I also can fly." + " ";

    return hero;
}


let name = "Superman";
console.log(superHero(name, superHeroTwo));

//rome's example

function sonic(superPowerOne, superPowerTwo) {
    let allSuperPowers = superPowerOne() + ' and ' + superPowerTwo();

    return allSuperPowers;
}

function superSpeed() {
    let power = 'I can run 1000 mph';

    return power;
}

function superSpin(){
    let spin = "I can spin 1000 mph";

    return spin;
}

console.log(sonic(superSpeed, superSpin));


function blastOff(){
    let num = 0;

    for (let i = 10; i >= num; i--){
        console.log(i);
    }
    console.log("blast Off");
}

setTimeout(blastOff, 5000);


//make a function that prints your name
//selfTimeout and pass in function and a time (5000)

function jojo() {
    let num = 0;

    for (let i = 10; i >= num; i--){
        console.log(i);
    }

    console.log("HEY! My name is Alpha!");

}

setTimeout(jojo, 5000);

//how it should have been done

function printName(name) {
    console.log(name);
}

let myNameTwo = 'Rome';
setTimeout(function() {
    printName(myNameTwo);
}, 5000); 



//forEach

const collectables = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepillar'];

// collectables.forEach (function(element){
//     console.log(element);
// })


collectables.forEach(element => {
    if (element.length > 6) {
        console.log(element);
    }    
});


//map returns an array of changes made in each element

const someNumbers = [90, 20, 39, 20];

const addFive = someNumbers.map(element => {
    return element + 5; //must return something 
});

console.log(addFive);


//filter you can return something based off a condition

const newNumbers = someNumbers.filter(element => {
    if (element > 50) {
        return element;
    }
});

console.log(newNumbers);
