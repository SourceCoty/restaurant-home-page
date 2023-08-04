import './style.css'
import {loadImage, loadReview } from './home';
import loadHeader from './static';
import loadMenu from './menu';
import loadContact from './contact';

const container = document.getElementById("container");

loadHeader();
loadImage();
loadReview();
linkButtons();

function clearDisplay () {
    document.body.innerHTML = "";
}; 

function linkButtons() {
    document.getElementById("home-button").addEventListener("click", toHome)
    document.getElementById("menu-button").addEventListener("click", toMenu)
    document.getElementById("contact-button").addEventListener("click", toContact)
}

function toMenu() {
    clearDisplay();
    loadHeader();
    linkButtons();
    loadMenu(); 
}

function toHome() {
    clearDisplay();
    loadHeader();
    linkButtons();
    loadImage();
    loadReview();
}

function toContact() {
    clearDisplay();
    loadHeader();
    linkButtons()
    loadContact(); 
}