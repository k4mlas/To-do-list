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
////////////////////////////////////////////////////////////////////////////////////////////////

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
};

const prepareDOMElements = () => {
	//Zmienne do otwarcia panelu ustawień
	$setPanel = document.querySelector('.set');
	$setBtnOpen = document.querySelector('.list__header__set');
	$setBtnClose = document.querySelector('.set__body__close');
	//Zmienne do zmiany motywu
	$root = document.documentElement;
	$setBody = document.querySelector('.set__body');
	$lightBtn = document.querySelector('.set__body__color__btn__opction--light');
	$darkBtn = document.querySelector('.set__body__color__btn__opction--dark');
	//Zmienne do zmiany obrazka w header
	$headerImg = document.querySelector('.list__header');
	$pictureOne = document.querySelector(
		'.set__body__img__opction__picture--one'
	);
	$pictureTwo = document.querySelector(
		'.set__body__img__opction__picture--two'
	);
	$pictureThree = document.querySelector(
		'.set__body__img__opction__picture--three'
	);
	$pictureFour = document.querySelector(
		'.set__body__img__opction__picture--four'
	);
	//Zmiene do ToDoListy
	$todoInput = document.querySelector('#listInput');
	$addBtn = document.querySelector('.list__header__btn');
	$allTasks = document.querySelectorAll('li');
	$alertInfo = document.querySelector('.list__body__info');
	$ullist = document.querySelector('.list__body__quest');
	$popup = document.querySelector('.edit');
	$popupInput = document.querySelector('#edit');
	$popupInfo = document.querySelector('.edit__panel__error');
	$addPopupBtn = document.querySelector('.edit__panel__btn__opction--save');
	$closeTodoBtn = document.querySelector('.edit__panel__btn__opction--cancel');
};

const prepareDOMEvens = () => {
	$addBtn.addEventListener('click', addNewTask);
	$todoInput.addEventListener('keyup', enterKey);
	$ullist.addEventListener('click', checkClick);
	$setBtnOpen.addEventListener('click', showSetPanel);
	$setBtnClose.addEventListener('click', closeSetPanel);
	$lightBtn.addEventListener('click', checkLight);
	$darkBtn.addEventListener('click', checkDark);
	$pictureOne.addEventListener('click', checkImgOne);
	$pictureTwo.addEventListener('click', checkImgTwo);
	$pictureThree.addEventListener('click', checkImgThree);
	$pictureFour.addEventListener('click', checkImgFour);
	$addPopupBtn.addEventListener('click', changeToDo);
	$closeTodoBtn.addEventListener('click', closePopup);
};

////////////////////////////////////////////////////////////////////////////////////////////

const addNewTask = () => {
	if ($todoInput.value !== '') {
		$idNumber++;
		$newTask = document.createElement('li');
		$newTask.innerText = $todoInput.value;
		$newTask.classList.add('list__body__quest__text');
		$newTask.setAttribute('id', `todo-${$idNumber}`);
		$ullist.appendChild($newTask);
		createToolsArea();
		$todoInput.value = '';
		$alertInfo.textContent = '';
	} else {
		$alertInfo.textContent = 'Musisz wpisać treść zadania';
	}
};

