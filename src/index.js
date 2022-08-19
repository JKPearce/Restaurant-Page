import "./style.scss";
import { createHomePage } from "./pages/home";
import { createMenuPage } from "./pages/menu";
import { createContactPage } from "./pages/contact";

const contentElement = document.getElementById('content');

const createNavSection = () => {
    const navElement = document.createElement('nav');
    const homeDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    homeDiv.textContent = "Home";
    homeDiv.setAttribute('data-nav-button', 1);
    menuDiv.textContent = "Menu";
    menuDiv.setAttribute('data-nav-button', 2);
    contactDiv.textContent = "Contact";
    contactDiv.setAttribute('data-nav-button', 3);

    navElement.addEventListener('click', (e) => {
        const currentTab = parseInt(e.target.dataset.navButton);
        contentElement.innerHTML = ''; //current page
        switch (currentTab) {
            case 1:
                contentElement.appendChild(createHomePage());
                break;
            case 2:
                contentElement.appendChild(createMenuPage());
                break;
            case 3:
                contentElement.appendChild(createContactPage());
                break;
            default:
                console.log("error occurred setting menu tab");
                break;
        }
    });

    navElement.appendChild(homeDiv);
    navElement.appendChild(menuDiv);
    navElement.appendChild(contactDiv);

    return navElement;
};

const createFooter = () => {
    const footerWrapper = document.createElement('footer');
    const gitHubIcon = document.createElement('a');

    gitHubIcon.href = 'https://github.com/JKPearce';
    gitHubIcon.textContent = " Made by Jaydon Pearce";

    footerWrapper.appendChild(gitHubIcon);

    return footerWrapper;
}

contentElement.before(createNavSection());
// contentElement.appendChild(createHomePage());
contentElement.appendChild(createContactPage());
contentElement.after(createFooter());
