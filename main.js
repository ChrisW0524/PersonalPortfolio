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
