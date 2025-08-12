
const $originalHeader = $('.sticky-header');
const headerHeight = $originalHeader.outerHeight();
let $fixedClone = null;
let lastScroll = $(window).scrollTop();

function createClone() {
    $fixedClone = $originalHeader.clone().addClass('fixed-clone hidden').appendTo('body');
    
    const cloneMenu = $fixedClone.find('.menu')[0]; // get clone's menu
    console.log(cloneMenu)
    cloneMenu.addEventListener('click', () => {
        const menuIsOpen = cloneMenu.classList.contains("open");
    
        menuAnimation(cloneMenu);

        if (!menuIsOpen) {
            // Menu was closed, now opening
            $fixedClone.addClass('sidebar-open');
        } else {
            // Menu was open, now closing
            $fixedClone.removeClass('sidebar-open');
        }
    });
}

function removeClone() {
    if ($fixedClone) {
        $fixedClone.remove();
        $fixedClone = null;
    }
}

$(window).on('scroll', function() {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > headerHeight) {
        // Scroll past header height → show clone
        if (!$fixedClone) {
            createClone();
        }

        if (currentScroll > lastScroll) {
            // Scrolling down → hide clone
            if (!$fixedClone.hasClass('hidden')) {
                $fixedClone.addClass('hidden');
            }
        } else {
            // Scrolling up → show clone
            if ($fixedClone.hasClass('hidden')) {
                setTimeout(() => {
                    $fixedClone.removeClass('hidden');
                }, 20);
            }
        }
    } else {
        // Scroll at or below headerHeight
        // Only remove clone if near top (≤ 1px) to allow smooth transition on scroll up near headerHeight
        if (currentScroll <= 1) {
            removeClone();
        } 
        // Else keep clone visible if exists so it doesn't jump off immediately when scrolling up near headerHeight
        else if ($fixedClone && $fixedClone.hasClass('hidden')) {
            // If clone is hidden but scroll between 1 and headerHeight, show it for smoothness
            $fixedClone.removeClass('hidden');
        }
    }

    lastScroll = currentScroll;
});


// Had to move this from sidebar.js as cloneMenu isnt defined yet 
mainContent.addEventListener("click", () => {
    if (originalMenu.classList.contains("open")) {
        // Close the menu (simulate a click on the menu icon)
        originalMenu.click();
    } else if ($fixedClone && $fixedClone.find('.menu')[0].classList.contains("open")) {
        $fixedClone.find('.menu')[0].click();
    }
});