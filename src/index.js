import "./style.scss";

//create navbar
const contentElement = document.getElementById('content');
const navElement = document.createElement('nav');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');

homeDiv.textContent = "Home";
menuDiv.textContent = "Menu";
contactDiv.textContent = "Contact";


navElement.appendChild(homeDiv);
navElement.appendChild(menuDiv);
navElement.appendChild(contactDiv);

contentElement.appendChild(navElement);

//create Home Content

const titleWrapperElement = document.createElement('div');
const headlineElement = document.createElement('h1');
const subtitleElement = document.createElement('div');
const subLine1 = document.createElement('h2');
const subLine2 = document.createElement('h2');

titleWrapperElement.classList.add('title-wrapper');
headlineElement.textContent = 'Awesome restaurant';
headlineElement.classList.add('title');
subtitleElement.classList.add('subtitle');
subLine1.textContent = "Join us for you next meal";
subLine2.textContent = "For the most amazing food";

subtitleElement.appendChild(subLine1);
subtitleElement.appendChild(subLine2);
titleWrapperElement.appendChild(headlineElement);
titleWrapperElement.appendChild(subtitleElement);
contentElement.appendChild(titleWrapperElement);
