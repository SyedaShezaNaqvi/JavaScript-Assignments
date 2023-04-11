// Task_Number_1

let firstNumber = +prompt("Enter First Number");
let secondNumber = +prompt("Enter Second Number");
if(firstNumber > secondNumber){
    console.log(firstNumber)
}else if(secondNumber > firstNumber){
    console.log(secondNumber)
}else{
    console.log("The Numbers Are Equal")
}


// Task_Number_2

let userInput = +prompt("Enter A Positive Or Negative Number:");
if(userInput > 0){
    alert("The sign of this number is +")
}else if(userInput < 0){
    alert("The sign of this number is -")
}else{
    alert("Zero is neither +ve nor -ve")
}


// Task_Number_3

let firstInput = +prompt("Enter First Number:");
let secondInput = +prompt("Enter Second Number:");
let thirdInput = +prompt("Enter Third Number:");
let fourthInput = +prompt("Enter Fourth Number:");
let fifthInput = +prompt("Enter Fifth Numbber:");

if (firstInput>secondInput && firstInput>thirdInput && firstInput>fourthInput && firstInput>fifthInput){
    console.log("The largest number is " + firstInput)
}else if (secondInput>firstInput && secondInput>thirdInput && secondInput>fourthInput && secondInput>fifthInput){
    console.log("The largest number is: " + secondInput)
}else if (thirdInput>firstInput && thirdInput>secondInput && thirdInput>fourthInput && thirdInput>fifthInput){
    console.log("The largest number is: " + thirdInput)
}else if (fourthInput>firstInput && fourthInput>secondInput && fourthInput>thirdInput && fourthInput>fifthInput){
    console.log("The largest number is: " + fourthInput)
}else {
    console.log("The largest number is: " + fifthInput)
}


//Task_Number_4

for(let i=0; i<=15; i++){
    if(i%2===0){
        console.log(i + " is even")
    }else{
        console.log(i + " is odd")
    }
}


//Task_Number_5

let marks = +prompt("Enter Your Obtained Marks Out Of 100:")

if(marks>90 && marks<=100){
    console.log("Your grade is A")
}else if (marks>80 && marks<=90){
    console.log("Your grade is B")
}else if (marks>70 && marks<=80){
    console.log("Your grade is C")
}else if (marks>60 && marks<=70){
    console.log("Your grade is D")
}else if (marks<=60){
    console.log("Your grade is F")
}else{
    console.log("The marks you have entered are out of range")
}


//Task_Number_6

for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(i + " FizzBuzz")
    }else if(i%3===0){
        console.log(i + " Fizz")
    }else if (i%5===0){
        console.log(i + " Buzz")
    }else{
        console.log(i)
    }
}


//Task_Number_7

let star = ""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        star += "*"
    }
    star += "\n"
}
console.log(star)