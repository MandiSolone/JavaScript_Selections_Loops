console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1 for loop:\n==========\n");

// For Loop

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(`${i}`);
  }
};


//While Loop
/*
let i = 1; 

while (i <100) {
    if (i % 2 !== 0){
        console.log(i); 
    }
    i++;
} */

//Do While Loop
/*
let x = 1;
do {
  if (x % 2 == 1) {
    console.log(x);
  }
  x++;
} while (x <= 100);
 */

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/*for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log(`FIZZBUZZ`);
    } else if (i % 3 == 0) {
        console.log(`FIZZ`);
    } else if (i % 5 == 0) { 
        console.log(`BUZZ`);
    } else {
        console.log(i);
    }
}; */

// while loop 
/*let i = 1 

while (i<100){
    if ((i % 3 ==0) && (i % 5 ==0)){
        console.log(`FIZZBUZZ`); 
    } else if (i % 3 ==0){ 
        console.log(`FIZZ`); 
    }   else if (i % 5==0){
        console.log(`BUZZ`);
    }   else {
        console.log(i);
    }
    i++;
}*/  

//do/while loop 
console.log("EXERCISE 2 do/while loop:\n==========\n");
let i = 1 

do {
    if ((i % 3 ==0) && (i % 5 ==0)){
        console.log(`FIZZBUZZ`); 
    } else if (i % 3 ==0){ 
        console.log(`FIZZ`); 
    }   else if (i % 5==0){
        console.log(`BUZZ`);
    }   else {
        console.log(i);
    }
    i++;
} while (i<100);

//Exercise 4 
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let m = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= m; i++){
    if ( i == numberToFind){
        console.log(`Found ${numberToFind}`);
    break;
    }

    if (i ==m) {
        console.log(`Did not find ${numberToFind} within 1-${m}`); 
    }
}
 
//Exercise 5 
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
    if ((i % fizzDivisor == 0) && (i % buzzDivisor == 0)){
        console.log(`FIZZBUZZ`);
    } else if (i % fizzDivisor == 0) {
        console.log(`FIZZ`);
    } else if (i % buzzDivisor == 0) { 
        console.log(`BUZZ`);
    } else {
        console.log(i);
    }
};

console.log(fizzDivisor, buzzDivisor);
