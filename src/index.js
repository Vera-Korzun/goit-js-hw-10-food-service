//import { v4 as uuidv4 } from 'uuid';
import data from './data/menu.json';
import cardsTemplate from './templates/cardsTemplate.hbs';
import './styles.css';

console.log(cardsTemplate(data));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkboxReference = document.querySelector('.theme-switch__toggle');// ссылка на input
//const checkboxReference= document.querySelector('.theme-switch__control'); //на div если не попадем в input-checkbox 
//console.log(checkboxReference);
//console.log(checkboxReference.checked);
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

// const createMarcUp = dataArray => {
//     return dataArray.reduce((acc, {name, description, image, price, ingredients}) => {
//         acc += `
//         <li class="menu__item">
//         <article class="card">
//         <img
//           src=${image}
//           alt=${name}
//           class="card__image"/>
//           <div class="card__content">
//           <h2 class="card__name">${name}</h2>
//           <p class="card__price">
//             <i class="material-icons"> monetization_on </i>
//            ${price} кредитов
//           </p>
//           <p class="card__descr">${description}</p>
    
//           <ul class="tag-list">
//             ${ingredients.map(ingredient => (`<li class="tag-list__item">${ingredient}</li>`)).join('')}
//           </ul>
//         </div>
//         <button class="card__button button">
//       <i class="material-icons button__icon"> shopping_cart </i>
//       В корзину
//     </button>
//         </article>
//         </li>
    
//         `
    
//         return acc
//     },'');
// }

//getUl.innerHTML = createMarcUp(data);
//console.log(getUl);

getUl.innerHTML = cardsTemplate(data);
