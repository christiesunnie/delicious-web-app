///////////////////////////////////////////////////////////////
//////////////////////Arrays//////////////////////////////////
const testimonials = [
    {
        client: "hungry clients",
        text:
            "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radichhio turnio chicory salsify sprouts fava bean. Dandellion zucchini burdock yarrow chickpea dandellion.",
    },
    {
        client: "John Smith",
        text:
            "Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radichhio turnio chicory salsify sprouts fava bean. Dandellion zucchini burdock yarrow chickpea dandellion.",
    },
    {
        client: "Bob David",
        text:
            "Parley shallot courgette tatsoi pea sprouts fava bean collard greens dandellion okra wakame tomato. Dandellion cucumber earthnut pea peanut soko zucchini.",
    },
    {
        client: "Amanda First",
        text:
            "Gumbo beet greens corn endive gumbo gourd. Parley shallot courgette tatsoi pea sprouts fava bean collard greens dandellion okra wakame tomato. ",
    },
];

///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
const hamburger = document.querySelector(".button__hamburger");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");
const testimonialContainer = document.querySelector(".testimonials");
const testimonialClient = document.querySelector(".testimonial__client");
const testimonialText = document.querySelector(".testimonial__text");
const prevButton = document.querySelector(".angle--left");
const nextButton = document.querySelector(".angle--right");

// Set the index of the current item in the testimonial array
let currentTestimonial = 0;

//////////////////////////////////////////////////////////////
////////////////////Functions////////////////////////////////
// Function to toggle the hambuger menu
const navToggle = function () {
    // Toggle the show__links class
    navList.classList.toggle("show__links");
    navSearch.classList.toggle("show__links");
    // Toogle the button__rotate class
    hamburger.classList.toggle("button__rotate");
};

// Function to get the data from testimonial array
const testimonialsFunc = function (person) {
    // Store the objects in the testimonial array
    const item = testimonials[person];
    // Print the client property on the page
    testimonialClient.textContent = item.client;
    // Print the text property on the page
    testimonialText.textContent = item.text;
};

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
// Hamburger event
hamburger.addEventListener("click", navToggle);

// Previous button in the testimonials event
prevButton.addEventListener("click", function () {
    // Go to the previous testimonials
    currentTestimonial--;
    // Check if the current testimonial index is the first object in the array; if yes then set the previous button display: "none" to stop the user clicking it
    if (currentTestimonial < 0) {
        currentTestimonial = 0;
        prevButton.style.display = "none";
        nextButton.style.display = "block";

        // If the current testimonial index is greater than 0-based index; then shows both buttons to slide back and forth
    } else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
    // Print the data of the testimonial array on the page
    testimonialsFunc(currentTestimonial);
});

// Next button in the testimonials event
nextButton.addEventListener("click", function () {
    // Go to the next testimonials
    currentTestimonial++;
    // Check if the current testimonial index is the last object in the array; if yes then set the next button display: "none" to stop the user clicking it
    if (currentTestimonial > testimonials.length - 1) {
        currentTestimonial = testimonials.length - 1;
        nextButton.style.display = "none";
        prevButton.style.display = "block";

        // If the current testimonial index is lesser than the last object index in the array; then shows both buttons to slide back and forth
    } else {
        nextButton.style.display = "block";
        prevButton.style.display = "block";
    }
    // Print the data of the testimonial array on the page
    testimonialsFunc(currentTestimonial);
});
