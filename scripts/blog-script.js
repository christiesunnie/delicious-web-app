///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
// Form section on the blog page DOM elements
const blogForm = document.querySelector(".blog__form");
const userNameBlog = document.getElementById("user__name__blog");
const userEmailBlog = document.getElementById("user__email__blog");
const userWebsiteBlog = document.getElementById("user__website__blog");
const commentBlog = document.getElementById("comment__blog");
const buttonComment = document.querySelector(".button__comment");
const modalContainer = document.querySelector(".blog__modal");
const modalClose = document.querySelector(".blog__modal--close");

// Create the content of the error message for the form
const errorElement = document.createElement("h3");
errorElement.textContent = "You are required to fill out the form!";
modalContainer.appendChild(errorElement);

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
// Submit button on blog page and listen to the event
buttonComment.addEventListener("click", function () {
    // document.querySelectorAll("textarea")
    if (
        userNameBlog.value === "" ||
        userEmailBlog.value === "" ||
        commentBlog.value === ""
    ) {
        modalContainer.style.visibility = "visible";
    }
    userNameBlog.value = "";
    userEmailBlog.value = "";
    userWebsiteBlog.value = "";
    commentBlog.value = "";
});

// Close modal button event
modalClose.addEventListener("click", function () {
    modalContainer.style.visibility = "hidden";
});
