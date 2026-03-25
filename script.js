// ##### Code for dialog box #####

// Variables
const dialogBox = document.getElementById('dialog-box');
const pictureFullView = document.getElementById('picture-full-view');
const closeButton = document.getElementById('close-button-dialog-box');
const galleryPictures = document.querySelectorAll('.gallery-item');
const dialogTitle = document.getElementById('dialog-title');


// Click on picture in gallery: Open dialog box
galleryPictures.forEach(element => {
    element.addEventListener('click', () => {

        // Open dialog box
        dialogBox.showModal();
        pictureFullView.src = element.src;

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


// Click on background: Close dialog
dialogBox.addEventListener('click', (element) => {
    if (element.target == dialogBox) dialogBox.close();
});