const createTitleSection = () => {
    const titleWrapper = document.createElement('div');

    titleWrapper.textContent = 'MENU'

    return titleWrapper;
}

const createMenuSection = () => {

}



const createMenuPage = () => {
    const menuPage = document.createElement('div');

    menuPage.classList.add('menu');
    menuPage.appendChild(createTitleSection());
    // menuPage.appendChild(createMenuSection());

    return menuPage;
}

export { createMenuPage }