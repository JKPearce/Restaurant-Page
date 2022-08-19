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
    homeDiv.classList.add('active');
    menuDiv.textContent = "Menu";
    menuDiv.setAttribute('data-nav-button', 2);
    contactDiv.textContent = "Contact";
    contactDiv.setAttribute('data-nav-button', 3);


    navElement.addEventListener('click', (e) => {
        const currentTab = parseInt(e.target.dataset.navButton);
        if (isNaN(currentTab)) return;
        //reset to defaults
        contentElement.innerHTML = '';
        homeDiv.classList.remove('active');
        menuDiv.classList.remove('active');
        contactDiv.classList.remove('active');


        switch (currentTab) {
            case 1:
                homeDiv.classList.add('active');
                contentElement.appendChild(createHomePage());
                break;
            case 2:
                menuDiv.classList.add('active');
                contentElement.appendChild(createMenuPage());
                break;
            case 3:
                contactDiv.classList.add('active');
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
contentElement.appendChild(createHomePage());
contentElement.after(createFooter());
