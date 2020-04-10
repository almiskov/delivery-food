const cartButton = document.querySelector('#cart-button');
const closeButton = document.querySelector('.close');
const modal = document.querySelector('.modal');

cartButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open')
}

new WOW().init();