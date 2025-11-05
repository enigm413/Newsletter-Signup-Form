// Define Necessary DOM Elements
const userInputEl = document.querySelector(".user-input");
const submitBtnEl = document.querySelector("#submit-btn");
const signUpEl = document.querySelector(".signup-wrapper");
const successMsgEl = document.querySelector(".success-msg-wrapper");
const errorMsgEl = document.querySelector(".error-msg");
const emailEl = document.querySelector(".email");

//Define Necessary Variables
let email = "";
let isValidEmail = false;
const emailPattern = /^[a-z]([.-_]?[a-z0-9]+)*@[a-z]+.([a-z]{2,})$/gi;

//Adding Event Listner To Input Element
userInputEl.addEventListener("change", (event) => {
  email = event.target.value;
  isValidEmail = emailPattern.test(email);
});

//Adding Event Listner To Submit Btn
submitBtnEl.addEventListener("click", () => {
  if (isValidEmail === true) {
    signUpEl.classList.add("display--none");
    successMsgEl.classList.remove("display--none");
    emailEl.textContent = email;
  } else {
    errorMsgEl.classList.remove("display--none");
  }
});
