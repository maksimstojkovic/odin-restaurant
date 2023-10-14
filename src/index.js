import { appendChild } from './util/helper';
import { loadNavbar } from './ui/navbar';
import { loadPage as loadPageHome } from './content/home';
// import { loadPage as loadPageMenu } from './content/menu';
// import { loadPage as loadPageContactUs } from './content/contact';
import './style.scss';

const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = appendChild(containerDiv, 'div', 'navbar');
  const contentDiv = appendChild(containerDiv, 'div', 'content');

  // Load navbar
  loadNavbar(navbarDiv);

  // Load home page
  loadPageHome(contentDiv);
  // loadPageMenu(contentDiv);
  // loadPageContactUs(contentDiv);
};

// Create page
createIndex();
