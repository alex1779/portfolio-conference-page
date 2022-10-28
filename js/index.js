function createelement(type, name) {
  const element = document.createElement(type);
  element.id = name;
  element.setAttribute('class', name);
  return element;
}

function shutdownBackground() {
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#hero').style.display = 'none';
  document.querySelector('#program').style.display = 'none';
  document.querySelector('#speakers-section').style.display = 'none';
  document.querySelector('#partners').style.display = 'none';
  document.querySelector('#footer').style.display = 'none';
}

function restoreView() {
  const element = document.getElementById('mobile-menu');
  element.remove();
  document.querySelector('#header').style.display = 'block';
  document.querySelector('#hero').style.display = 'block';
  document.querySelector('#program').style.display = 'block';
  document.querySelector('#speakers-section').style.display = 'flex';

  if (window.screen.width < 768) {
      document.querySelector('#partners').style.display = 'none';
      document.querySelector('#footer').style.display = 'none';
  } else {
    document.querySelector('#partners').style.display = 'flex';
    document.querySelector('#footer').style.display = 'flex';
    }

}

const menuhamb = document.querySelector('#icon-button-button');
menuhamb.onclick = function () { hamburgClick(); };
document.querySelector('#ico').onclick = function () { initialExec(); };

function hamburgClick() {
  shutdownBackground();
  const container = document.querySelector('#container');
  container.appendChild(createMenu());
}

function createMenu() {
  const menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.setAttribute('class', 'mobile-menu');
  const button = document.createElement('button');
  button.id = 'mobile-menu-button';
  button.setAttribute('class', 'mobile-menu-button-close');
  button.onclick = function () { restoreView(); };
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

function clickSpeakersMore() {
  let dataStorage = localStorage.getItem('dataStorage');
  dataStorage = JSON.parse(dataStorage);
  const speakers = document.querySelector('#speakers-list');
  const button = document.querySelector('#speakers-button');
  const container = document.querySelector('#container');
  if (dataStorage.speakersListExpanded) {
    speakers.style['aspect-ratio'] = '1.3 / 1';
    speakers.style['transition'] = 'aspect-ratio 2.5s 0s'
    const dataStorage2 = {
      speakersListExpanded: false,
    };
    localStorage.setItem('dataStorage', JSON.stringify(dataStorage2));
    button.style['background-image'] = 'url("./images/more.png")';
    container.style.height = 'auto';

  } else {
    speakers.style['aspect-ratio'] = '1 / 3';
    const dataStorage2 = {
      speakersListExpanded: true,
    };
    localStorage.setItem('dataStorage', JSON.stringify(dataStorage2));
    button.style['background-image'] = 'url("./images/less.png")';
    button.scrollIntoView({ behavior: 'smooth', block: 'center' });
    container.style.height = 'auto';
  }
}

function clickSeeWholeProgram() {
  alert('See whole program..');
}

function initialExec() {
  const bigString = '<h5 id="speakers-title">Featured Speakers</h5> <ul id="speakers-list">  <li> <img src="images/speakers/speaker_01.png"> <div id="speakers-group">  <h4>Yokai Benkler</h4>  <h5>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</h5>  <h6>Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006</h6> </div>  </li>  <li> <img src="images/speakers/speaker_02.png"> <div id="speakers-group">  <h4>Kilnam Chon</h4>  <h5>...</h5>  <h6>Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame</h6> </div>  </li>  <li> <img src="images/speakers/speaker_03.png"> <div id="speakers-group">  <h4>SohYeong Noh</h4>  <h5>Director of Art Centre Nabi and a board member of CC Korea</h5>  <h6>As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</h6> </div>  </li>  <li> <img src="images/speakers/speaker_04.png"> <div id="speakers-group">  <h4>Julia Leda</h4>  <h5>President of Young Pirates of Europe</h5>  <h6>European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July</h6> </div>  </li>  <li> <img src="images/speakers/speaker_05.png"> <div id="speakers-group">  <h4>Lila tretikov</h4>  <h5>Executive Director of the Wikimedia Foundation</h5>  <h6>Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.</h6> </div>  </li>  <li> <img src="images/speakers/speaker_06.png"> <div id="speakers-group">  <h4>Ryan Merkley</h4>  <h5>CEO of Creativve Commons, ex COO of the Mozilla Foundation</h5>  <h6>Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment</h6> </div>  </li> </ul> <button id="speakers-button" type="button" onclick="clickSpeakersMore()"> </button>';

  const speakersSection = document.getElementById('speakers-section');
  speakersSection.innerHTML += bigString;

  const dataStorage = {
    speakersListExpanded: false,
  };
  localStorage.setItem('dataStorage', JSON.stringify(dataStorage));

}

window.onload = () => {
  initialExec();
  let dataStorage = localStorage.getItem('dataStorage');
  dataStorage = JSON.parse(dataStorage);
  if (dataStorage) {
    document.getElementById('survey-form-name-input').value = savedFormData.name;
    document.getElementById('survey-form-email-input').value = savedFormData.email;
    document.getElementById('survey-form-message-input').value = savedFormData.message;
  }
};
