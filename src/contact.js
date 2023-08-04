function loadContact() {
    const container = document.createElement('div');
    container.setAttribute("id", "menu-container");

    const wrapper1 = document.createElement('div');
    wrapper1.classList.add('wrapper');
    wrapper1.setAttribute("id", "wrapper1");
    const heading1 = document.createElement('p');
    heading1.classList.add('heading');
    heading1.innerHTML = "CONTACT"
    const contact = document.createElement('p');
    contact.setAttribute("id", "contact");
    contact.innerText = "+092 669 0514";
    
    const hours = ['Monday: 11AM - 2PM, 5-10PM', 'Tuesday: 11AM - 2PM, 5-10PM', 'Wednesday: Closed', 'Thursday: 11AM - 2PM, 5-10PM', 'Friday: 11AM - 2PM, 5-10PM', 'Saturday: 11AM - 2PM, 5-10PM', 'Sunday: 11AM - 2PM, 5-10PM']

    const wrapper2 = document.createElement('div');
    wrapper2.classList.add('wrapper');
    const heading2 = document.createElement('p');
    heading2.classList.add('heading');
    heading2.innerHTML = "HOURS";
    const ul = document.createElement('ul');
    ul.setAttribute("id", "hours");

    ul.setAttribute("id", "hours");
    for (let i = 0; i <= hours.length - 1; i++) {
        const li = document.createElement('li');

        li.innerHTML = hours[i];
        ul.appendChild(li);
    }
    
    const wrapper3 = document.createElement('div');
    wrapper3.classList.add('wrapper');
    const heading3 = document.createElement('p');
    heading3.classList.add('heading');
    heading3.innerHTML = "LOCATION";
    const location = document.createElement('p');
    location.setAttribute("id", "location")
    location.innerText = "86 88 Tha Phae Road, Tambon Chang Moi, Mueang Chiang Mai District, Chiang Mai 50300"

    document.body.appendChild(container);
    container.appendChild(wrapper1);
    wrapper1.appendChild(heading1);
    wrapper1.appendChild(contact);

    container.appendChild(wrapper2);
    wrapper2.appendChild(heading2);
    wrapper2.appendChild(ul);

    container.appendChild(wrapper3);
    wrapper3.appendChild(heading3);
    wrapper3.appendChild(location);
}

export default loadContact;