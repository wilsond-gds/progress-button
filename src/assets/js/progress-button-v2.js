/* eslint no-var: off */
/* eslint no-unused-vars: off */
/* eslint no-undef: off */
// ensure the button does not shrink when the content is changed
var targetButtonOriginalWidth = document
    .getElementById("continue")
    .getBoundingClientRect().width; // eslint-no-var
document.getElementById("continue").style.minWidth =
    Math.round(targetButtonOriginalWidth) + "px"; // no px decimal points

var formSubmitted = false;
var initialWait = 250; // milliseconds
var longWait = 5750; // milliseconds

submitSpinner();

function delayDisableButton(button, visualStatus) {
    visualStatus.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-disabled", "true");
    button.insertAdjacentHTML(
        "afterend",
        '<span class="govuk-visually-hidden" id="screen-reader-status" aria-live="polite"></span>'
    );

    button.className += " button--spinner";

    console.log(button.dataset);
    console.log(button.dataset.statusMessageInitialVisible);

    visualStatus.textContent = button.dataset.statusMessageInitialVisible;
    var screenReaderStatus = document.getElementById("screen-reader-status");
    screenReaderStatus.textContent = button.dataset.statusMessageInitialScreenReader;

    // Wait for the form to be submitted before disabling the button

    var waitForFormSubmit = setTimeout(function () {
        button.setAttribute("disabled", "disabled");
    }, initialWait);

    var changeUserMessage = setTimeout(function () {
        var screenReaderStatus = document.getElementById("screen-reader-status");
        visualStatus.textContent = button.dataset.statusMessageUpdateVisible;
        screenReaderStatus.textContent =button.dataset.statusMessageUpdateScreenReader;
    }, longWait);
}

function submitSpinner() {
    var selects = document.getElementById("continue");
    var visualStatus = document
        .getElementById("continue")
        .getElementsByClassName("visual-message")[0];

    selects.addEventListener("click", function (event) {
        if (!formSubmitted) {
            formSubmitted = true;
            delayDisableButton(event.target, visualStatus);
        } else {
            event.preventDefault();
        }
    });
}