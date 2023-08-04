function loadMenu() {
    const wrapper = document.createElement('div');
    const menu = document.createElement('img');
    menu.src = "maadae_menu.jpeg";
    
    wrapper.setAttribute("id", "wrapper")
    menu.setAttribute("id", "menu");


    document.body.appendChild(wrapper)
    wrapper.appendChild(menu);
}

export default loadMenu;