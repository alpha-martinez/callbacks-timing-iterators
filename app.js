

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

