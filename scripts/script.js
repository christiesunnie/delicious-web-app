///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
// Header DOM elements
const hamburger = document.querySelector(".button__hamburger");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");

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

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
// Hamburger event
hamburger.addEventListener("click", navToggle);
