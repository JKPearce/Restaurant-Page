const createContactPage = () => {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = "📞 0412 345 678";

    const address = document.createElement('p');
    address.innerText = "🏠 1 George Street, Sydney, Australia";

    const map = document.createElement('div');
    map.classList.add('map');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6254901535112!2d151.2043210510523!3d-33.873541380560006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3c2f2e6101%3A0x3e67ba6456529ff2!2s1%20George%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1660889119138!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    contactWrapper.appendChild(phoneNumber);
    contactWrapper.appendChild(address);
    contactWrapper.appendChild(map);

    return contactWrapper;
}

export { createContactPage };