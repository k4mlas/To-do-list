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
	root.style.setProperty('--background-colorLight', 'rgb(235, 221, 221)');
	root.style.setProperty('--colorTextBlack', 'rgb(0, 0, 0)');
	root.style.setProperty('--list-colorLight', 'rgb(255, 255, 255)');
	root.style.setProperty('--toDo-light', 'rgb(235, 221, 221)');
};
const checkDark = () => {
	root.style.setProperty('--background-colorLight', 'rgb(70, 59, 59)');
	root.style.setProperty('--colorTextBlack', 'rgb(255, 255, 255)');
	root.style.setProperty('--list-colorLight', 'rgb(28, 25, 25)');
	root.style.setProperty('--toDo-light', 'rgb(70, 59, 59)');
};

setBtnOpen.addEventListener('click', showSetPanel);
setBtnClose.addEventListener('click', closeSetPanel);
lightBtn.addEventListener('click', checkLight);
darkBtn.addEventListener('click', checkDark);
