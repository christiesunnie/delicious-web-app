///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
// Form section on the blog page DOM elements
const blogComment = document.querySelector(".blog__comments");
const commentNumbers = document.querySelector(".comment__numbers");

const blogForm = document.querySelector(".blog__form");
const userNameBlog = document.getElementById("user__name__blog");
const userEmailBlog = document.getElementById("user__email__blog");
const userWebsiteBlog = document.getElementById("user__website__blog");
const commentBlog = document.getElementById("comment__blog");
const buttonComment = document.querySelector(".button__comment");

const modalContainer = document.querySelector(".blog__modal");
const modalClose = document.querySelector(".blog__modal--close");

// Get the current date
const today = new Date();
const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
};
const formattedDate = new Intl.DateTimeFormat("en-US", options);
const formattedToday = formattedDate.format(today);

// Create the content of the error message for the form
const errorHtml = `
<h3>You are required to fill out the form!</h3>
`;
modalContainer.insertAdjacentHTML("beforeend", errorHtml);

////////////////////////////////////////////////////////////
///////////////////Functions///////////////////////////////
// Function for formatting the date of comment post
const formatCommentDate = function (date) {
    const calcDaysPassed = (date, date1) =>
        Math.round(Math.abs((date1 - date) / (1000 * 60 * 60 * 24)));
    const daysPassed = calcDaysPassed(new Date(), date);
    if (daysPassed === 0) return "today";
    if (daysPassed === 1) return "yesterday";
    if (daysPassed <= 7 && daysPassed > 1) return `${daysPassed} days ago`;

    return new Intl.DateTimeFormat("en-US").format(date);
};

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
    } else {
        // Create the content of the comment
        const commentToDisplay = `
            <div class="comment">
                <div class="comment__image">
                    <img src="./assets/blog/unknown-user.png" alt="Unknown account image"/>
                </div>
                <div class="comment__text">
                    <p><span>${userNameBlog.value}</span> - Web Developer</p>
                    <p>${commentBlog.value}</p>
                    <p class="blog__date">${formattedToday} at ${formatCommentDate(
            today
        )}</p>
                </div>
            </div>
            `;
        // Display the comment to the comment section
        blogComment.insertAdjacentHTML("beforeend", commentToDisplay);

        // Update the number of comments
        const blogCommentLength = blogComment.children.length - 1;
        if (blogCommentLength < 10) {
            commentNumbers.textContent = `0${blogCommentLength}`;
        } else {
            commentNumbers.textContent = blogCommentLength;
        }
    }
    // Empty the value after click the submit button
    userNameBlog.value = "";
    userEmailBlog.value = "";
    userWebsiteBlog.value = "";
    commentBlog.value = "";
});

// Close modal button event
modalClose.addEventListener("click", function () {
    modalContainer.style.visibility = "hidden";
});
