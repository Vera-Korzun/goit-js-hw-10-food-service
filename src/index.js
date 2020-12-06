//import { v4 as uuidv4 } from 'uuid';
import data from './data/menu.json';
import cardsTemplate from './templates/cardsTemplate.hbs';
import './styles.css';

console.log(cardsTemplate(data));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkboxReference = document.querySelector('.theme-switch__toggle');
const getBody = document.querySelector('body');

const onDarkTheme = () => {
    getBody.classList.contains('light-theme') && getBody.classList.remove('light-theme');
    getBody.classList.add('dark-theme');
};

const onLighTheme = () => {
    getBody.classList.contains('dark-theme') && getBody.classList.remove('dark-theme');
    getBody.classList.add('light-theme');
};

if (localStorage.getItem('theme')) { //проверка что в localStorage, строка, а она всегда true
    const checked = JSON.parse(localStorage.getItem('theme')); //проверка есть ли значение в localStorage, если оно есть, то присвою его checkboxу, true or false
    checkboxReference.checked = checked;
    checked ? onDarkTheme() : onLighTheme();
}

const checkboxState = (e) => {
    localStorage.setItem('theme', JSON.stringify(e.target.checked))//localStorage.setItem(key, value)=============== при проверке что в localStorage, строку преобразовываем 
    //console.log(e.target.checked);
    e.target.checked ? onDarkTheme() : onLighTheme();
};

checkboxReference.addEventListener('change', checkboxState);//слушает изменения на checkbox, если оно произошло, то выполняется функция checkboxState

//=============================

const getUl=document.querySelector('.menu');
getUl.innerHTML = cardsTemplate(data);