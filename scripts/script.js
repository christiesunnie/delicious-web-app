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

let currentTestimonial = 0;

//////////////////////////////////////////////////////////////
////////////////////Functions////////////////////////////////
const navToggle = function () {
    navList.classList.toggle("show__links");
    navSearch.classList.toggle("show__links");
    hamburger.classList.toggle("button__rotate");
};

const testimonialsFunc = function (person) {
    const item = testimonials[person];
    testimonialClient.textContent = item.client;
    testimonialText.textContent = item.text;
};

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
hamburger.addEventListener("click", navToggle);

prevButton.addEventListener("click", function () {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = 0;
        prevButton.style.display = "none";
        nextButton.style.display = "block";
    } else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
    testimonialsFunc(currentTestimonial);
});

nextButton.addEventListener("click", function () {
    currentTestimonial++;
    if (currentTestimonial > testimonials.length - 1) {
        currentTestimonial = testimonials.length - 1;
        nextButton.style.display = "none";
        prevButton.style.display = "block";
    } else {
        nextButton.style.display = "block";
        prevButton.style.display = "block";
    }
    testimonialsFunc(currentTestimonial);
});
