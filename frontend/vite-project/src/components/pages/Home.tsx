import React, {useState} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBIcon,
    MDBNavbarBrand,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn,
} from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";
import abelha_usina from "./Assets/images/abelha.jpeg";
import banquete_usina from "./Assets/images/banquete.png";
import yoga_usina from "./Assets/images/yoga.png";
import abaixo_assinado_usina from "./Assets/images/Abaixo_Assinado.png";
import faixa_do_futuro_usina from "./Assets/images/faixa_do_futuro.jpeg";
import {Link} from "react-router-dom";
import App from '../../App';

export default function Home() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <><MDBContainer className="mb-5 gradient-form">
            <MDBRow className='container-sm'>
                <MDBNavbar className="navbar" expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarCenteredExample'
                            aria-controls='navbarCenteredExample'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavCentred(!showNavCentred)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href='#'>
                            <img
                                src={icone_usina}
                                width={100}
                                alt=''
                            />
                        </MDBNavbarBrand>

                        <MDBCollapse navbar show={showNavCentred} className="justify-content-center my-4 mb-4" id='navbarCenteredExample'>
                            <MDBNavbarNav fullWidth={false}>
                                <MDBNavbarItem className="mx-auto">
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link'>
                                            Sobre
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <Link id="textNavBar" to="/History">Nossa História</Link>
                                            <br />
                                            <Link id="textNavBar" to="/Shop">Loja</Link>
                                            <br />
                                            <Link id="textNavBar" to="/EventsCalendary">Calendário de Eventos</Link>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="ms-5 justify-content-center">
                                    <Link to="/Login"><a className='btn btn-outline-primary ms-5' href='' role='button'><MDBIcon fas icon="user" /> Login</a></Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="ms-3">
                                    <Link to="/SignUp"><a className='btn btn-primary' href='' role='button'><MDBIcon far icon="user" /> Cadastre-se</a></Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBRow>
        </MDBContainer>
        <MDBRow className='abaixoAssinado'>
            <u><strong>Abaixo assinado Usina Eco-Cultural</strong></u>
            <img className='imageAbaixoAssinado' src={abaixo_assinado_usina} alt="ImagemAbaixoAssinado" />
        </MDBRow>

            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-primary mb-5' href='' role='button'>
                    Call to action
                </a>
                <MDBCarousel className="carousel" showControls showIndicators>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={abelha_usina}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={banquete_usina}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={yoga_usina}
                        alt='...'
                    />
                </MDBCarousel>
                <h1 className='mt-5 mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-primary mb-5' href='' role='button'>
                    Call to action
                </a>
            </div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado conosco em nossas redes sociais</span>
                    </div>
                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </a>
                    </div>
                </section>

                <section className='containerInfoSite'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me"/>
                                    <u>Usina-EcoCultural</u>
                                </h6>
                                <p>
                                Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Produtos da Loja</u></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Roupas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Canecas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Livros
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Outros
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Links Úteis</u></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Apoie a Causa
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Configurações
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Loja
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Eventos
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Contato</u></h6>
                                <p>
                                    <MDBIcon icon="home" className="me"/>
                                <i>Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</i>
                                <br/>
                                Perto da estação Santos-Imigrantes (Linha Verde)
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me"/>
                                <strong>usinaecoculturalnaooficial@gmail.com</strong>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me"/>(xx) xxxxx-xxxx
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div className='text-center p-4 mt-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © {new Date().getFullYear()} Todos os Direitos Reservados
                    <a className='text-reset fw-bold' href='#'>
                    </a>
                </div>
            </MDBFooter></>
    );
}