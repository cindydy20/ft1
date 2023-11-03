let test = 10;
console.log(test);

let navMenu = document.querySelector('nav');
console.log(navMenu);

let button = document.querySelector('.js-openMenu');
button.addEventListener('click', function () {
    navMenu.classList.toggle('is-visible');
})

// element.addEventListener(event, fonction à executer)