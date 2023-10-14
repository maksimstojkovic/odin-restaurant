import { appendChild } from './util/helper';
import { loadPage as loadPageHome } from './content/home';

console.log('test');

const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = appendChild(containerDiv, 'div', 'navbar');
  const contentDiv = appendChild(containerDiv, 'div', 'content');

  // Load home page
  loadPageHome(contentDiv);
};

// Create page
createIndex();
