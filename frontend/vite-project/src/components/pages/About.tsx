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

export default function About() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <>
            <MDBContainer className="my-5 gradient-form">
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
                                    src={image}
                                    width={100}
                                    alt=''
                                />
                            </MDBNavbarBrand>

                            <MDBCollapse navbar show={showNavCentred} className="justify-content-center my-4 mb-4" id='navbarCenteredExample'>
                                <MDBNavbarNav fullWidth={false}  className='mb-2 mb-lg-0'>

                                    <MDBNavbarItem>
                                        <MDBNavbarLink active aria-current='page' href='#'>
                                            Página Inicial
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='#'>Doação</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle tag='a' className='nav-link'>
                                                Sobre nós
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>Quem nós somos</MDBDropdownItem>
                                                <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                                <MDBDropdownItem link>Nossos Eventos</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
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

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me"/>
                                    Usina-EcoCultural
                                </h6>
                                <p>
                                    Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Produtos da Loja</h6>
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
                                <h6 className='text-uppercase fw-bold mb-4'>Links Úteis</h6>
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
                                <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
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

                <div className='textRedesSociais'>
                    <p><strong>Redes Sociais:</strong></p>
                </div>

                <div className="threeSocialMediaBottomButtons">
                    <button className="helpBottomButton">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZKMBmKBZjzmsZCbgkcnLqhfwRlkGVxCFtRnXrQjZlXvgWznxWmLPWlbxzxGPLsJFzLV" target="_blank">
                            <img className="help" src="./src/components/pages/Assets/images/question.png" alt="question" />
                            Tire suas dúvidas!
                        </a>
                    </button>
                    <button className="socialMediaBottomButton">
                        <a href="https://linktr.ee/usinaecocultural" target="_blank">
                            <img className="socialMedia" src="./src/components/pages/Assets/images/social-media.png" alt="social" />
                            Veja nossas Causas!
                        </a>
                    </button>
                    <button className="instagramBottomButton">
                        <a href="https://www.instagram.com/usinaecocultural/" target="_blank">
                            <img className="instagramImage" src="./src/components/pages/Assets/images/instagram.png" alt="Instagram" />
                            Siga Nosso Instagram!
                        </a>
                    </button>
                </div>
                <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © {new Date().getFullYear()} Todos os Direitos Reservados:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}