// ##### Code for dialog box #####

// Variables
const dialogBox = document.getElementById('dialog-box');
const pictureFullView = document.getElementById('picture-full-view');
const closeButton = document.getElementById('close-button-dialog-box');
const galleryPictures = document.querySelectorAll('.gallery-item');
const dialogTitle = document.getElementById('dialog-title');
const counter = document.getElementById('counter');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentIndex = 0;





// Open dialog window
galleryPictures.forEach((element, index) => {
    element.addEventListener('click', () => {
        currentIndex = index;
        updateDialog();
        dialogBox.showModal();
    });
});

// Click on close button: Close dialog
closeButton.addEventListener('click', () => {
    dialogBox.close();
});

// Click on background outside dialog: Close dialog
dialogBox.addEventListener('click', (element) => {
    if (element.target == dialogBox) dialogBox.close();
});

// Click on left arrow: Previous picture
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryPictures.length) % galleryPictures.length;
    updateDialog();
});

// Click on right arrow: Next picture
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryPictures.length;
    updateDialog();
});

// Counter for current picture filename, picture index and total number of pictures 
function updateDialog() {
    const currentPicture = galleryPictures[currentIndex];
    pictureFullView.src = currentPicture.src;
    pictureFullView.alt = currentPicture.alt;

    // Picture filename for header area of dialog
    const fileName = currentPicture.src.split('/').pop();
    const removeFileEnding = fileName.slice(0, fileName.lastIndexOf('.'));
    dialogTitle.textContent = removeFileEnding || fileName;

    // Picture index and total number of pictures for footer area of dialog
    counter.textContent = `${currentIndex + 1} / ${galleryPictures.length}`;
}

// Control the arrows with arrow keys on the keyboard in dialog window
document.addEventListener('keydown', (event) => {
    if (!dialogBox.open) return;

    if (event.key === 'ArrowLeft') {
        leftArrow.click();
    } else if (event.key === 'ArrowRight') {
        rightArrow.click();
    }
});