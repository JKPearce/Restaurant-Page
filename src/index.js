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
const headlineElement = document.createElement('div');
const aboutElement = document.createElement('div');

headlineElement.textContent= 'Awesome restaurant';
headlineElement.classList.add('title');
aboutElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit commodi ex soluta accusamus ad ipsum, cumque deserunt exercitationem consectetur voluptas asperiores qui ea aspernatur animi molestiae iusto pariatur itaque sint voluptatibus quasi. Quia, ab! Ex, odio! Sunt, aspernatur repellat.";
aboutElement.classList.add('about')


contentElement.appendChild(headlineElement);
contentElement.appendChild(aboutElement);

console.log("gh")