// header
let listItems = document.querySelectorAll("nav ul li a");

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() { 
        const itemActive = document.querySelector('.active')
        if (itemActive) {
            itemActive.classList.remove('active');
        }
        listItems[i].classList.add('active')
    })
}

let navIcon = document.querySelectorAll("button img");
navIcon[0].addEventListener("click", function(){
    let nav = document.querySelectorAll("header ul");
    let access = document.querySelectorAll("header div");
    const navActive = document.querySelector('.nav-active')
        if (navActive) {
            nav[0].classList.remove('nav-active');
            access[0].classList.remove('nav-active');
        } else{
            nav[0].classList.add('nav-active')
            access[0].classList.add('nav-active')
        }
})