const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});
function TelechargerDocument(){
  window.location.href="Images/Cv.pdf";
}
