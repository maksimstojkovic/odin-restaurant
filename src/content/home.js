import { appendChild } from '../util/helper';

const loadPage = (parent) => {
  parent.replaceChildren();

  const pageDiv = appendChild(parent, 'div', 'page');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');
  const copyDiv = appendChild(pageDiv, 'div', 'copy');
  const hoursDiv = appendChild(pageDiv, 'div', 'hours');
  const locationDiv = appendChild(pageDiv, 'div', 'location');
};

export { loadPage };
