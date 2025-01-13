class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.renderFooter()
        this.addInteractions()
    }

    renderFooter() {
      this.innerHTML = `
        <style>
            .footer {
                padding: 20px 0px;
            }
            .section-1 {
                display: flex;
                justify-content: space-evenly;
                padding-bottom: 84px;
            }
            .newsletter {
                display: flex;
                flex-direction: column;
                gap: 10px;
                flex: 0 0 280px;
                padding-top: 15px;
                padding-right: 60px;
            }
            .news {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .social-media {
                display: flex;
                gap: 20px;
                padding: 5px;
            }
            .section-1 .information {
                display: flex;
                width: 70%;
                justify-content: space-evenly;
            }
            .section-1 .information div{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .section-1 .information {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                padding: 20px
            }
            .information div p {
                font-family: "Poppins", serif;
                font-size: 16px;
                color: var(--slate-400-color)
            }
            .section-1 .newsletter p {
                font-family: "Poppins", serif;
                font-size: 12px;
                color: var(--slate-400-color)
            }
            .information div span , .newsletter span{
                font-family: "Outfit", serif;
                font-weight: 500;
                font-size: 16px;
                color: var(--slate-500-color)
            }
            .inputs {
                border: 1px solid var(--slate-200-color);
                border-radius: 8px;
                padding: 2px 2px 2px 10px;
                width: 280px;
                display: flex;
                justify-content: space-between;
            }
            .in-email {
                width: 85%;
            }
            .in-email, .in-submit {
                border: none;
            }
            .in-submit {
                background-color: var(--primary-500-color);
                background-image: url(../src/icons/arrow-rightW.svg);
                background-repeat: no-repeat;
                background-size: 50%;
                background-position: center;
                width: 32px;
                height: 32px;
                border-radius: 8px;

            }
            .section-2 {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid var(--primary-200-color);
                padding: 20px 60px;
                font-size: 12px;
                color: var(--slate-400-color);
                align-items: center;
            }
            .section-2 span {
                color: var(--primary-500-color);
                font-family: "Outfit", serif;
                font-size: 24px;
                font-weight: 700;
            }
            .section-2 a p {
                color: var(--slate-400-color);
            }
            .sec-2 {
                display: flex;
                gap: 70px;
            }
            form input::placeholder {
                color: var(--slate-400-color);
                font-family: "Poppins", serif;
                font-size: 14px;
            }
            .class-form-validade-false {
                border:1.5px solid red;
            }

            .class-form-validade-true {
                border:1.5px solid var(--primary-500-color);
            }
            form input {
                outline: none
            }
            .information a p:hover {
                color: var(--slate-500-color);
            }
            #email {
                cursor: pointer;
            }
            .style-span p .span-message {
                display: none;
            }
            .style-span p span {
                color: red;
                font-size: 12px;
            }
            
            @media (max-width: 1024px) {
                .footer .section-2 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .newsletter {
                    flex: 0 0 auto;
                    padding: 20px;
                    width: 280px;
                }
                .section-1 .information div {
                    gap: 12px;
                    padding: 0px 20px 20px 20px;
                }
                .section-1 .information {
                    padding: 20px;
                    justify-content: flex-start;
                    flex: 0 0 auto;
                    width: 50%;
                }
                
            @media (max-width: 762px) {
                .footer .section-1 {
                    display: flex;
                    flex-direction: column-reverse;
                    align-items: center;
                }
                .newsletter {
                    flex: 0 0 auto;
                    align-self: center;
                }
                .section-1 .information div {
                    padding: 0px;
                }
                
            }
         
        </style>
        <head>
            <link rel="stylesheet" href="../src/css/reset.css">
            <link rel="stylesheet" href="../src/css/variables.css">
        </head>
        <footer class="footer">
            <div class="section-1">
                <div class="information">
                    <div>
                        <p><span>Para você</span></p>
                        <a href="../404/error.html"><p>Contas pessoais</p></a>
                        <a href="../404/error.html"><p>Empréstimos</p></a>
                        <a href="../404/error.html"><p>Investimentos</p></a>
                    </div>
                    <div>
                        <p><span>Nullbank</span></p>
                        <a href="../404/error.html"><p>Sobre nós</p></a>
                        <a href="../404/error.html"><p>Nossa missão</p></a>
                        <a href="../404/error.html"><p>Blog</p></a>
                    </div>
                    <div>
                        <p><span>Serviços</span></p>
                        <a href="../404/error.html"><p>Conta digital</p></a>
                        <a href="../404/error.html"><p>Pix e transferências</p></a>
                        <a href="../404/error.html"><p>Pagamentos online</p></a>
                    </div>
                    <div>
                        <p><span>Suporte</span></p>
                        <a href="../404/error.html"><p>Central de ajuda</p></a>
                        <a href="../404/error.html"><p>Fale conosco</p></a>
                        <a href="../404/error.html"><p>Perguntas frequentes</p></a>
                    </div>
                </div>
                <div class="newsletter">
                    <div class="news">
                        <p><span>Newsletter</span></p>
                        <p>Receba novidades e dicas financeiras diretamente no seu email</p>
                        </div>
                    <form novalidate class = "style-span" id= "form-2">
                        <div class="inputs">
                            <input for="email" type="email" placeholder="email@exemplo.com" id="input-email" class="in-email">
                            <input type="submit" value="" id="email" class="in-submit">
                        </div>
                        <p><span class="error-email-newsletter span-message"> Você precisa digitar um email válido </span></p>
                    </form>
                    <div class="social-media">
                        <a href="https://www.facebook.com/"><img src="../src/icons/facebook.svg" alt="facebook"></a>
                        <a href="https://x.com/?mx=2"><img src="../src/icons/twitter.svg" alt="twitter"></a>
                        <a href="https://www.linkedin.com/"><img src="../src/icons/linkedin.svg" alt="linkedin"></a>
                        <a href="https://www.instagram.com/"><img src="../src/icons/instagram.svg" alt="instagram"></a>
                    </div>
                </div>
            </div>
            <div class="section-2">
                <p>© 2024 NullBank. Todos os direitos reservados.</p>
                <a href="../index.html"><p><span>NullBank</span></p></a>
                <div class="sec-2">
                    <a href="../404/error.html"><p>Política de Privacidade</p></a>
                    <a href="../404/error.html"><p>Termos de Uso</p></a>
                </div>
            </div>
        </footer>
      `;
    }

    addInteractions() {
        const emailIn = document.getElementById("input-email")
        const inputs = document.getElementsByClassName("inputs")
        const errorEmailNewsletter = document.getElementsByClassName("error-email-newsletter")
        const errorEmailN = errorEmailNewsletter[0]
        const form2 = document.getElementById("form-2") 

        emailIn.addEventListener("input", function() {

            const regexEmail = /\w+@\w+\.\w+/;
            const valueInput = emailIn.value
            const testName = regexEmail.test(valueInput)

            validateInfos(inputs[0], testName, errorEmailN) 
        })

        function validateInfos(item, boolean, error) {

            if (boolean) {
                item.classList.remove('class-form-validade-false');
                item.classList.add('class-form-validade-true');
                error.classList.add('span-message');

            } else {
                item.classList.remove('class-form-validade-true');
                item.classList.add('class-form-validade-false');
                error.classList.remove('span-message');
            }  
        }

        form2.addEventListener("submit", function(event) {
            event.preventDefault()
            let validationPassed = true
            let classNewsLetter = errorEmailN.classList.value   
        
            if(!classNewsLetter.includes("span-message") && !classNewsLetter.includes("span-message")) {
                validationPassed = false
            } else if(classNewsLetter.includes("span-message")){
                validationPassed = true
            }
            
            if(validationPassed && emailIn.value.length > 0) {
                if (localStorage.cont) {
                    localStorage.cont = Number(localStorage.cont)+1;
                } else {
                    localStorage.cont = 1;
                }
                localStorage.setItem("id_Client_" + localStorage.cont + " Newsletter - Email:", emailIn.value)
                    
                this.submit()
            } 
        })
    }
}
  
customElements.define('footer-component', Footer);