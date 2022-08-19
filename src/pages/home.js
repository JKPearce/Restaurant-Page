const createTitleSection = () => {
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

    return titleWrapperElement;
}

const createBottomSection = () => {
    const bottomWrapper = document.createElement('div');
    const uberIcon = document.createElement('button');
    const orderNowText = document.createElement('p'); 

    bottomWrapper.classList.add("bottom-wrapper");

    orderNowText.textContent = "Order now";
    uberIcon.classList.add("uber-icon-button");
    uberIcon.style.backgroundImage = 'url("https://play-lh.googleusercontent.com/MMBG4AZmpMhSfhF5k7QnFmhvFbaF5ZC_BtEOIKRt9TIkUZjul2lWwPZV75PwTfoSm23-jgMxkroRGA-vkDg=s180-rw")';
    
    bottomWrapper.appendChild(orderNowText);
    bottomWrapper.appendChild(uberIcon);

    return bottomWrapper;
}

const createHomePage = () =>{
    const homePage = document.createElement('div');
    homePage.classList.add('home');
    homePage.appendChild(createTitleSection());
    homePage.appendChild(createBottomSection());

    return homePage;
}

export {createHomePage};

