import { appendChild } from '../util/helper';
import BurgerImage from '../res/img/burger.jpg';

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = appendChild(parent, 'div', 'page home');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');
  const heroDiv = appendChild(pageDiv, 'div', 'hero');
  const copyDiv = appendChild(pageDiv, 'div', 'copy card');
  const hoursDiv = appendChild(pageDiv, 'div', 'hours card');
  const locationDiv = appendChild(pageDiv, 'div', 'location card');

  // Add content
  const bannerText = appendChild(bannerDiv, 'p');
  bannerText.textContent = "Bobby's Burgers";

  const hero = appendChild(heroDiv, 'img');
  hero.src = BurgerImage;

  const copyText = appendChild(copyDiv, 'p');
  copyText.textContent = `
  Welcome to Bobby's Burgers, where burger bliss awaits. Savor the extraordinary with our handcrafted, flavor-packed burgers. Whether you crave classics or crave adventure, our menu has something delicious for all. Join us for a memorable meal today.`;

  const hoursHeader = appendChild(hoursDiv, 'h2');
  hoursHeader.textContent = 'Hours';

  const hoursList = appendChild(hoursDiv, 'ul');

  const hours = {
    Monday: '9:00AM - 5:00PM',
    Tuesday: '9:00AM - 5:00PM',
    Wednesday: '9:00AM - 5:00PM',
    Thursday: '9:00AM - 5:00PM',
    Friday: '9:00AM - 5:00PM',
    Saturday: 'Closed',
    Sunday: 'Closed',
  };

  for (const day in hours) {
    const e = appendChild(hoursList, 'li');
    e.textContent = `${day} - ${hours[day]}`;
  }

  const locationHeader = appendChild(locationDiv, 'h2');
  locationHeader.textContent = 'Location';

  const locationText = appendChild(locationDiv, 'p');
  locationText.textContent = '123 Freeview Dr, Melbourne, VIC, Australia, 3000';
};

export { loadPage };
