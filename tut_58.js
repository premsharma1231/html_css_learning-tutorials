console.log("This is Tutorial 55..");
console.log("Let's see about for loop in 3 steps");


// This is the simple funtion to print the program for forEach element 
// let friends = ["Prem" , "Sharma" ,"Abhishek" , "Deep" , "Abhay"];
// This is the for each function
// friends.forEach(function f(element) {
//     console.log("Hello " + element);
// });


// This is also the simple way and some advance JavaScript to print the for loop
// let friends = ["Prem" , "Sharma" ,"Abhishek" , "Deep" , "Abhay"];
// for (name of friends) {
//     console.log("Hello - " + name);    
// }

// console.log(friends.length);



// This is the simple way to use the for loop and print the for loop even by using any sentence
// for (let index = 0; index < friends.length; index++) {
//     var element = friends[index];
//     console.log("Hello - " + element);
// }


// Now this is the object making and printing it in proper sentence way by writing in the for loop
let employee = {
    name: 'prem',
    salary: 12,
    channel: "CodeWithPrem"
}

// This forloop is used to iterate over the objects 
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}
// As you can see in this browser that how it is working and how i am printing this code
// here the key denotes the variable names in this program
// and the employee{key} is used to show the value of the variable



// Now lets learn while loop in JS
let i = parseFloat(prompt("Enter The Number : " , "e.g , 1 ,3"));
while (i<4) {
    console.log(`${i} is less than 4`);
    i++;
}