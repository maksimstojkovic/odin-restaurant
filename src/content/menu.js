import { appendChild } from '../util/helper';
// import BurgerImage from '../res/img/burger.jpg';
import BobbyImage from '../res/img/bobby.jpg';
import BulkBurgerImage from '../res/img/bulk-burger.jpg';
import LeafySaladImage from '../res/img/leafy-salad.jpg';

const createMenuItem = (name, image, price, description) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemImage = appendChild(menuItem, 'img');
  menuItemImage.src = image;

  const menuItemContentDiv = appendChild(menuItem, 'div', 'menu-item-content');

  const menuItemName = appendChild(menuItemContentDiv, 'h2');
  menuItemName.textContent = name;

  const menuItemDescription = appendChild(
    menuItemContentDiv,
    'p',
    'description'
  );
  menuItemDescription.textContent = description;

  const menuItemPrice = appendChild(menuItem, 'p', 'price');
  menuItemPrice.textContent = '$' + price;

  return menuItem;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = appendChild(parent, 'div', 'page menu');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = appendChild(bannerDiv, 'p');
  bannerText.textContent = 'Menu';

  let menuItem = createMenuItem(
    'The Bobby',
    BobbyImage,
    20,
    'For those looking for a feast!'
  );
  pageDiv.appendChild(menuItem);

  menuItem = createMenuItem(
    'The Bulk Burger',
    BulkBurgerImage,
    12,
    'For those seeking gains!'
  );
  pageDiv.appendChild(menuItem);

  menuItem = createMenuItem(
    'The Leafy Salad',
    LeafySaladImage,
    8,
    'For those shredding!'
  );
  pageDiv.appendChild(menuItem);
};

export { loadPage };
