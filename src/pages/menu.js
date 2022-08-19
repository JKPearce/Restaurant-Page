const createMenuSection = () => {
    const menuWrapper = document.createElement('div');



    return menuWrapper;
}

const createMenuItem = () => {
    
}



const createMenuPage = () => {
    const menuPage = document.createElement('div');

    menuPage.classList.add('menu');
    menuPage.appendChild(createMenuSection());

    return menuPage;
}

export { createMenuPage }