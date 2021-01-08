//=======================
//BASIC IF/ELSE
//=======================

let random = Math.random();

if(random < 0.5){
    console.log("Your number is less than 0.5!");
}else{
    console.log("Your number is greater than 0.5!");
}
console.log(random);


//=======================
//NESTING CONDITIONALS
//=======================

const password = prompt("Please enter a new password");

//Password must be of 6+ characters
if(password.length >= 6){
    //Password cannot include space
    if(password.indexOf(' ') === -1){
        console.log("Valid Password!");
    }else{
        console.log("Password cannot contain space!");
    }
}else{
    console.log("Password is too short, just like you");
}

//=======================
//Logical AND Operator
//=======================
const password = prompt("Enter your password");

//Password must be of 6+ characters
if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("Valid password!");
}else{
    console.log("Incorrect format for password!");
}

//==================================
//Logical OR Operator || Age example
//==================================
// 0-5 free
// 5-10 not free
// 10-75 not free
// 76+ free

const age = 14;
if((age >= 0 && age < 5) || age >= 76){
    console.log("FREE!");
}else if(age >=5 && age < 10){
    console.log("Pay up $10 bucks");
}else if(age >= 10 && age < 76){
    console.log("Pay up $20 bucks!");
}else{
    console.log("INVALID AGE");
}

//=======================
//TRUTHY / FALSY
"" //an empty string, which is a falsy value
" " //no longer a flasy value
//=======================

const userInput = prompt("Enter something"); //typed null , prompt converts it to "null"
console.log(userInput);
console.log(typeof userInput);
if(userInput){
    console.log("TRUTHY!");
}else{
    console.log("FALSY!");
}

if(0){
    console.log("0 is TRUTHY!");
}else{
    console.log("0 is FALSY!");
}

if(" "){
    console.log("TRUTHY!");
}else{
    console.log("FALSY!");
}