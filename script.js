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

        // Get full file name from URL
        let fileName = element.src.split('/').pop();

        // Remove file ending
        let removeFileEnding = fileName.slice(0, fileName.lastIndexOf('.'));

        // Add file name (without file ending OR full file name)
        dialogTitle.textContent = "Picture name: " + removeFileEnding || fileName;
    });
});

// Click on close button: Close dialog
closeButton.addEventListener('click', () => {
    dialogBox.close();
});

// Click on left arrow: Previous picture
document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryPictures.length) % galleryPictures.length;
    updateDialog();
});

// Click on right arrow: Next picture
document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryPictures.length;
    updateDialog();
});

// Counter for current picture number and total number of pictures 
function updateDialog() {
    pictureFullView.src = galleryPictures[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${galleryPictures.length}`;
}

// Control the arrows with arrow keys on the keyboard
document.addEventListener('keydown', (event) => {
    if (!dialogBox.open) return;

    if (event.key === 'ArrowLeft') {
        leftArrow.click();
    } else if (event.key === 'ArrowRight') {
        rightArrow.click();
    }
});






// Old version:
// Click on picture in gallery: Open dialog box
// galleryPictures.forEach(element => {
//     element.addEventListener('click', () => {

//         // Open dialog box
//         dialogBox.showModal();
//         pictureFullView.src = element.src;

//         // Get full file name from URL
//         let fileName = element.src.split('/').pop();

//         // Remove file ending
//         let removeFileEnding = fileName.slice(0, fileName.lastIndexOf('.'));

//         // Add file name (without file ending OR full file name)
//         dialogTitle.textContent = "Picture name: " + removeFileEnding || fileName;
//     });
// });


// // Click on close button: Close dialog
// closeButton.addEventListener('click', () => {
//     dialogBox.close();
// });


// // Click on background: Close dialog
// dialogBox.addEventListener('click', (element) => {
//     if (element.target == dialogBox) dialogBox.close();
// });





// leftArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % pictureSource.length;
//     pictureFullView.src = pictureSource[currentIndex];
// });


// rightArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + pictureSource.length) % pictureSource.length;
//     pictureFullView.src = pictureSource[currentIndex];
// });