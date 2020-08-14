import { loadHome } from './loadHome'
import { loadMenu } from './loadMenu'
import { loadContact } from './loadContact'
import { loadBurger } from './burger'

const navLinks = function() {
    const homeBtn = document.querySelectorAll('.nav-home');
    homeBtn.forEach(link => link.addEventListener('click', () => {
      loadHome();
      navLinks();
      loadBurger();
    }))
    
    const menuBtn = document.querySelectorAll('.nav-menu');
    menuBtn.forEach(link => link.addEventListener('click', () => {
      loadMenu();
      navLinks();
      loadBurger();
    }))
    
     const contactBtn = document.querySelectorAll('.nav-contact');
    contactBtn.forEach(link => link.addEventListener('click', () => {
      loadContact();
      navLinks();
      loadBurger();
    }))

}

export  { navLinks }