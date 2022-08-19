import schnitzelImage from "../assets/imgs/schnitzel.jpeg";
import butterChickenImage from "../assets/imgs/butterchicken.jpeg";
import mongolianBeefImage from "../assets/imgs/mongolianbeef.jpeg";

const createMenuSection = () => {
    const menuWrapper = document.createElement('div');

    menuWrapper.appendChild(createMenuItem("Schnitzel", "Tender chicken breast coated in breadcrumbs and fried topped with lemon", schnitzelImage));
    menuWrapper.appendChild(createMenuItem("Butter Chicken", "Authentic Indian butter chicken with naan", butterChickenImage));
    menuWrapper.appendChild(createMenuItem("Mongolian Beef", "Sizzling hot authentic Mongolian Beef with rice", mongolianBeefImage));

    return menuWrapper;
}

const createMenuItem = (name, description, image) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description

    const foodImage = document.createElement('img');
    foodImage.src = image;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}



const createMenuPage = () => {
    const menuPage = document.createElement('div');

    menuPage.classList.add('menu');
    menuPage.appendChild(createMenuSection());

    return menuPage;
}

export { createMenuPage }