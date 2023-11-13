import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBFooter,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow,
} from "mdb-react-ui-kit";
import icone_usina from "./Assets/images/usina_icon.png";
import imagem1 from "./Assets/images/imagem1.png";
import imagem2 from "./Assets/images/imagem2.png";
import imagem3 from "./Assets/images/imagem3.png";
import imagem4 from "./Assets/images/imagem4.png";
import imagem5 from "./Assets/images/imagem5.png";
import imagem6 from "./Assets/images/imagem6.png";
import imagem7 from "./Assets/images/imagem7.png";
import imagem8 from "./Assets/images/imagem8.png";
import imagem9 from "./Assets/images/imagem9.png";
import { Link } from "react-router-dom";

export default function Gallery() {
    const [showNavCentred, setShowNavCentred] = useState(false);

    const imagesData = [
        {
            src: imagem1,
            title: 'Imagem 1',
            caption: 'primeira imagem.',
        },
        {
            src: imagem2,
            title: 'Imagem 2',
            caption: 'segunda imagem.',
        },
        {
            src: imagem3,
            title: 'Imagem 3',
            caption: 'terceira imagem.',
        },
        {
            src: imagem4,
            title: 'Imagem 4',
            caption: 'quarta imagem.',
        },
        {
            src: imagem5,
            title: 'Imagem 5',
            caption: 'quinta imagem.',
        },
        {
            src: imagem6,
            title: 'Imagem 6',
            caption: 'sexta imagem.',
        },
        {
            src: imagem7,
            title: 'Imagem 7',
            caption: 'sétima imagem.',
        },
        {
            src: imagem8,
            title: 'Imagem 8',
            caption: 'oitava imagem.',
        },
        {
            src: imagem9,
            title: 'Imagem 9',
            caption: 'nona imagem.',
        },
    ];

    return (
        <>
            <MDBContainer className="mb-5 gradient-form">
                <MDBRow className='container-sm'>
                    <MDBNavbar className="navbar" expand='lg' style={{ color: '#000', backgroundColor: '#ffffff' }}>
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
                                                <Link to="/Gallery" style={{ textDecoration: 'none' }}>
                                                    <MDBDropdownItem link>Galeria</MDBDropdownItem>
                                                </Link>
                                                <Link to="/EventsCalendary" style={{ textDecoration: 'none' }}>
                                                    <MDBDropdownItem link>Calendário de Eventos</MDBDropdownItem>
                                                </Link>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <div className='mx-auto'>
                                            <Link to="/Login" style={{ textDecoration: 'none', color: '#69A625' }} role='button'>
                                                <MDBBtn style={{ color: '#69A625' }} outline={true} className='mb-2 btn-outline-success'>
                                                    <MDBIcon fas icon="user" />Login
                                                </MDBBtn>
                                            </Link>
                                        </div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <Link to="/SignUp" style={{ textDecoration: 'none' }} role='button'>
                                            <MDBBtn className='btn-success' style={{ color: 'ECECEC', backgroundColor: '#69A625' }}>
                                                <MDBIcon far icon="user" />Cadastre-se
                                            </MDBBtn>
                                        </Link>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBRow>
            </MDBContainer>

            {/* Galeria de Imagens */}
            <MDBContainer className="mb-5">
                <h2 className="text-center mt-5 mb-3">Galeria de Imagens</h2>
                <div className="row">
                    {imagesData.map((image, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="gallery-item">
                                <img src={image.src} alt={image.title} className="img-fluid" />
                                <h4>{image.title}</h4>
                                <p>{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </MDBContainer>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{borderRadius: '16px', backgroundColor: '#ECECEC'}}>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado em nossas redes sociais:</span>
                    </div>
                    <div>
                        <Link to='https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </Link>
                        <Link to='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </Link>
                        <Link to='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </Link>
                        <Link to='https://www.instagram.com/usinaecocultural/' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </Link>
                        <Link to='https://www.youtube.com/@usinaecocultural' target="_blank" className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
                        </Link>
                    </div>
                </section>


                <section className='containerInfoSite m-12' style={{borderRadius: '16px', backgroundColor: '#ECECEC', paddingTop: 10 }}>
                    <MDBContainer className='text-center text-md-start mt-10'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon className="me"/>
                                    <u>Usina-EcoCultural</u>
                                </h6>
                                <p>
                                Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                                <p>
                                    Para saber mais, acesse nosso: <Link to="https://linktr.ee/usinaecocultural">Linktr.ee</Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Produtos da Loja</u></h6>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Roupas
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Canecas
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Livros
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Outros
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Links Úteis</u></h6>
                                <p>
                                    <Link to='/Donate' className='text-reset'>
                                        Apoie a Causa
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Configurações
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/Shop" className="text-reset">
                                        Loja
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/EventsCalendary" className="text-reset">
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
                <div className='text-center p-4 mt-5' style={{backgroundColor: '#69A625', borderRadius: '16px', color: '#ECECEC'}}>
                    © {new Date().getFullYear()} - Todos os Direitos Reservados
                </div>
            </MDBFooter>
        </>
    );
}