const header = document.querySelector(".sticky-header");
const main = document.querySelector('.main-content')

let lastScroll = 0;

window.addEventListener("scroll", () => { 
    // Get current scroll
    const currentScroll = window.scrollY; 
    
    if (currentScroll > lastScroll) { 
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
    
    // update last known scroll position for next scroll event
    lastScroll = currentScroll;
})