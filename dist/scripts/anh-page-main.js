
// Top menu: click avatar -> show & hide profile menu on right side
avatar = document.querySelector('.avatar');
profileMenu = document.querySelector('#profileMenu')
avatar.addEventListener('click', function () {
    profileMenu.classList.toggle('show')
})

// Left menu: click toggle button -> open/hide left menu && show only icons (not text) on the partially displayed menu bar
toggleButton = document.getElementById('toggleButton');
leftMenu = document.getElementById('leftMenu');
outterIconsLeftMenu = document.getElementsByClassName("outer-icon");
toggleButton.addEventListener('click', () => {
    leftMenu.classList.toggle('open');
    condition = toggleButton.innerHTML = leftMenu.classList.contains('open');

    if (condition) {
        toggleButton.innerHTML = '&#8249;';
        changeVisibilityOuterIconsLeftMenu(true, outterIconsLeftMenu);
    } else {
        toggleButton.innerHTML = '&#8250;';
        changeVisibilityOuterIconsLeftMenu(false, outterIconsLeftMenu);
    }

    changeWithLeftMenuOnClickButton(condition);

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

function changeWithLeftMenuOnClickButton(condition)  {
    const mainContent = document.querySelector('.main');
    mainContent.style.width = condition ? "calc(100% - 34.8125rem)" : "calc(100% - 20.8125rem)";
}