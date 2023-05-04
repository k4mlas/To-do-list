//close and open set Panel
const setPanel = document.querySelector('.set');
const setBtnOpen = document.querySelector('.list__header__set');
const setBtnClose = document.querySelector('.set__body__close');
//change layout
let root = document.documentElement;
const setBody = document.querySelector('.set__body');
const lightBtn = document.querySelector(
	'.set__body__color__btn__opction--light'
);
const darkBtn = document.querySelector('.set__body__color__btn__opction--dark');
//chenge img main
const pictureOne = document.querySelector(
	'.set__body__img__opction__picture--one'
);
const pictureTwo = document.querySelector(
	'.set__body__img__opction__picture--two'
);
const pictureThree = document.querySelector(
	'.set__body__img__opction__picture--three'
);
const pictureFour = document.querySelector(
	'.set__body__img__opction__picture--four'
);
const headerImg = document.querySelector('.list__header');

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
	root.style.setProperty('--set-color-light', 'rgb(199, 181, 181)');
	lightBtn.classList.add('activ');
	darkBtn.classList.remove('activ');
};
const checkDark = () => {
	root.style.setProperty('--background-colorLight', 'rgb(70, 59, 59)');
	root.style.setProperty('--colorTextBlack', 'rgb(255, 255, 255)');
	root.style.setProperty('--list-colorLight', 'rgb(28, 25, 25)');
	root.style.setProperty('--toDo-light', 'rgb(70, 59, 59)');
	root.style.setProperty('--set-color-light', 'rgb(196, 156, 156)');

	darkBtn.classList.add('activ');
	lightBtn.classList.remove('activ');
};

const checkImg = (e) => {
	if(pictureOne.e){console.log("dde");}
};

setBtnOpen.addEventListener('click', showSetPanel);
setBtnClose.addEventListener('click', closeSetPanel);
lightBtn.addEventListener('click', checkLight);
darkBtn.addEventListener('click', checkDark);
pictureOne.addEventListener('click',checkImg);
pictureTwo.addEventListener('click',checkImg);
pictureThree.addEventListener('click',checkImg);
pictureFour.addEventListener('click',checkImg);
