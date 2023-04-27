// BURGER MENU
const headerNavigation404 = document.querySelector('.header404');
const footer404 = document.querySelector('.footer404');
const body = document.querySelector('body');


function burgerFunction(x) {
  headerNavigation404.classList.toggle('active');
  footer404.classList.toggle('active');
  x.classList.toggle("change");
}

//MODAL for 404-one-page.html
// Get the modal
var modal = document.querySelector(".modal404");

// Get the button that opens the modal
var btn = document.getElementsByClassName("button-modal-2")[0];


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close404")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}