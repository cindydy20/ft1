
// Top menu: click avatar -> show & hide profile menu on right side
let avatar = document.querySelector('.avatar');
let profileMenu = document.querySelector('#profileMenu')
avatar.addEventListener('click', function () {
    profileMenu.classList.toggle('show')
})

// Left menu: click toggle button -> open/hide left menu && show only icons (not text) on the partially displayed menu bar
const toggleButton = document.getElementById('toggleButton');
const leftMenu = document.getElementById('leftMenu');
const outterIconsLeftMenu = document.getElementsByClassName("outer-icon");
toggleButton.addEventListener('click', () => {
    leftMenu.classList.toggle('open');
    if (toggleButton.innerHTML = leftMenu.classList.contains('open')) {
        toggleButton.innerHTML = '&#8249;';
        changeVisibilityOuterIconsLeftMenu(true, outterIconsLeftMenu);
    } else {
        toggleButton.innerHTML = '&#8250;';
        changeVisibilityOuterIconsLeftMenu(false, outterIconsLeftMenu);
    }
});

function changeVisibilityOuterIconsLeftMenu(condition, selectedIcons) {
    if (condition) {
        for (let i= 0; i < selectedIcons.length; ++i) {
            selectedIcons[i].classList.remove("visible");
            selectedIcons[i].classList.add("hidden");
        }
    } else {
        for (let i= 0; i < selectedIcons.length; ++i) {
            selectedIcons[i].classList.remove("hidden");
            selectedIcons[i].classList.add("visible");
        }
    }

}