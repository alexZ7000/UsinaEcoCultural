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
import usina_schedule from "./Assets/images/schedule.png";
import usina_parchment from "./Assets/images/parchment.png";
import usina_donate from "./Assets/images/donate.png";
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
                        <MDBNavbarBrand href='#' className="ms-1">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                            <img
                                src={icone_usina}
                                width={100}
                                alt=''
                            />
                            </Link>
                        </MDBNavbarBrand>

                        <MDBCollapse navbar show={showNavCentred} className="justify-content-center">
                            <MDBNavbarNav fullWidth={true}>
                                <div className="ms-5"></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <MDBNavbarLink active aria-current='page' href='#'>
                                            Página Inicial
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/Donate" style={{ textDecoration: 'none' }}>
                                        <MDBNavbarLink>Doação</MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-auto">
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link'>
                                            Sobre nós
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <Link to="/History" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                            </Link>
                                            <Link to="/Shop" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Loja</MDBDropdownItem>
                                            </Link>
                                            <Link to="/EventsCalendary" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Calendário de Eventos</MDBDropdownItem>
                                            </Link>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="ms-5">
                                    <Link to="/Login"><a className='btn btn-outline-success ms-5' href='' role='button'><MDBIcon fas icon="user" /> Login</a></Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <Link to="/SignUp"><a className='btn btn-success' href='' role='button'><MDBIcon far icon="user" /> Cadastre-se</a></Link>
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
        <div className='px-3 text-center bg-light my-5 rounded-2'>
                <h1 className='mb-3 pt-4'>Site Cultural</h1>
                <h4 className='mb-3'>ONG Destinada as causas ambientais</h4>
                <a className='btn btn-outline-success mb-5 btn-lg' href='' role='button'>
                    APOIE A CAUSA!!
                </a>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block rounded-3'
                    itemId={1}
                    src={abelha_usina}
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block rounded-3'
                    itemId={2}
                    src={banquete_usina}
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block rounded-3'
                    itemId={3}
                    src={yoga_usina}
                    alt='...'
                />
            </MDBCarousel>
            <div className="container-sm">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <h4 className='mt-5 border-bottom border-primary'>Faça sua doação</h4>
                        <button className="btn btn-outline-light">
                            <Link to="/Donate" style={{ textDecoration: 'none' }}>
                                <img className=""
                                     width={225}
                                     height={210}
                                     src={usina_donate}
                                     alt="usina_donate"/>
                            </Link>
                        </button>
                    </div>
                    <div className="col-md-4 mb-2">
                        <h4 className='mt-5 border-bottom border-primary'>Conheça nossa história</h4>
                        <button className="btn btn-outline-light">
                            <Link to="/History" style={{ textDecoration: 'none' }}>
                                <img className=""
                                     width={200}
                                     height={190}
                                     src={usina_parchment}
                                     alt="usina_parchment"/>
                            </Link>
                        </button>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h4 className='mt-5 border-bottom border-primary'>Veja nossos próximos eventos</h4>
                        <button className="btn btn-outline-light">
                            <Link to="/EventsCalendary" style={{ textDecoration: 'none' }}>
                                <img className=""
                                     width={200}
                                     height={200}
                                     src={usina_schedule}
                                     alt="usina_calendario"/>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
            <div className="row">
                <div className="container">
                    <div className="my-5">
                        <h1 className="text-center border-bottom mb-3">Onde nos encontrar?</h1>
                        <iframe className="container rounded-3 border border-2 border-light my-1"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.060978890611!2d-46.62206929643048!3d-23.596908939478432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bf8fec09847%3A0x21fe6ebe5482bc4e!2sUsina%20Eco-Cultural!5e0!3m2!1spt-BR!2sbr!4v1693825060460!5m2!1spt-BR!2sbr"
                        width="1000" height="600" allowFullScreen={true} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <p className="text-primary text-center">Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</p>
                    </div>
                </div>
            </div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado em nossas redes sociais:</span>
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
                        <a href='https://www.instagram.com/usinaecocultural/' target={"_blank"} className='me-4 text-reset'>
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
                                    <Link to="/Shop" className="text-dark">
                                        Loja
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/History" className="text-dark">
                                        Eventos
                                    </Link>
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