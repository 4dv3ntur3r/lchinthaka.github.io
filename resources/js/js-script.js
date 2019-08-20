var home = document.getElementById("home");
var about = document.getElementById("about");
var work = document.getElementById("work");
var contact = document.getElementById("contact");
var hire = document.getElementById("hire");
var tagger = document.getElementsByClassName("nav-bar");

//Slider
var slideIndex = 1;
var b;
var eleW = document.getElementsByClassName("work-showcase");
for (b = 0; b < eleW.length; b++){
  
  if (eleW[b].classList.contains("convert-slide")) {

console.log(eleW[b]);


console.log(document.getElementsByClassName("work-showcase")[0].classList.contains("convert-slide"));

//Slider when screen is small
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("convert-slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}
}else{
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}
}
}
function isHireOtherChecked(){
    var checkBox = document.getElementById("other-work");
    var divOne = document.getElementById("hire-div-one");
    var divTwo = document.getElementById("hire-div-two");
    var divThree = document.getElementById("hire-div-three");
    var otherComp = document.getElementById("other-comp");
    var divFive = document.getElementById("hire-div-five");

    if (checkBox.checked == true) {
        divOne.style.display = "none";
        divTwo.style.display = "none";
        otherComp.style.display = "flex";
    }else {
        divOne.style.display = "flex";
        divTwo.style.display = "flex";
        otherComp.style.display = "none";
    }

}

var btn = document.getElementById('contact-btn');
function addAnimation(){
      
      btn.preventDefault;
      
      btn.classList.add('animate');
}

function clearBtnAnimation(){
    
    if (btn.classList.contains('animate')) {
        btn.classList.remove('animate', 'success', 'error');
    }
}

function clearHirePopUp(){
    var alertArea = document.getElementById('alert-area');
    alertArea.style.display = "none";
}

//success and error btns
function successOrError() {
		document.getElementById('contact-submit').classList.add('success');
}

//Main navigation
document.getElementById("main-nav-btn").addEventListener("click", function() {
  this.classList.toggle("toggle");
  document.getElementById("overlay").classList.toggle("toggle");
  document.getElementById("main-nav").classList.toggle("toggle");
  document.getElementById("side-nav").classList.toggle("hidden-nav");
});
 