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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            :root {
                --slate-50-color: #F8FAFC;
                --slate-200-color: #E2E8F0;
                --slate-400-color: #94A3B8;
                --slate-500-color: #64748B;
                --slate-600-color: #475569;
                --primary-100-color: #F3F2FF;
                --primary-200-color: #EEE5FF;
                --primary-500-color: #6729FF;

            }
            html {
                font-family: "Poppins", serif;
            }

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
                justify-content: space-evenly;
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
            .sec-2 {
                display: flex;
                gap: 70px;
            }
         
        </style>

        <footer class="footer">
            <div class="section-1">
                <div class="information">
                    <div>
                        <p><span>Para você</span></p>
                        <p>Contas pessoais</p>
                        <p>Empréstimos</p>
                        <p>Investimentos</p>
                    </div>
                    <div>
                        <p><span>Nullbank</span></p>
                        <p>Sobre nós</p>
                        <p>Nossa missão</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <p><span>Serviços</span></p>
                        <p>Conta digital</p>
                        <p>Pix e transferências</p>
                        <p>Pagamentos online</p>
                    </div>
                    <div>
                        <p><span>Suporte</span></p>
                        <p>Central de ajuda</p>
                        <p>Fale conosco</p>
                        <p>Perguntas frequentes</p>
                    </div>
                </div>
                <div class="newsletter">
                    <div class="news">
                        <p><span>Newsletter</span></p>
                        <p>Receba novidades e dicas financeiras diretamente no seu email</p>
                        </div>
                    <div class="inputs">
                        <input type="email" placeholder="email@exemplo.com" class="in-email">
                        <input type="submit" value="" class="in-submit">
                    </div>
                    <div class="social-media">
                        <img src="../src/icons/facebook.svg" alt="facebook">
                        <img src="../src/icons/twitter.svg" alt="twitter">
                        <img src="../src/icons/linkedin.svg" alt="linkedin">
                        <img src="../src/icons/instagram.svg" alt="instagram">
                    </div>
                </div>
            </div>
            <div class="section-2">
                <p>© 2024 NullBank. Todos os direitos reservados.</p>
                <p><span>NullBank</span></p>
                <div class="sec-2">
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                </div>
            </div>
        </footer>
      `;
    }

    addInteractions() {
        
    }
  }
  
  customElements.define('footer-component', Footer);