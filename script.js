function openModal(element) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");

    // Set the modal text to the clicked element's content
    modalText.innerHTML = element.innerHTML;

    modal.style.display = "flex";

    // Enable fullscreen
    if (modal.requestFullscreen) {
        modal.requestFullscreen();
    } else if (modal.mozRequestFullScreen) { // Firefox
        modal.mozRequestFullScreen();
    } else if (modal.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) { // IE/Edge
        modal.msRequestFullscreen();
    }

    // Close modal on click/touch
    modal.onclick = closeModal;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // Exit fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}
