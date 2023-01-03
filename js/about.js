function shutdownBackground() {
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#about').style.display = 'none';
  document.querySelector('#logo-description').style.display = 'none';
  document.querySelector('#see-past').style.display = 'none';
  document.querySelector('#partners').style.display = 'none';
  document.querySelector('#footer').style.display = 'none';
}

function restoreView() {
  document.getElementById('mobile-menu').remove();
  document.querySelector('#header').style.display = 'block';
  document.querySelector('#about').style.display = 'flex';
  document.querySelector('#logo-description').style.display = 'flex';
  document.querySelector('#see-past').style.display = 'flex';
  document.querySelector('#partners').style.display = 'block';
  document.querySelector('#footer').style.display = 'flex';
}

function createMenu() {
  const menu = document.createElement('section');
  menu.id = 'mobile-menu';
  menu.setAttribute('class', 'mobile-menu');
  const button = document.createElement('button');
  button.id = 'mobile-menu-button';
  button.setAttribute('class', 'mobile-menu-button-close');
  button.onclick = function name() { restoreView(); };
  menu.appendChild(button);
  const navbar = document.createElement('nav');
  const buttonPortfolio = document.createElement('button');
  const buttonAbout = document.createElement('button');
  const buttonContact = document.createElement('button');
  navbar.setAttribute('class', 'mobile-menu-navbar');
  buttonPortfolio.setAttribute('class', 'mobile-menu-buttons');
  buttonAbout.setAttribute('class', 'mobile-menu-buttons');
  buttonContact.setAttribute('class', 'mobile-menu-buttons');
  buttonPortfolio.appendChild(document.createTextNode('Program'));
  buttonAbout.appendChild(document.createTextNode('Schedule'));
  buttonContact.appendChild(document.createTextNode('Tickets'));
  navbar.appendChild(buttonPortfolio);
  navbar.appendChild(buttonAbout);
  navbar.appendChild(buttonContact);
  menu.appendChild(navbar);
  return menu;
}

function hamburgClick() {
  shutdownBackground();
  const container = document.querySelector('#container');
  container.appendChild(createMenu());
}

document.querySelector('#ico2').onclick = function name() { hamburgClick(); };
