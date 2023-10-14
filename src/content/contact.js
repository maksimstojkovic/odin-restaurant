import { appendChild } from '../util/helper';
// import BurgerImage from '../res/img/burger.jpg';
import DirectorImage from '../res/img/director.jpg';
import ChefImage from '../res/img/chef.jpg';
import WaiterImage from '../res/img/waiter.jpg';

const createEmployee = (name, image, role, number, email) => {
  const employee = document.createElement('div');
  employee.classList.add('menu-item');

  const employeeImage = appendChild(employee, 'img');
  employeeImage.src = image;

  const employeeName = appendChild(employee, 'h4');
  employeeName.textContent = name;

  const employeeRole = appendChild(employee, 'p');
  employeeRole.textContent = role;

  const employeeNumber = appendChild(employee, 'p');
  employeeNumber.textContent = number;

  const employeeEmail = appendChild(employee, 'p');
  employeeEmail.textContent = email;

  return employee;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = appendChild(parent, 'div', 'page menu');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = appendChild(bannerDiv, 'p');
  bannerText.textContent = 'Contact Us';

  let employee = createEmployee(
    'Ryder Tindal',
    DirectorImage,
    'Director',
    'RyderTindal@armyspy.com',
    '(02) 4038 8409'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Harrison Humffray',
    ChefImage,
    'Chef',
    'HarrisonHumffray@armyspy.com',
    '(02) 4985 9993'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Oliver Larnach',
    WaiterImage,
    'Waiter',
    'OliverLarnach@armyspy.com',
    '(02) 6160 2324'
  );
  pageDiv.appendChild(employee);
};

export { loadPage };
