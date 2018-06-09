const navActivators = document.querySelectorAll('.nav-link');
/*const navItems = document.querySelectorAll('.navItem');
const subNavs = document.querySelectorAll('.subNav');*/

const toggleFunc = (navActivator) => {
	navActivator.parentNode.classList.toggle('is__active');
};

[...navActivators].map((navActivator) => {
	navActivator.addEventListener('click', function(){toggleFunc(navActivator)});
});
