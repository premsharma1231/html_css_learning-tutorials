// This is an tutorial regarding three user interaction using alert , prompt and confirm


// This is an alert function
// Here it is an alert message we can display the message on the top 

// alert("This is an message to get the proper answer from you\n")


// let name = prompt("What is your name?" ,"Guest??");
// console.log(name);


// This is the confirm from the user
// This is the confirm option to take the perfect action from the customer 
// So here i made the simple program to print the program even and odd program by using if and else function
// Where your condition is true then it will make you eligible for the odd and even program 
// But when the condition is false it will say you that you are not eligible for the even and odd program 
// let deletePost = confirm("Do you really want to delete this file??");
// console.log(deletePost);
// if(deletePost==true){
//     console.log("You are eligible to check the odd and even number");
//     let input = parseFloat(prompt("Enter The Number","e.g, 2"));
//     even = input%2;
//     if(even==0){
//         console.log("Entered Number is EVEN");
//     }
//     else{
//         console.log("Entered Number is ODD");
//     }
// }
// else{
//     console.log("You are not eligible to check the odd and even number try again later");
// }



    let age = parseFloat(prompt("Enter Your age-?" , "age.."));
    if (age>=18) {
        alert("you are allowed")
        console.log("Welcome to the club");
    } else {
        alert("access denied")
        console.log("You are not allowed in the club");
    }
