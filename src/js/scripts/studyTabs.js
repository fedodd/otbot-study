const studyTabs = document.querySelectorAll('.studyNav-input');
const studyContents = document.querySelectorAll('.studyContent-item');


const toggleFunc = (studyContents, index) => {
	[...studyContents].map(
		studyContent => studyContent.classList.remove('is__active'));
	[...studyContents][index].classList.add('is__active');
};

[...studyTabs].map((studyTab) => {
	const currIndex = [...studyTabs].indexOf(studyTab);
	studyTab.addEventListener('click', function(){toggleFunc(studyContents, currIndex)});
});
