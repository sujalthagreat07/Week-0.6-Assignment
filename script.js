// ========================================
// WEEK 10: JS BASICS & CONTROL FLOW
// ========================================


// PART 1: TIME-BASED GREETING

// Ask for the user's name
let userName = prompt("What is your name?");

// Get the current hour
let currentHour = new Date().getHours();

// Display greeting based on the time
if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// PART 2: AGE AND DAYS LIVED VERIFICATION

// Ask for the user's birth year
let birthYear = Number(prompt("What year were you born?"));

// Calculate age
let age = 2026 - birthYear;

// Calculate approximate days lived
let daysLived = age * 365;

// Display days lived
console.log(
    "You have lived for approximately " + daysLived + " days!"
);

// Check adult or minor
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}