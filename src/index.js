console.log('test');

const createIndex = (() => {
  const containerDiv = document.querySelector('.container');

  // Navbar
  const navbarDiv = document.createElement('div');
  navbarDiv.classList.add('navbar');
  containerDiv.appendChild(navbarDiv);

  // Content
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  containerDiv.appendChild(contentDiv);
})();
