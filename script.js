// ##### Code for dialog box #####

// Variables
const dialogBox = document.getElementById('dialog-box');
const pictureFullView = document.getElementById('picture-full-view');
const closeButton = document.getElementById('close-button-dialog-box');
const galleryPictures = document.querySelectorAll('.gallery-item');


// Click on picture in gallery: Open dialog box
galleryPictures.forEach(element => {
    element.addEventListener('click', () => {
        dialogBox.showModal();
        pictureFullView.src = element.src;
    });
});



// Select all images in the gallery
// document.querySelectorAll('.gallery-item').forEach (element => {
//     element.addEventListener("click", () => {
//         dialogBox.showModal();
//         pictureFullView.src = element.src;
//     });
// });


// Click on close button: Close dialog
closeButton.addEventListener('click', () => {
    dialogBox.close();
});


// Click on background: Close dialog
dialogBox.addEventListener('click', (element) => {
    if (element.target == dialogBox) dialogBox.close();
});
