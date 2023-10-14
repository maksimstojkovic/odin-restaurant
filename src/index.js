import { appendChild } from './util/helper';
import { loadNavbar } from './ui/navbar';
import './style.scss';

const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = appendChild(containerDiv, 'div', 'navbar');
  appendChild(containerDiv, 'div', 'content');

  // Load navbar
  loadNavbar(navbarDiv);
};

// Create page
createIndex();
document.querySelector('.navbar').children[0].click();
