$(window).on('load', function () {
  setTimeout( () => {
		$('.s-preloader').delay(100).fadeOut().remove();
  }, 0);
});

$(document).ready(function () {
		svg4everybody({});

	const stickyMenu = (resolution) => {
		let screenHeight = document.querySelector('.product').clientHeight;
		if (window.innerWidth > resolution) {
			$(window).scroll( () => {
				if ($(this).scrollTop() >= screenHeight) {
					$('.header-top').addClass('js-header-top-sticky');
				} else {
					$('.header-top').removeClass('js-header-top-sticky');
				}
			});
		}
		else {
			$(window).scroll( () => {
				if ($(this).scrollTop() >= 70) {
					$('.header-top').addClass('js-header-top-sticky');
				} else {
					$('.header-top').removeClass('js-header-top-sticky');
				}
			});
		}
	};

	const toggleHamburger = () => {
		let $hamb = $('.hamburger'),
				menu = $('.js-nav'),
				linkMenu = $('.js-anchor--top');
		$hamb.on('click', () => {
			$hamb.toggleClass('is-active');
			menu.toggleClass('header-top__nav-mobile-active');
		});
		if ($(window).width() < 1024) {
			linkMenu.on('click', () => {
				$hamb.toggleClass('is-active');
				menu.toggleClass('header-top__nav-mobile-active');
			});
		}
	};

	const headerSlider = () => {
		$('.js-header-slider').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			dots: false,
			easing: 'ease-in-out',
			fade: true,
			infinite: true,
			speed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 321,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};

	const pizzaSlider = () => {
		$('.js-pizza-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.pizza-main__arrow__prev',
			prevArrow: '.pizza-main__arrow__next',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 321,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};

	const saladSlider = () => {
		$('.js-salad-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: '.salad-main__arrow__prev',
			prevArrow: '.salad-main__arrow__next',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 321,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};

	const drinkSlider = () => {
		$('.js-drink-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.drink-main__arrow__prev',
			prevArrow: '.drink-main__arrow__next',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 321,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};

	const setAnchors = () => {
		$(window).on('load',function(){
			$('.js-anchor').mPageScroll2id({
				scrollSpeed: 600
			});
		});
	};

	const validateForm = () => {
		$('form').each(function() {
			$(this).validate({
				rules: {
					firstname: 'required',
					lastname: 'required',
					address: 'required',
					phone: 'required',
					date: 'required',
					time: 'required'
				},
				messages: {
					firstname: 'Укажите имя',
					lastname: 'Укажите фамилию',
					address: 'Укажите адрес',
					phone: 'Укажите телефон',
					date: 'Укажите дату',
					time: 'Укажите время'
				},
				errorPlacement: function (error, element) {
					element.attr('placeholder', error[0].outerText);
				}
			});
		});
	};

	const showGallery = () => {
		$('.js-gallery').magnificPopup({
			type: 'image',
			delegate: 'a',
			gallery:{
				enabled:true
			}
		});
	};


	stickyMenu(1024);
	toggleHamburger();
	headerSlider();
	pizzaSlider();
	saladSlider();
	drinkSlider();
	setAnchors();
	validateForm();
	showGallery();
});


window.addEventListener('DOMContentLoaded', () => {

	const scrollOneScreen = () => {
		let btn = document.querySelector('.next-screen-button');
		btn.addEventListener('click', () => {
			let screenHeight = document.querySelector('.product').clientHeight;
			for (let i = screenHeight; i < screenHeight * 5; i++) {
				scrollBy({
					top: screenHeight,
					behavior: 'smooth'
				});
				break;
			}
		});
	};

	const banScroll = (resolution) => {
		let page = document.querySelector('.wrapper');
		if (window.innerWidth > resolution) {
			page.addEventListener('onwhell', page.onwheel = (e) => {
				e.preventDefault();
			});
		}
	};

	const togglePizzaBlocks = () => {
		let btnBlock = document.querySelector('.product-main__choice'),
				btn = document.querySelectorAll('.js-btn'),
				toggle = document.querySelectorAll('.js-block'),
				arrows = document.querySelector('.pizza-main__arrow');

		btnBlock.addEventListener('click', (e) => {
			if (e.target && e.target.classList.contains('js-hide')) {
				btn.forEach((i, ind) => {
					btn[ind].classList.toggle('js-hide');
					btn[ind].classList.toggle('product__title--active');
				});
				toggle.forEach((i, ind) => {
					toggle[ind].classList.toggle('js-toggle');
				});
				arrows.classList.toggle('js-toggle');
			}
		});
	};

	const requestCatalog = (url) => {
		return new Promise((res, rej) => {
			let req = new XMLHttpRequest();
			req.open('GET', url);
			req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
			req.addEventListener('readystatechange', function() {
				if (this.readyState === 4) {
					if (this.status == 200) {
						res(this.response);
					}
				}
				else if (this.status != 200) {
					rej(this.status);
				}
			});
			req.send();
		});
	};

	const chooseeProduct= () => {
		let prodForm = document.querySelectorAll('.js-prod-amount'),
				prodBlock = document.querySelectorAll('.product-main__block'),
				prodPrice = document.querySelectorAll('.js-cost'),
				listWrapper = document.querySelectorAll('.prod-item'),
				cartList = document.getElementById('cart-menu'),
				cartName = document.querySelector('.prod-name'),
				cartAmount = document.querySelector('.prod-amount'),
				cartPrice = document.querySelector('.prod-price'),
				cartTotalPrice = document.querySelector('.js-total-price'),
				inputVal = 1,
				totalPrice,
				cartData = {};

		requestCatalog('data/catalog.json')
			.then((response) => {
				cartData = JSON.parse(response);
			})
			.catch((error) => {
				console.error(error);
			});

		prodBlock.forEach((i, ind) => {
			prodBlock[ind].addEventListener('click', (e) => {
				let targetSmall = e.target && e.target.closest('.js-size-small'),
						targetBig = e.target && e.target.closest('.js-size-big'),
						targetMinus = e.target && e.target.closest('.product-main__icon-minus'),
						targetPlus = e.target && e.target.closest('.product-main__icon-plus'),
						targetOrder = e.target && e.target.closest('.js-submit'),
						input = prodForm[ind].children[1];

				if (targetSmall) {
					if (targetSmall.classList.contains('size-active')) {
						return;
					}
					else {
						targetSmall.classList.toggle('size-active');
						targetSmall.nextElementSibling.classList.remove('size-active');
						totalPrice = parseInt(cartData[ind].priceSmall) * inputVal;
						prodPrice[ind].innerHTML = `${totalPrice} руб.`;
					}
				}
				if (targetBig) {
					if (targetBig.classList.contains('size-active')) {
						return;
					}
					else {
						targetBig.classList.toggle('size-active');
						targetBig.previousElementSibling.classList.remove('size-active');
						totalPrice = parseInt(cartData[ind].priceBig) * inputVal;
						prodPrice[ind].innerHTML = `${totalPrice} руб.`;
					}
				}
				if (targetMinus) {
					input.value < 2 ? input.value = 1 : input.value--;
					inputVal = parseInt(input.value);
				}
				if (targetPlus) {
					input.value > 29 ? input.value = 30 : input.value++;
					inputVal = parseInt(input.value);
				}
				if (targetOrder) {
					let templ = document.querySelector('.prod-item');
					templ.classList.add('product-menu__item--active');
					if (cartName.innerHTML === '') {
						cartName.innerHTML = cartData[ind].name;
						cartAmount.innerHTML = inputVal;
						totalPrice = parseInt(prodPrice[ind].innerHTML) * inputVal;
						cartPrice.innerHTML = `${totalPrice} руб.`;
						cartTotalPrice.innerHTML = parseInt(cartTotalPrice.innerHTML) + totalPrice;
						inputVal = 1;
					}
					else {
						cartList.appendChild(templ.cloneNode(true));
						cartName.innerHTML = cartData[ind].name;
						cartAmount.innerHTML = inputVal;
						totalPrice = parseInt(prodPrice[ind].innerHTML) * inputVal;
						cartPrice.innerHTML = `${totalPrice} руб.`;
						cartTotalPrice.innerHTML = parseInt(cartTotalPrice.innerHTML) + totalPrice;
						inputVal = 1;
					}
				}
			});
		});

		listWrapper.forEach((i, ind) => {
			let countBlock = document.querySelectorAll('.amount-block'),
					inputCart = countBlock[ind].children[1],
					inputCartVal;
			listWrapper[ind].addEventListener('click', (e) => {
				let targetCartMinus = e.target && e.target.closest('.icon-cart-minus'),
						targetCartPlus = e.target && e.target.closest('.icon-cart-plus')

				if (targetCartMinus) {
					inputCart.value < 2 ? inputCart.value = 1 : inputCart.value--;
					inputCartVal = parseInt(inputCart.value);
				}
				if (targetCartPlus) {
					inputCart.value > 29 ? inputCart.value = 30 : inputCart.value++;
					inputCartVal = parseInt(inputCart.value);
				}
			});
		});
	};


	scrollOneScreen();
	banScroll(1024);
	togglePizzaBlocks();
	chooseeProduct();
});