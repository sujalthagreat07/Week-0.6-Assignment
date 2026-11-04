
let userName = prompt("What is your name?");


let currentHour = new Date().getHours();


if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}



let birthYear = Number(prompt("What year were you born?"));


let age = 2026 - birthYear;


let daysLived = age * 365;


console.log(
    "You have lived for approximately " + daysLived + " days!"
);


if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
