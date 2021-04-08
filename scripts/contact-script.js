///////////////////////////////////////////////////////////////
//////////////////////Variables///////////////////////////////
// Form section on the contact page DOM elements
const buttonMessage = document.querySelector(".button__message");
const modalContainer = document.querySelector(".contact__modal");
const modalClose = document.querySelector(".contact__modal--close");

////////////////////////////////////////////////////////////
///////////////////Events//////////////////////////////////
// Submit button on blog page and listen to the event
buttonMessage.addEventListener("click", function () {
    const userNameContact = document.getElementById("user__name__contact");
    const userEmailContact = document.getElementById("user__email__contact");
    const messageContact = document.getElementById("message__contact");
    const subjectContact = document.getElementById("subject__contact");
    if (
        userNameContact.value === "" ||
        userEmailContact.value === "" ||
        messageContact.value === ""
    ) {
        modalContainer.style.visibility = "visible";
        // Create the content of the error message for the form
        if (modalContainer.children.length === 1) {
            const errorHtml = `
            <h3>You are required to fill out the form!</h3>
            `;
            modalContainer.insertAdjacentHTML("beforeend", errorHtml);
        }
    }
    userNameContact.value = "";
    userEmailContact.value = "";
    subjectContact.value = "";
    messageContact.value = "";
});

// Close modal button event
modalClose.addEventListener("click", function () {
    modalContainer.style.visibility = "hidden";
});
