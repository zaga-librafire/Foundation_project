// const header = document.querySelector(".header");
// let prevPosY = window.scrollY;
//   addEventListener("scroll", () => {
//     const posY = window.scrollY;
//     if (posY <= prevPosY || posY <= 0) {
//       header.classList.remove("hide");
//     } else {
//       header.classList.add("hide");
//     }
//     prevPosY = posY;
//   });

// BURGER MENU
const headerNavigation = document.querySelector('.header');
const body = document.querySelector('body');

function myFunction(x) {
  headerNavigation.classList.toggle('active');
  x.classList.toggle("change");

}


//MODAL for index.html
// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("button-modal")[0];
var btn1 = document.getElementsByClassName("button-modal-1")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//FORM
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');
const agreementCheckbox = document.getElementById('agreement-checkbox');
const submitButton = document.getElementById('submit-button');

fileInput.addEventListener('change', () => {
  //fileList.innerHTML = '';
  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    const fileItem = document.createElement('div');
    fileItem.className = 'file';

    const fileName = document.createElement('span');
    fileName.textContent = file.name;
    fileItem.appendChild(fileName);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => {
      fileItem.remove();
      checkAgreement();
    });
    fileItem.appendChild(removeButton);

    fileList.appendChild(fileItem);
  }

  checkAgreement();
});

agreementCheckbox.addEventListener('change', () => {
  checkAgreement();
});

function checkAgreement() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

document.getElementById('file-upload-form').addEventListener('submit', (event) => {
  event.preventDefault();
});




