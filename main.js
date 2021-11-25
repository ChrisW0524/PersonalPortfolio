/*===== NAV BAR =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){ //if toggle and nav is not null
        toggle.addEventListener('click', ()=>{
            console.log('clicked'); //action when toggle is clicked
            nav.classList.toggle('show');
        })
    }
}

const removeMenu = () =>{
    var elements = document.getElementsByTagName('a'); 
    nav = document.getElementById('nav_menu');
    for(var i=0; i<elements.length; i++){
        if (elements[i].className == 'underline_effect') { 
             elements[i].onclick = function(){ 
               nav.classList.remove('show');
       }
     } 
    }
}

showMenu('nav_toggle', 'nav_menu')
removeMenu();

/*=========SCROLL HANDLER ===========*/
window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    let viewportHeight = window.innerHeight;
    bar = document.getElementById('nav_bar');
    let barHeight = bar.offsetHeight;
    if(scroll > viewportHeight - barHeight){
        bar.style.backgroundColor = "#272626";
        bar.style.filter= "drop-shadow(0px 10px 4px black)";
    }
    else{
        bar.style.backgroundColor = "transparent";
        bar.style.filter= "none";
    }
})

/*========= RELLAX JS ==========*/
var rellax = new Rellax('.parallax');

/*=========GSAP ANIMATION========*/
gsap.from('.nav_toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('.underline_effect', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});

gsap.from('#home_title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('#home_subtitle', {opacity:0, duration: 3, delay: 1.1, y: 35, ease:'expo.out'});

/*===== SCROLL REVEAL =======*/
const sr = new ScrollReveal({
    duration: 1000,
    reset: true
})

sr.reveal('.section_title', {origin: 'top', distance: '70px'})

sr.reveal('.reveal_bottom', {origin: 'bottom', distance: '70px'})

sr.reveal('.scale_reveal', {scale: 0})


/*===== Accordion JS =====*/
const accordion = document.getElementsByClassName('content_container');
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

$(document).ready(function(){
    console.log($("body"));
});
