//Zmiene do ToDoListy
let $todoInput; // miejsce, gdzie uzytkownik wpisuje tresé
let $alertInfo; // info o braku zadan / koniecznosci dodania tekstu
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $ullist; // nasza Lista zadan, tagi <ul></ul›
let $newTask; // now dodany LI, nowe zadanie
let $allTasks; // Lista wszystkich dodanych LI
let $idNumber = 0; // ID dodawane do kazdego nowego zadania
let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak sie doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; //tekst wisywany w inputa w popup 'ie
let $addPopupBtn; // przycisk "zatwierdz" w popup 'ie
let $closeTodoBtn; //przycisk od zamykania popup'a
//Zmienne do otwarcia panelu ustawień
let $setPanel; //Panel ustawień
let $setBtnOpen; //Przycisk otwierania panelu ustawień
let $setBtnClose; //Przycisk zamykania panelu ustawień
//Zmienne do zmiany motywu
let $root; //Root zmienne kolorów
let $setBody; //Wewnętrzny Panel ustawień
let $lightBtn; //Przycisk jasny motyw
let $darkBtn; //Przycisk ciemny motyw
//Zmienne do zmiany obrazka w header
let $headerImg; //Obrazek w headerze
let $pictureOne; //Obrazek pierwszy w panelu ustawień
let $pictureTwo; //Obrazek drugi w panelu ustawień
let $pictureThree; //Obrazek trzeci w panelu ustawień
let $pictureFour; //Obrazek czwarty w panelu ustawień





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
// List
const listInput = document.querySelector('#listInput');
const addBtn = document.querySelector('.list__header__btn');
const listBody = document.querySelector('.list__body__quest');
//---------------------------------------------------------------------------------------------------

const addList = () => {};

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

const checkImgOne = () => {
	pictureOne.classList.add('activ');
	pictureTwo.classList.remove('activ');
	pictureThree.classList.remove('activ');
	pictureFour.classList.remove('activ');
	headerImg.style.backgroundImage = 'url(../img/arrizona.jpg)';
};
const checkImgTwo = () => {
	pictureOne.classList.remove('activ');
	pictureTwo.classList.add('activ');
	pictureThree.classList.remove('activ');
	pictureFour.classList.remove('activ');
	headerImg.style.backgroundImage = 'url(../img/city.jpg)';
};
const checkImgThree = () => {
	pictureOne.classList.remove('activ');
	pictureTwo.classList.remove('activ');
	pictureThree.classList.add('activ');
	pictureFour.classList.remove('activ');
	headerImg.style.backgroundImage = 'url(../img/default.jpg)';
};
const checkImgFour = () => {
	pictureOne.classList.remove('activ');
	pictureTwo.classList.remove('activ');
	pictureThree.classList.remove('activ');
	pictureFour.classList.add('activ');
	headerImg.style.backgroundImage = 'url(../img/zebra.jpg)';
};

setBtnOpen.addEventListener('click', showSetPanel);
setBtnClose.addEventListener('click', closeSetPanel);
lightBtn.addEventListener('click', checkLight);
darkBtn.addEventListener('click', checkDark);
pictureOne.addEventListener('click', checkImgOne);
pictureTwo.addEventListener('click', checkImgTwo);
pictureThree.addEventListener('click', checkImgThree);
pictureFour.addEventListener('click', checkImgFour);
