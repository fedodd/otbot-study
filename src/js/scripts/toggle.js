export default (toggleActivator, togglingBlocks, mainBlocks) => {
  const toggleFunc = () => {
    [...togglingBlocks].map(elem =>
      document.querySelectorAll(elem)
        .classList.toggle('is__active'));
  };

  const closeFunc = () => {
    [...togglingBlocks].map(elem =>
      document.querySelectorAll(elem)
        .classList.remove('is__active'));
  };

  document.getElementById(toggleActivator)
    .addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFunc();
    });

  document.addEventListener('click', closeFunc);
  if (!mainBlocks) return;
  mainBlocks.forEach((mainBlock) => {
    document.getElementById(mainBlock).addEventListener('click', e => e.stopPropagation());
  });
};
