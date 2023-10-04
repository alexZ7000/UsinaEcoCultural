import React from 'react';
import './index.css';

function PaginaInicial() {
    return (
        <div className="elementoPai">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><i>Usina-EcoCultural</i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Próximos Eventos<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Outra Opção de Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li> 
                    </ul>
                </div>
            </nav> {/*tag de navegação nao esta responsiva*/}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./src/components/pages/images/faixa-do-futuro.jpeg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./src/components/pages/images/reuniao_verde.jpeg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./src/components/pages/images/banquete.JPG" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> {/*slider tendo defeito*/}
            <p>Ter abaixo assinado em destaque</p>
            <div className="threeSocialMediaBottomButtons">
                <button className="helpBottomButton">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZKMBmKBZjzmsZCbgkcnLqhfwRlkGVxCFtRnXrQjZlXvgWznxWmLPWlbxzxGPLsJFzLV" target="_blank">
                        <img className="help" src="./src/components/pages/images/question.png" alt="question" />
                        Tire suas dúvidas conosco!
                    </a>
                </button>
                <button className="socialMediaBottomButton">
                    <a href="https://linktr.ee/usinaecocultural" target="_blank">
                        <img className="socialMedia" src="./src/components/pages/images/social-media.png" alt="social" />
                        Siga Nossas Redes Sociais e Veja nossas Causas!
                    </a>
                </button>
                <button className="instagramBottomButton">
                    <a href="https://www.instagram.com/usinaecocultural/" target="_blank">
                        <img className="instagramImage" src="./src/components/pages/images/instagram.png" alt="Instagram" />
                        Siga Nosso Instagram!
                    </a>
                </button>
            </div>
            <p><b>&copy; 2023 - todos os direitos reservados</b></p>
        </div>
    );
}

export default PaginaInicial;
