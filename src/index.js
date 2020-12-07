//import { v4 as uuidv4 } from 'uuid';
import data from './data/menu.json';
import cardsTemplate from './templates/cardsTemplate.hbs';
import './styles.css';
//console.log(cardsTemplate(data));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const getUl=document.querySelector('.menu');
const checkboxReference = document.querySelector('.theme-switch__toggle');
const getBody = document.querySelector('body');

const onDarkTheme = () => {
    getBody.classList.remove(Theme.LIGHT);
    getBody.classList.add(Theme.DARK);
};

const onLighTheme = () => {
    getBody.classList.remove(Theme.DARK);
    getBody.classList.add(Theme.LIGHT);
};

if (localStorage.getItem(Theme)) {
    const checked = JSON.parse(localStorage.getItem(Theme));
    checkboxReference.checked = checked;
    checked ? onDarkTheme() : onLighTheme();
}

const checkboxState = (e) => {
    localStorage.setItem(Theme, JSON.stringify(e.target.checked))
    e.target.checked ? onDarkTheme() : onLighTheme();
};

checkboxReference.addEventListener('change', checkboxState);

getUl.innerHTML = cardsTemplate(data);