const enterKey = () => {
	if (event.key == 'Enter') {
		addNewTask();
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('list__body__quest__tools');
	$newTask.appendChild(toolsPanel);

	const completeBtnTools = document.createElement('button');
	completeBtnTools.classList.add('list__body__quest__tools__check');
	completeBtnTools.innerHTML = '<i class="fa-solid fa-check"></i>';
	const editBtnTools = document.createElement('button');
	editBtnTools.classList.add('list__body__quest__tools__edit');
	editBtnTools.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
	const deleteBtnTools = document.createElement('button');
	deleteBtnTools.classList.add('list__body__quest__tools__delete');
	deleteBtnTools.innerHTML = '<i class="fa-solid fa-trash"></i>';

	toolsPanel.appendChild(completeBtnTools);
	toolsPanel.appendChild(editBtnTools);
	toolsPanel.appendChild(deleteBtnTools);
};

const checkClick = (e) => {
	if (
		e.target
			.closest('button')
			.classList.contains('list__body__quest__tools__check')
	) {
		e.target.closest('li').classList.toggle('finish');
	} else if (
		e.target
			.closest('button')
			.classList.contains('list__body__quest__tools__edit')
	) {
		editTask(e);
	} else if (
		e.target
			.closest('button')
			.classList.contains('list__body__quest__tools__delete')
	) {
		checkDeleteList(e);
	}
};

const editTask = (e) => {
	const oldToDo = e.target.closest('li').id;
	$editedTodo = document.getElementById(oldToDo);
	$popupInput.value = $editedTodo.firstChild.textContent;
	$popup.style.display = 'flex';
};

const changeToDo = () => {
	if ($popupInput.value !== '') {
		$editedTodo.firstChild.textContent = $popupInput.value;
		$popupInfo.style.visibility = 'hidden';
		$popup.style.display = 'none';
	} else {
		$popupInfo.textContent = 'Musisz podać jakąś treść!';
		$popupInfo.style.visibility = 'visible';
	}
};

const closePopup = () => {
	$popup.style.display = 'none';
};

const checkDeleteList = (e) => {
	const deleteToDo = e.target.closest('li');
	deleteToDo.remove('li');

	if ($allTasks.length === 0) {
		$alertInfo.textContent = 'Brak zadań na liście';
	}
};

const showSetPanel = () => {
	$setPanel.style.display = 'flex';
};
const closeSetPanel = () => {
	$setPanel.style.display = 'none';
};

const checkLight = () => {
	$root.style.setProperty('--background-colorLight', 'rgb(235, 221, 221)');
	$root.style.setProperty('--colorTextBlack', 'rgb(0, 0, 0)');
	$root.style.setProperty('--list-colorLight', 'rgb(255, 255, 255)');
	$root.style.setProperty('--toDo-light', 'rgb(235, 221, 221)');
	$root.style.setProperty('--set-color-light', 'rgb(199, 181, 181)');
	$lightBtn.classList.add('activ');
	$darkBtn.classList.remove('activ');
};
const checkDark = () => {
	$root.style.setProperty('--background-colorLight', 'rgb(70, 59, 59)');
	$root.style.setProperty('--colorTextBlack', 'rgb(255, 255, 255)');
	$root.style.setProperty('--list-colorLight', 'rgb(28, 25, 25)');
	$root.style.setProperty('--toDo-light', 'rgb(70, 59, 59)');
	$root.style.setProperty('--set-color-light', 'rgb(196, 156, 156)');
	$darkBtn.classList.add('activ');
	$lightBtn.classList.remove('activ');
};

const checkImgOne = () => {
	$pictureOne.classList.add('activ');
	$pictureTwo.classList.remove('activ');
	$pictureThree.classList.remove('activ');
	$pictureFour.classList.remove('activ');
	$headerImg.style.backgroundImage = 'url(../img/arrizona.jpg)';
};
const checkImgTwo = () => {
	$pictureOne.classList.remove('activ');
	$pictureTwo.classList.add('activ');
	$pictureThree.classList.remove('activ');
	$pictureFour.classList.remove('activ');
	$headerImg.style.backgroundImage = 'url(../img/city.jpg)';
};
const checkImgThree = () => {
	$pictureOne.classList.remove('activ');
	$pictureTwo.classList.remove('activ');
	$pictureThree.classList.add('activ');
	$pictureFour.classList.remove('activ');
	$headerImg.style.backgroundImage = 'url(../img/default.jpg)';
};
const checkImgFour = () => {
	$pictureOne.classList.remove('activ');
	$pictureTwo.classList.remove('activ');
	$pictureThree.classList.remove('activ');
	$pictureFour.classList.add('activ');
	$headerImg.style.backgroundImage = 'url(../img/zebra.jpg)';
};
///////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', main);
