import { appendChild } from '../util/helper';
import DirectorImage from '../res/img/director.jpg';
import ChefImage from '../res/img/chef.jpg';
import WaiterImage from '../res/img/waiter.jpg';

const createEmployee = (name, image, role, number, email) => {
  const employee = document.createElement('div');
  employee.classList.add('employee');

  const employeeImage = appendChild(employee, 'img');
  employeeImage.src = image;

  const employeeDetailsDiv = appendChild(employee, 'div', 'details');

  const employeeName = appendChild(employeeDetailsDiv, 'h2');
  employeeName.textContent = name;

  const employeeRole = appendChild(employeeDetailsDiv, 'p');
  employeeRole.textContent = role;

  const employeeNumber = appendChild(employeeDetailsDiv, 'p');
  employeeNumber.textContent = number;

  const employeeEmail = appendChild(employeeDetailsDiv, 'p');
  employeeEmail.textContent = email;

  return employee;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = appendChild(parent, 'div', 'page contact-us');
  const bannerDiv = appendChild(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = appendChild(bannerDiv, 'p');
  bannerText.textContent = 'Contact Us';

  let employee = createEmployee(
    'Bobby Burg',
    DirectorImage,
    'Director',
    'BobbyBurg@email.com',
    '(02) 9999 9999'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Harrison Humffray',
    ChefImage,
    'Chef',
    'HarrisonHumffray@email.com',
    '(02) 9888 8888'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Oliver Larnach',
    WaiterImage,
    'Waiter',
    'OliverLarnach@email.com',
    '(02) 9777 7777'
  );
  pageDiv.appendChild(employee);
};

export { loadPage };
