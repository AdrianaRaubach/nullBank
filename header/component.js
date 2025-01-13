class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.renderHeader()
        this.addInteractions()
    }

    renderHeader() {
      this.innerHTML = `
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            .header {
                display: flex;
                flex-direction: row;
                padding: 20px 64px;
                justify-content: space-between;
                border-bottom: 1px solid var(--slate-200-color);
                font-size: 16px;
                align-items: center;
                position: sticky;
                z-index: 100;
                top: 0;
                background-color: #FFF;
            }
            .header a {
                color: var(--slate-400-color);
            }
            .nav {
                display: flex;
                gap: 35px;
                font-weight: 500;
            }
            .nav-icon img {
                width: 35px;
            }
            .nav-icon {
                position: absolute;
                right: 64px;
                display: none;
                background-color: var(--primary-200-color);
                border: none;
                padding: 3px;
                border-radius: 8px;
            }
            .nav a:hover , .access .register:hover{
                color: var(--slate-500-color);
            }
            .access a {
                font-weight: 600;
                padding: 8px 35px;
            }
            .login {
                background-color: var(--primary-500-color);
                border-radius: 8px;
                color: #FFFFFF!important;
            }
            #logo a{
                color: var(--primary-500-color);
                font-family: "Outfit", serif;
                font-size: 24px;
                font-weight: 700;
            }

            @media (max-width: 1024px) {
                
                .nav-icon {
                    display: flex;
                }
                .header {
                    flex-direction: column;
                    align-items: start;
                }
                .nav {
                    align-items: flex-start;
                }
                .nav, .access {
                    display: none;
                    flex-direction: column;
                    text-align: center;
                    margin-top: 15px;
                    border-top: 1px solid var(--slate-200-color);
                }
            }
            .nav-active {
                display: flex!important;
                
            }
            .active {
                color: var(--primary-500-color)!important;
            }
        </style>
        <head>
            <link rel="stylesheet" href="../src/css/reset.css">
            <link rel="stylesheet" href="../src/css/variables.css">
        </head>
        <header class="header">
            <p id="logo"><a href="../index.html">NullBank</a></p>
            <nav>
                <ul class="nav" class="display">
                    <li><a id="index" href="../index.html">Início</a></li>
                    <li><a id="for-you" href="../404/error.html">Para você</a></li>
                    <li><a id="services" href="../404/error.html">Serviços</a></li>
                    <li><a id="contact" href="../contact/contact.html">Contato</a></li>
                </ul>
            </nav>
            <div class="access">
                <a href="../404/error.html" class="register">Cadastrar-se</a>
                <a href="../404/error.html" class="login">Fazer Login</a>
            </div>
            <button class="nav-icon">
                <img src="../src/icons/menu.svg" alt="menu">
            </button>
        </header>
      `;
    }

    addInteractions() {

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
    }
  }
  
customElements.define('header-component', Header);