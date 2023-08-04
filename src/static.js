function loadHeader() {
    
    const wrapper1 = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = "maadae_logo.png";
    
    const wrapper2 = document.createElement('div')
    const title = document.createElement('div');
    title.innerText = "Slow Fish Kitchen";

    const wrapper3 = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    homeButton.innerText = "Home";
    menuButton.innerText = "Menu";
    contactButton.innerText = "Contact";

    wrapper1.classList.add("image");
    wrapper2.classList.add("headline");
    wrapper3.classList.add("tabs");
    homeButton.classList.add("btn");
    homeButton.setAttribute("id", "home-button");
    menuButton.classList.add("btn");
    menuButton.setAttribute("id", "menu-button");
    contactButton.classList.add("btn");
    contactButton.setAttribute("id", "contact-button");
    logo.setAttribute("id", "logo")
    title.setAttribute("id", "title");

    document.body.appendChild(wrapper1);
    wrapper1.appendChild(logo)
    document.body.appendChild(wrapper2);
    wrapper2.appendChild(title);
    document.body.appendChild(wrapper3);
    wrapper3.appendChild(homeButton);
    wrapper3.appendChild(menuButton);
    wrapper3.appendChild(contactButton);
};


export default loadHeader;