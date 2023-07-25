function mobileNav() {
	const navBtn = document.querySelector('.header__menu');
	const nav = document.querySelector('.mobile__nav');
	const navBtnInner = document.querySelector('.mobile__nav-btn');
	const navFade = document.querySelector('.mobile__fade');
	let navLinks = document.querySelectorAll('.mobile__menu-link');
	
	navBtn.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		document.body.classList.toggle('no-scroll');
		navFade.classList.toggle('mobile__fade--open');
	};
	navBtnInner.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		document.body.classList.toggle('no-scroll');
		navFade.classList.toggle('mobile__fade--open');
	}
	navFade.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		document.body.classList.toggle('no-scroll');
		navFade.classList.toggle('mobile__fade--open');
	}
	navLinks.forEach((el) => {
		el.onclick = function () {
			nav.classList.toggle('mobile__nav--open');
			document.body.classList.toggle('no-scroll');
			navFade.classList.toggle('mobile__fade--open');
		}
	})

}


export default mobileNav;
