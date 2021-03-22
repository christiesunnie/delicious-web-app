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
// Header DOM elements
const hamburger = document.querySelector(".button__hamburger");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");
const cartQuantity = document.querySelector(".cart__quantity");

// Tesimonials section DOM elements
const testimonialContainer = document.querySelector(".testimonials");
const testimonialClient = document.querySelector(".testimonial__client");
const testimonialText = document.querySelector(".testimonial__text");
const prevButton = document.querySelector(".angle--left");
const nextButton = document.querySelector(".angle--right");

// Homepage menu section DOM elements
const menuContainer = document.querySelector(".menu__text");
const minusButton = document.querySelector(".minus__circle");
const plusButton = document.querySelector(".plus__circle");

// Form section on the blog page DOM elements
const userNameBlog = document.getElementById("user__name__blog");
const userEmailBlog = document.getElementById("user__email__blog");
const commentBlog = document.getElementById("comment__blog");
console.log(commentBlog);
const buttonComment = document.querySelector(".button__comment");

// Form section on the contact page DOM elements
const userNameContact = document.getElementById("user__name__contact");
const userEmailContact = document.getElementById("user__email__contact");
const messageContact = document.getElementById("message__contact");
const buttonMessage = document.querySelector(".button__message");

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

// Adding the quantity of the order into the shopping cart event
menuContainer.addEventListener("click", function (e) {
    // Check if the target event is the minus button
    if (
        e.target.classList[0] === "minus__circle" ||
        e.target.classList[1] === "fa-minus-circle"
    ) {
        +cartQuantity.textContent--;
        // Only show the cart quantity if there is the order quantity in the cart
        if (cartQuantity.textContent !== "" && +cartQuantity.textContent > 0) {
            cartQuantity.style.visibility = "visible";
        } else {
            // If there is no order, empty and hide  the cart
            cartQuantity.style.visibility = "hidden";
            cartQuantity.textContent = "";
        }
    }

    // Check if the target event is the plus button
    if (
        e.target.classList[0] === "plus__circle" ||
        e.target.classList[1] === "fa-plus-circle"
    ) {
        // Show the cart and update the order quantity
        cartQuantity.style.visibility = "visible";
        +cartQuantity.textContent++;
    }
});
