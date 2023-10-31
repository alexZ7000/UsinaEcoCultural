import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
    MDBRow,
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
} from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";

export default function SignUp() {
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
                            <MDBCollapse navbar show={showNavCentred} className="justify-content-center my-4">
                                <MDBNavbarNav fullWidth={false}>
                                    <MDBNavbarItem className="mx-2">
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
                                    <MDBNavbarItem className="mx-2">
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
                                    <div className="me-5"></div>
                                    <div className="me-5"></div>
                                    <div className="me-5"></div>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: ''}}>
                <MDBCard style={{maxWidth: '600px'}}>
                    <MDBCardBody>
                        <h2 className="text-uppercase text-center mb-5">Crie sua Conta</h2>
                        <MDBInput wrapperClass='mb-4' label='Digite seu Nome' size='lg' id='form1' type='text'/>
                        <MDBInput wrapperClass='mb-4' label='Digite seu E-mail' size='lg' id='form2' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Digite sua Senha' size='lg' id='form3' type='password'/>
                        <MDBInput wrapperClass='mb-4' label='Repita sua Senha' size='lg' id='form4' type='password'/>
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault'/>
                            <p>Eu concordo com os <Link to="#"><i><u>Termos de Serviço</u></i></Link></p>
                        </div>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4 btn-success mx-auto' size='lg'>Registrar-se</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-3     ">
                <p className="mb-0 me-2">Já tem uma conta?</p>
                <Link to="/Login" style={{ textDecoration: 'none' }} role='button'><MDBBtn outline={true} className='btn-outline-success'><MDBIcon far icon="user"/>Login</MDBBtn></Link>
            </div>
            <div className='text-center p-4 mt-5' style={{backgroundColor: '#69A625', borderRadius: '16px', color: '#ECECEC'}}>
                © {new Date().getFullYear()} Todos os Direitos Reservados
            </div>
        </>
    );
}
