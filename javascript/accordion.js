const droplink = document.querySelector('#droplink');
const dropbox = document.querySelector('.dropbox');

droplink.addEventListener('click', () => {
    if (dropbox.style.maxHeight) {
        // Close
        dropbox.style.maxHeight = null;
    } else {
        // Open to its content height
        dropbox.style.maxHeight = dropbox.scrollHeight + "px";
    }
    
    dropbox.classList.toggle('open');
});
