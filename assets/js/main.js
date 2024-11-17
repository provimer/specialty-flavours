

window.addEventListener('scroll', () => myFunction());

window.addEventListener("scroll", reveal);

window.addEventListener("scroll", functionBtnLanguaje)

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



/* ===========select language button ========== */


const btnLanguaje = document.querySelector('.nav__option')

function functionBtnLanguaje() {
  btnLanguaje.classList.toggle('suprime', scrollY > 0)
}



/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');
const navLinkk = document.querySelectorAll('.nav__linkk');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== ACTIVE AND REMOVE MENU =====*/

const hamburger = document.querySelector('.hamburger');
const bar = document.querySelectorAll('.bar');
const navMenu = document.querySelector('.nav__menu');


function mobileMenu() {
  hamburger.classList.toggle('show');
  navMenu.classList.toggle('show');
  bar.forEach(n => n.classList.toggle('back-black'));
  hamburger.classList.toggle('color-black')
}

hamburger.addEventListener('click', mobileMenu);

/*===== Cambiar color nav =====*/

let navContent = document.querySelector('.nav__content');
let navItem = document.querySelectorAll('.nav__item');

let logo = document.querySelector('.logo');



let navbar = document.querySelector('.header');
let navBarCustom = document.querySelector('.custom-header');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', scrollY > 0);

})

window.addEventListener('scroll', () => {
  logo.classList.toggle('suprime', scrollY > 0);
  navContent.classList.toggle('suprime', scrollY > 0);

  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle('suprime', scrollY > 0);
  }

})




/*===== calcular fecha de footer =====*/

let idFecha = document.querySelector('#fecha');

idFecha.textContent = new Date().getFullYear();

/* form contant */


//Contact Form in PHP
/* const form = document.querySelector("form"),
statusTxt = form.querySelector(".status-form span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
} */



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}