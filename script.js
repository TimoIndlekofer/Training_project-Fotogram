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


// const container = document.getElementById('picture-gallery');


// Array with pictures names
let pictureDatabase = [
    "./pictures/alaska_winter_lake.jpg",
    "./pictures/bird_on_rock.jpg",
    "./pictures/bird_on_tree.jpg",
    "./pictures/comic_city_view.jpg",
    "./pictures/dark_clouds_view.png",
    "./pictures/duck.jpg",
    "./pictures/mountain.jpg",
    "./pictures/sea_view.jpg",
    "./pictures/storm_clouds_view.jpg",
    "./pictures/tigers.jpg",
    "./pictures/winter_lake.jpg",
    "./pictures/winter_tree.jpg"
];


// Array with alternative picture names
let pictureDatabaseAlt = [
    "Picture_alaska_winter_lake.jpg",
    "Picture_bird_on_rock.jpg",
    "Picture_bird_on_tree.jpg",
    "Picture_comic_city_view.jpg",
    "Picture_dark_clouds_view.png",
    "Picture_duck.jpg",
    "Picture_mountain.jpg",
    "Picture_sea_view.jpg",
    "Picture_storm_clouds_view.jpg",
    "Picture_tigers.jpg",
    "Picture_winter_lake.jpg",
    "Picture_winter_tree.jpg"
];





// Init function
function init() {
    render();
    closeDialogEnterButton();
}


// Template for pictures
function render() {
    let contentReference = document.getElementById('picture-gallery');
    for (let i = 0; i < pictureDatabase.length; i++) {
        contentReference.innerHTML += getPictureTemplate(i);
    }
}


function getPictureTemplate(index) {
        return `<figure>
                <img src=${pictureDatabase[index]} alt=${pictureDatabaseAlt[index]} class="gallery-item" onclick="openDialog(${index})" tabindex="0" role="button" aria-label="Bild vergrößern" data-index="${index}">
            </figure>`
}


// Dialog window
function openDialog(index) {
    currentIndex = index;
    updateDialog();
    dialogBox.showModal();
}


function closeDialog() {
    dialogBox.close();
}


function closeDialogEnterButton() {
        dialogBox.addEventListener('click', (event) => {
    if (event.target === dialogBox) {
        dialogBox.close();
    }
});
}


function updateDialog() {
    pictureFullView.src = pictureDatabase[currentIndex];
    pictureFullView.alt = pictureDatabaseAlt[currentIndex];

    // Picture filename for header area of dialog
    const fileName = pictureFullView.src.split('/').pop();
    const removeFileEnding = fileName.slice(0, fileName.lastIndexOf('.'));
    dialogTitle.textContent = removeFileEnding || fileName;

    counter.textContent = `${currentIndex + 1} / ${pictureDatabase.length}`;
}


function changePicture(direction) {
    currentIndex += direction;
    if (currentIndex >= pictureDatabase.length) {
        currentIndex = 0;

    } else if (currentIndex < 0) {
        currentIndex = pictureDatabase.length -1;
    }
    updateDialog();
}


document.addEventListener('keydown', (event) => {
    if (!dialogBox.open) {
        return;
    }

    if (event.key === 'ArrowLeft') {
        leftArrow.click();
    } else if (event.key === 'ArrowRight') {
        rightArrow.click();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const img = event.target.closest('.gallery-item');

        if (img) {
            event.preventDefault();

            const index = parseInt(img.getAttribute('data-index'), 10);

            if (!isNaN(index)) {
                openDialog(index);
            }
        }
    } 
});













// 29.03.2026: Open dialog window
// galleryPictures.forEach((element, index) => {
//     element.addEventListener('click', () => {
//         currentIndex = index;
//         updateDialog();
//         dialogBox.showModal();
//     });

//     // Open dialog window with Enter
//     element.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();  
//             currentIndex = index;
//             updateDialog();
//             dialogBox.showModal();
//         }
//     });
// });

// // Click on close button: Close dialog
// closeButton.addEventListener('click', () => {
//     dialogBox.close();
// });

// // Click on background outside dialog: Close dialog
// dialogBox.addEventListener('click', (element) => {
//     if (element.target == dialogBox) dialogBox.close();
// });

// // Click on left arrow: Previous picture
// leftArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + galleryPictures.length) % galleryPictures.length;
//     updateDialog();
// });

// // Click on right arrow: Next picture
// rightArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % galleryPictures.length;
//     updateDialog();
// });

// // Counter for current picture filename, picture index and total number of pictures 
// function updateDialog() {
//     const currentPicture = galleryPictures[currentIndex];
//     pictureFullView.src = currentPicture.src;
//     pictureFullView.alt = currentPicture.alt;

//     // Picture filename for header area of dialog
//     const fileName = currentPicture.src.split('/').pop();
//     const removeFileEnding = fileName.slice(0, fileName.lastIndexOf('.'));
//     dialogTitle.textContent = removeFileEnding || fileName;

//     // Picture index and total number of pictures for footer area of dialog
//     counter.textContent = `${currentIndex + 1} / ${galleryPictures.length}`;
// }

// // Control the arrows with arrow keys on the keyboard in dialog window
// document.addEventListener('keydown', (event) => {
//     if (!dialogBox.open) return;

//     if (event.key === 'ArrowLeft') {
//         leftArrow.click();
//     } else if (event.key === 'ArrowRight') {
//         rightArrow.click();
//     }
// });