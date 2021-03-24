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
// Header section DOM elements
const shoppingCart = document.querySelector(".cart");
const modalContainer = document.querySelector(".header__modal");
const modalClose = document.querySelector(".header__modal--close");
const orderContainer = document.querySelector(".order");
const orderList = document.querySelector(".order__list");

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

const buttons = document.querySelectorAll("button");

// Set the index of the current item in the testimonial array
let currentTestimonial = 0;
let currentOrder = 0;

//////////////////////////////////////////////////////////////
////////////////////Functions////////////////////////////////
// Function to create the new order
const orderToDislay = function (item, quantity) {
    const orderItem = `
    <div class="order__item">
        <p class="order__name">${item}</p>
        <button
            class="minus__circle"
            id="vegetarian"
            aria-hidden
            aria-label="Minus button to decrease the quantity of the order"
        >
            <i class="fas fa-minus-circle"></i>
        </button>
         <p class="order__quantity">${quantity}</p>
        <button
            class="plus__circle"
            id="vegetarian"
            aria-hidden
            aria-label="Plus button to decrease the quantity of the order"
        >
            <i class="fas fa-plus-circle"></i>
        </button>
    </div>
    `;
    orderList.insertAdjacentHTML("beforebegin", orderItem);
};

// Function to click the button for the order
const buttonOrder = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            console.log(this);
            modalContainer.style.visibility = "visible";
            if (
                orderContainer.children[0].textContent === "Your cart is empty!"
            ) {
                if (this.className === "plus__circle") {
                    orderContainer.children[0].textContent = "Your cart has:";
                    currentOrder += 1;
                    orderToDislay(this.id, currentOrder);
                } else if (this.className === "minus__circle") {
                    modalContainer.style.visibility = "visible";
                }
            } else {
                orderToDislay(this.id, currentOrder);
            }
        });
    });
};
buttonOrder();

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
// menuContainer.addEventListener("click", function (e) {
//     const targetElement = e.target;
//     // Get the name of the order's items
//     const orderName =
//         targetElement.parentElement.parentElement.children[0].textContent;
//     // Check if the target event is the minus button
//     if (
//         targetElement.classList[0] === "minus__circle" ||
//         targetElement.classList[1] === "fa-minus-circle"
//     ) {
//         +cartQuantity.textContent--;

//         // Only show the cart quantity if there is the order quantity in the cart
//         if (cartQuantity.textContent !== "" && +cartQuantity.textContent > 0) {
//             cartQuantity.style.visibility = "visible";
//             modalContainer.style.visibility = "visible";
//             orderContainer.children[0].textContent = "Your cart has:";
//             // Diplay the order list
//             orderToDislay(orderName, +cartQuantity.textContent - 1);
//         } else {
//             // If there is no order, empty and hide  the cart
//             cartQuantity.style.visibility = "hidden";
//             cartQuantity.textContent = "";
//         }
//     }

//     // Check if the target event is the plus button
//     if (
//         targetElement.classList[0] === "plus__circle" ||
//         targetElement.classList[1] === "fa-plus-circle"
//     ) {
//         // Show the cart and update the order quantity
//         cartQuantity.style.visibility = "visible";
//         +cartQuantity.textContent++;
//         modalContainer.style.visibility = "visible";
//         orderContainer.children[0].textContent = "Your cart has:";
//         // Diplay the order list
//         orderToDislay(orderName, +cartQuantity.textContent);
//     }
// });

// Shopping cart modal event
shoppingCart.addEventListener("click", function () {
    modalContainer.style.visibility = "visible";
});

// Close modal button event
modalClose.addEventListener("click", function () {
    modalContainer.style.visibility = "hidden";
});
