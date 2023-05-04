//close and open set Panel
const setPanel = document.querySelector('.set');
const setBtnOpen = document.querySelector('.list__header__set');
const setBtnClose = document.querySelector('.set__body__close');
//change layout
let root = document.documentElement;
const lightBtn = document.querySelector(
	'.set__body__color__btn__opction--light'
);
const darkBtn = document.querySelector('.set__body__color__btn__opction--dark');
const body = document.querySelector('body');
//

const showSetPanel = () => {
	setPanel.style.display = 'flex';
};
const closeSetPanel = () => {
	setPanel.style.display = 'none';
};

const checkLight = () => {
	root.style.setProperty('--first-color1', 'rgb(70, 59, 59)');
	root.style.setProperty('--second-color1', 'rgb(30, 28, 28)i');
};

setBtnOpen.addEventListener('click', showSetPanel);
setBtnClose.addEventListener('click', closeSetPanel);
lightBtn.addEventListener('click', checkLight);
