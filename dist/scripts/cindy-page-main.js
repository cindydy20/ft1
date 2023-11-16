document.addEventListener("DOMContentLoaded", function() {
    const clickableBlocks = document.querySelectorAll(".clickable-block");

    clickableBlocks.forEach(block => {
        block.addEventListener("click", function() {
            const targetId = block.getAttribute("data-target");
            const expandableMenu = document.getElementById(targetId + "-menu");

            if (expandableMenu.style.display === "block") {
                expandableMenu.style.display = "none";
            } else {
                expandableMenu.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.addEventListener("click", function() {
            filters.forEach(f => {
                f.classList.remove("active");
                f.style.borderBottomColor = "transparent";
            });

            filter.classList.add("active");
            filter.style.borderBottomColor = filter.style.color;
        });
    });
});
