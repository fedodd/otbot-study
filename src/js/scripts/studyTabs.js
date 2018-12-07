const studyTabs = document.querySelectorAll('.subNav-input');
const studyContents = document.querySelectorAll('.studyContent-item');

/* сделаем первый таб активным */
studyContents[0].classList.add('is__active');
studyTabs[0].checked = true;

/* переключатель */
const toggleFunc = (studyContents, index) => {
	[...studyContents].map(
		studyContent => studyContent.classList.remove('is__active'));
	[...studyContents][index].classList.add('is__active');
};

/* listener на кнопки табов */
[...studyTabs].map((studyTab) => {
	const currIndex = [...studyTabs].indexOf(studyTab);
	studyTab.addEventListener('click', function(){toggleFunc(studyContents, currIndex)});
});
