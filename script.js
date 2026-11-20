
/* ========================================
   WEEK 10: TIME-BASED GREETING
======================================== */

let userName = prompt("What is your name?");

let currentHour = new Date().getHours();

if (currentHour < 12) {

    console.log("Good morning, " + userName + "!");

} else if (currentHour < 18) {

    console.log("Good afternoon, " + userName + "!");

} else {

    console.log("Good evening, " + userName + "!");

}


/* ========================================
   WEEK 10: AGE AND DAYS LIVED
======================================== */

let birthYear = Number(prompt("What year were you born?"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let daysLived = age * 365;

console.log(
    "You have lived for approximately " + daysLived + " days!"
);

if (age >= 18) {

    console.log("You are an adult.");

} else {

    console.log("You are a minor.");

}


/* ========================================
   WEEK 11: DARK MODE TOGGLE
======================================== */

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "Light Mode";

        } else {

            themeButton.textContent = "Dark Mode";

        }

    });

}


/* ========================================
   WEEK 12: ARRAYS AND LOOPS
   STEP 1: HOBBY LIST RENDERING
======================================== */

// Step 1: Create an array of hobbies

const hobbies = [
    "Photography",
    "Playing Guitar",
    "Traveling",
    "Learning New Technologies",
    "Making Content"
];


// Step 2: Find the HTML container

const listContainer = document.getElementById("hobby-list");


// Step 3: Create an unordered list

const ul = document.createElement("ul");


// Step 4: Use a for loop to display each hobby

for (let i = 0; i < hobbies.length; i++) {

    const li = document.createElement("li");

    li.textContent = hobbies[i];

    ul.appendChild(li);

}


// Step 5: Display the list on the website

if (listContainer) {

    listContainer.appendChild(ul);

}


/* ========================================
   WEEK 12: FIVE-PHOTO IMAGE GALLERY
   OPTIONAL EXTENSION
======================================== */

// Step 1: Create an array containing five images

const images = [
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "fourth.jpg",
    "fifth.jpg"
];


// Step 2: Start from the first image

let currentIndex = 0;


// Step 3: Find the gallery HTML elements

const galleryImage = document.getElementById("gallery-image");

const nextButton = document.getElementById("next-photo");

const photoCounter = document.getElementById("photo-counter");


// Step 4: Check that gallery elements exist

if (galleryImage && nextButton && photoCounter) {

    // Step 5: Display the current image

    function showPhoto() {

        galleryImage.src = images[currentIndex];

        galleryImage.alt =
            "My gallery photo " + (currentIndex + 1);

        photoCounter.textContent =
            "Photo " + (currentIndex + 1) + " of " + images.length;

    }


    // Step 6: Add a click event listener

    nextButton.addEventListener("click", function() {

        currentIndex++;

        // Return to the first image after the last image

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }

        showPhoto();

    });


    // Step 7: Check if an image cannot be loaded

    galleryImage.addEventListener("error", function() {

        console.error(
            "Image could not be loaded: " + images[currentIndex]
        );

    });


    // Step 8: Display the first image when the page loads

    showPhoto();

}
