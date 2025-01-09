let listItems = document.querySelectorAll("nav ul li a");

for(let i = 0; i < listItems.length; i++) {
    window.addEventListener("load", function() { 
        const urlString = window.location.href;
        const nameItem = listItems[i].id

        if(urlString.includes(nameItem)) {
            listItems[i].classList.add('active')
        }
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

