const originalMenu = document.querySelector(".menu");
const mainContent = document.querySelector(".main-content");
const imageline = document.querySelectorAll(".imageline");


function disablePointerEventsInside(container) {
    const allDescendants = container.querySelectorAll('*');
    allDescendants.forEach(i => {
        i.style.pointerEvents = 'none';
    });
}

function enablePointerEventsInside(container) {
    const allDescendants = container.querySelectorAll('*');
    allDescendants.forEach(i => {
        i.style.pointerEvents = '';
    });
}

function menuAnimation(menu) {
    const menuIsOpen = menu.classList.contains("open");

    if (!menuIsOpen) {
        // Slide main content and hide overflow
        mainContent.classList.add("sidebar-open");

        // Hide imageline overflow 
        imageline.forEach(i => {
            i.style.overflow = "hidden";
        });

        // Disable pointer events
        disablePointerEventsInside(mainContent);

        // Step 1: collapse top and bottom into center
        menu.classList.add("collapse");

        // Step 2: rotate center span
        setTimeout(() => {
            menu.classList.add("rotate");
        }, 100); 

        // Step 3: form the X
        setTimeout(() => {
            menu.classList.remove("collapse", "rotate");
            menu.classList.add("open");
        }, 100);

    } else {
        // === CLOSING ===

        mainContent.classList.remove("sidebar-open");

        // Step 1: return to collapsed state
        menu.classList.remove("open");
        menu.classList.add("collapse");

        // Step 2: undo rotation
        setTimeout(() => {
            menu.classList.add("rotate");
        }, 100);

        // Step 3: back to original hamburger
        setTimeout(() => {
            menu.classList.remove("rotate");
        }, 100);

        setTimeout(() => {
            menu.classList.remove("collapse");
        }, 200);

        setTimeout(() =>{
            // Set imageline overflow back when sidebar is closed
            imageline.forEach(i => {
                i.style.overflow = "";
            });

            // Enable pointer events when sidebar is closed
            enablePointerEventsInside(mainContent);
            
        }, 500);
    }
}

originalMenu.addEventListener("click", () => {
    menuAnimation(originalMenu);
});

mainContent.addEventListener("click", () => {
    if (originalMenu.classList.contains("open")) {
        // Close the menu (simulate a click on the menu icon)
        originalMenu.click();
    }
});