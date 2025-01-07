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
