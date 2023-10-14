import { appendChild } from '../util/helper';
import BurgerImage from '../res/img/burger.jpg';

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = appendChild(parent, 'div', 'page home');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');
  const copyDiv = appendChild(pageDiv, 'div', 'copy');
  const hoursDiv = appendChild(pageDiv, 'div', 'hours');
  const locationDiv = appendChild(pageDiv, 'div', 'location');

  // Add content
  const bannerText = appendChild(bannerDiv, 'p');
  bannerText.textContent = 'Borgir';

  const bannerImage = new Image();
  bannerImage.src = BurgerImage;
  bannerDiv.appendChild(bannerImage);

  const copyText = appendChild(copyDiv, 'p');
  copyText.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum ultricies arcu, ac egestas justo eleifend non. Mauris sed eros et nunc tincidunt dictum. Nam ut ante ut velit tincidunt eleifend. Aenean vitae tortor leo. Morbi ultricies nec massa et mollis.';

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
    e.textContent = hours[day];
  }

  const locationHeader = appendChild(locationDiv, 'h2');
  locationHeader.textContent = 'Location';

  const locationText = appendChild(locationDiv, 'p');
  locationText.textContent = '123 Freeview Dr, Melbourne, VIC, Australia, 3000';
};

export { loadPage };
