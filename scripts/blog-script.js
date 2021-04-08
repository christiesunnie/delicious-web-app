///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
// Form section on the blog page DOM elements
const blogComment = document.querySelector(".blog__comments");
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
};

// Function to set comments in localStorage
const addedCommentToLocalStorage = function (
    id,
    userName,
    userJob,
    comment,
    date,
    time
) {
    const commentList = {
        id,
        userName,
        userJob,
        comment,
        date,
        time,
    };
    let items = getCommentToLocalStorage();
    items.push(commentList);
    localStorage.setItem("commentList", JSON.stringify(items));
};

// Function to get comments from localStorage
const getCommentToLocalStorage = function () {
    return localStorage.getItem("commentList")
        ? JSON.parse(localStorage.getItem("commentList"))
        : [];
};

// Function to update the comment
const commentLength = (num) => {
    const commentNumbers = document.querySelector(".comment__numbers");
    if (num < 10) {
        commentNumbers.textContent = `0${num}`;
    } else {
        commentNumbers.textContent = num;
    }
};

// Set up the comment from localStorage
const setupItems = () => {
    let items = getCommentToLocalStorage();

    if (items.length > 0) {
        items.forEach((item) => {
            createListItem(
                item.id,
                item.userName,
                item.userJob,
                item.comment,
                item.date,
                today
            );
        });
        // Update the number of comments
        commentLength(items.length + 2);
    }
};

const createListItem = (id, userName, userJob, comment, date, time) => {
    const commentToDisplay = `
        <div class="comment" data-id=${id}>
            <div class="comment__image">
                <img src="./assets/blog/unknown-user.png" alt="Unknown account image"/>
            </div>
            <div class="comment__text">
                <p><span>${userName}</span> ${
        userJob !== "" ? `- ${userJob}` : ""
    } </p>
                <p>${comment}</p>
                <p class="blog__date">${date} at ${formatCommentDate(time)}</p>
            </div>
        </div>
            `;
    // Display the comment to the comment section
    blogComment.insertAdjacentHTML("beforeend", commentToDisplay);
};

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
window.addEventListener("DOMContentLoaded", setupItems);

// Submit button on blog page and listen to the event
buttonComment.addEventListener("click", function () {
    const userNameBlog = document.getElementById("user__name__blog");
    const userJobBlog = document.getElementById("user__job__blog");
    const commentBlog = document.getElementById("comment__blog");
    const userEmailBlog = document.getElementById("user__email__blog");
    if (
        userNameBlog.value === "" ||
        userEmailBlog.value === "" ||
        commentBlog.value === ""
    ) {
        modalContainer.style.visibility = "visible";
        if (modalContainer.children.length === 1) {
            const errorHtml = `
            <h3>You are required to fill out the form!</h3>
            `;
            modalContainer.insertAdjacentHTML("beforeend", errorHtml);
        }
    } else {
        createListItem(
            new Date().getTime(),
            userNameBlog.value,
            userJobBlog.value,
            commentBlog.value,
            formattedToday,
            today
        );
        addedCommentToLocalStorage(
            new Date().getTime(),
            userNameBlog.value,
            userJobBlog.value,
            commentBlog.value,
            formattedToday,
            today
        );

        // Update the number of comments
        console.log();
        commentLength(blogComment.children.length - 1);
    }
    // Empty the value after click the submit button
    userNameBlog.value = "";
    userEmailBlog.value = "";
    userJobBlog.value = "";
    commentBlog.value = "";
});

// Close modal button event
modalClose.addEventListener("click", function () {
    modalContainer.style.visibility = "hidden";
});
