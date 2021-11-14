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

/*========= RELLAX JS ==========*/
var rellax = new Rellax('.parallax');

/*=========GSAP ANIMATION========*/
gsap.from('.nav_toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('#home_title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('#home_subtitle', {opacity:0, duration: 3, delay: 1.1 , y: 35, ease:'expo.out'});
