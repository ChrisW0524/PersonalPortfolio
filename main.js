/*===== NAV BAR =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){ //if toggle and nav is not null
        toggle.addEventListener('click', ()=>{
            console.log('clicked') //action when toggle is clicked
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav_toggle', 'nav_menu')
