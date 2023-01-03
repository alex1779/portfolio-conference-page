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
    document.querySelector('#partners').style.display = 'none';
    document.querySelector('#footer').style.display = 'none';
  }
}

function createMenu() {
  const menu = document.createElement('div');
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

function shutdownBackground() {
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#hero').style.display = 'none';
  document.querySelector('#program').style.display = 'none';
  document.querySelector('#speakers-section').style.display = 'none';
  document.querySelector('#partners').style.display = 'none';
  document.querySelector('#footer').style.display = 'none';
}

function hamburgClick() {
  shutdownBackground();
  const container = document.querySelector('#container');
  container.appendChild(createMenu());
}

function initialExec() {
  const speakerslist = '<h5 id="speakers-title">Featured Speakers</h5> <ul id="speakers-list"> </ul> <button id="speakers-button" type="button" onclick="clickSpeakersMore()"> </button>';
  const speakersSection = document.getElementById('speakers-section');
  speakersSection.innerHTML += speakerslist;
  const speakers = {
    speaker1: {
      name: 'Yokai Benkler',
      role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
      photo: 'images/speakers/speaker_01.png',
    },
    speaker2: {
      name: 'Kilnam Chon',
      role: '...',
      description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
      photo: 'images/speakers/speaker_02.png',
    },
    speaker3: {
      name: 'SohYeong Noh',
      role: 'Director of Art Centre Nabi and a board member of CC Korea',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      photo: 'images/speakers/speaker_03.png',
    },
    speaker4: {
      name: 'Julia Leda',
      role: 'President of Young Pirates of Europe',
      description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
      photo: 'images/speakers/speaker_04.png',
    },
    speaker5: {
      name: 'Lila tretikov',
      role: 'Executive Director of the Wikimedia Foundation',
      description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
      photo: 'images/speakers/speaker_05.png',
    },
    speaker6: {
      name: 'Ryan Merkley',
      role: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment.',
      photo: 'images/speakers/speaker_06.png',
    },
  };

  const speakerslistObj = document.getElementById('speakers-list');
  for (let i = 0; i < Object.keys(speakers).length; i += 1) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', `images/speakers/speaker_0${String(i + 1)}.png`);
    const div = document.createElement('div');
    div.setAttribute('id', 'speakers-group');
    const h4 = document.createElement('h4');
    const h4c = document.createTextNode(speakers[`speaker${String(i + 1)}`].name);
    const h5 = document.createElement('h5');
    const h5c = document.createTextNode(speakers[`speaker${String(i + 1)}`].role);
    const h6 = document.createElement('h6');
    const h6c = document.createTextNode(speakers[`speaker${String(i + 1)}`].description);
    h4.appendChild(h4c);
    h5.appendChild(h5c);
    h6.appendChild(h6c);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    li.appendChild(img);
    li.appendChild(div);
    speakerslistObj.appendChild(li);
  }

  const dataStorage = {
    speakersListExpanded: false,
  };
  localStorage.setItem('dataStorage', JSON.stringify(dataStorage));
}

window.onload = () => {
  initialExec();
};

const menuhamb = document.querySelector('#icon-button-button');
menuhamb.onclick = function name() { hamburgClick(); };
document.querySelector('#ico').onclick = function name() { initialExec(); };

function clickSpeakersMore() {
  let dataStorage = localStorage.getItem('dataStorage');
  dataStorage = JSON.parse(dataStorage);
  const speakers = document.querySelector('#speakers-list');
  const button = document.querySelector('#speakers-button');
  const container = document.querySelector('#container');
  if (dataStorage.speakersListExpanded) {
    speakers.style['aspect-ratio'] = '1.3 / 1';
    speakers.style.transition = 'aspect-ratio 2.5s 0s';
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
document.querySelector('#ico2').onclick = function name() { clickSpeakersMore(); };
