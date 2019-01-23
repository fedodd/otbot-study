import mytoggle from './scripts/toggle';
/* import sidebarPopup from './scripts/sidebarPopup';
 */
import studyTabs from './scripts/studyTabs';
/* import OTChart from './scripts/OTChart'; */


const toggleBlocks = document.querySelectorAll('.imageList.is__small.is__toggle');
const toggleActivators = document.querySelectorAll('.imageList-title.is__toggle');

const toggleFunc = (toggleBlocks, index) => {
  [...toggleBlocks][index].classList.toggle('is__active');
};

/* listener на кнопки табов */
[...toggleActivators].map((Activator) => {
  const currIndex = [...toggleActivators].indexOf(Activator);
  Activator.addEventListener('click', function () { toggleFunc(toggleBlocks, currIndex) });
});
