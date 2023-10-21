import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'; //import para linkar as páginas - não usado
import image from './Assets/images/usina_icon.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas

import {
    MDBContainer,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBCol,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBNavbarBrand,
    MDBFooter
}
    from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";

export default function About() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <>
            <MDBContainer className="mb-5 gradient-form">
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
                                    <MDBNavbarItem className="mx-4">
                                        <div className='mx-auto'>
                                            <Link to="/Login">
                                                <a className='btn mb-2 btn btn-outline-success' href='' role='button'>
                                                    <MDBIcon fas icon="user" />Login
                                                </a>
                                            </Link>
                                        </div>
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


            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado em nossas redes sociais:</span>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </a>
                        <a href='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </a>
                        <a href='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </a>
                        <a href='https://www.instagram.com/usinaecocultural/' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </a>
                        <a href='https://www.youtube.com/@usinaecocultural' target="_blank" className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
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
                                <p>
                                    Para saber mais, acesse nosso:
                                    <a href="https://linktr.ee/usinaecocultural">Linktr.ee</a>
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
                
            </MDBFooter>
        </>
    );
}