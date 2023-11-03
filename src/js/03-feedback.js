var throttle = require('lodash.throttle');

const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('.feedback-form input');
const textareaElem = document.querySelector('.feedback-form textarea');
const submitBtn = document.querySelector('.feedback-form button');

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  const savedObj = JSON.parse(savedData);
  if (savedObj === null) {
    return;
  }
  inputElem.value = savedObj.email;
  textareaElem.value = savedObj.message;
});

formElem.addEventListener(
  'input',
  throttle(() => {
    const objToSave = { email: inputElem.value, message: textareaElem.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(objToSave));
  }, 500)
);

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log('email: ', inputElem.value);
  console.log('message: ', textareaElem.value);
  formElem.reset();
});
