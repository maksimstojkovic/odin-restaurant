import { appendChild } from '../util/helper';

import { loadPage as loadPageHome } from '../content/home';
import { loadPage as loadPageMenu } from '../content/menu';
import { loadPage as loadPageContactUs } from '../content/contact';

const pageFunctions = {
  home: loadPageHome,
  menu: loadPageMenu,
  contact: loadPageContactUs,
};

const loadNavbar = (parent) => {
  parent.replaceChildren();

  let navbarItem = appendChild(parent, 'div', 'navbar-item');
  navbarItem.textContent = 'Home';
  navbarItem.dataset.page = 'home';
  navbarItem.addEventListener('click', loadContent);

  navbarItem = appendChild(parent, 'div', 'navbar-item');
  navbarItem.dataset.page = 'menu';
  navbarItem.textContent = 'Menu';
  navbarItem.addEventListener('click', loadContent);

  navbarItem = appendChild(parent, 'div', 'navbar-item');
  navbarItem.dataset.page = 'contact';
  navbarItem.textContent = 'Contact Us';
  navbarItem.addEventListener('click', loadContent);
};

const loadContent = (e) => {
  const navbarDiv = document.querySelector('.navbar');
  const contentDiv = document.querySelector('.content');

  for (const navbarItem of navbarDiv.children) {
    if (navbarItem === e.target) {
      navbarItem.classList.add('active');
    } else {
      navbarItem.classList.remove('active');
    }
  }

  pageFunctions[e.target.dataset.page](contentDiv);
};

export { loadNavbar };
