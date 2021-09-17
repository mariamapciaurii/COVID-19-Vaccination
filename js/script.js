//Selecting all required 

const start = document.querySelector(".survey-start");
const startButton = document.querySelector(".survey-start__button");

//Custumer Container
const form = document.querySelector(".survey-form");
const surveyForm = document.querySelector(".survey-form__page");
const identificationForm = document.querySelector(".survey-form__page")


const nextButton = document.querySelector(".survey-form__next")


// if start button clicked
startButton.onclick = () => {
form.classList.remove("survey-form--hidden");
start.classList.add("survey-start--hidden");
};


//if next button clicked 
// nextButton.onclick = () => {
//     surveyForm.classList.remove("survey-form__page--active");
// }



