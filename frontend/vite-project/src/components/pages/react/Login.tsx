import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'; 
import image from './Assets/images/usina_icon.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
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
    MDBFooter, MDBCard, MDBCardBody, MDBCheckbox
}
    from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";

export default function Login() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [valor, setValor] = useState("");
    const handleChange = (event: any) => {setValor(event.target.value)};

    return (
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
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image mt-5' style={{backgroundImage: ''}}>
                    <MDBCard style={{maxWidth: '600px'}}>
                        <MDBCardBody>
                            <h2 className="text-uppercase text-center mb-5">Faça seu Login</h2>
                            <div className='my-5 mx-auto'>
                                <MDBBtn tag='a' color='none' className='mx-4' style={{ color: 'darkblue' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-4' style={{ color: 'grey' }}>
                                    <MDBIcon fab icon='google' size="lg"/>
                                </MDBBtn>
                            </div>
                            <MDBInput wrapperClass='mb-4' label='Digite seu E-mail' size='lg' id='form2' type='email' onChange={handleChange}/>
                            <MDBInput wrapperClass='mb-4' label='Digite sua Senha' size='lg' id='form3' type='password' onChange={handleChange}/>

                            <p>{valor}</p> {/* Apenas para testar o valor do input */}
                            
                            <div className='d-flex flex-row justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault'/>
                                <p>Lembrar meus dados para próximo login</p>
                            </div>
                            <MDBBtn className='mb-4 w-100 btn-success gradient-custom-4 mx-auto' size='lg'>Login</MDBBtn>
                            <div className="text-center pt-1 pb-1">
                                <Link className="text-primary" to="#!">Esqueceu sua senha?</Link>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-3     ">
                    <p className="mb-0 me-2">Não tem uma conta?</p>
                    <Link to="/SignUp" className='btn btn-success' role='button'><MDBIcon far icon="user"/>Cadastre-se</Link>
                </div>
                <MDBFooter bgColor='light' className='mt-5 text-center text-lg-left'>
                    <div className='text-center p-4 mt-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.20)', borderRadius: '8px', color: '#000000'}}>
                        © {new Date().getFullYear()} Todos os Direitos Reservados
                    </div>
                </MDBFooter>
            </MDBRow>
        </MDBContainer>
    );
}
