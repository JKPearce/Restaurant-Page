import "./style.scss";

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