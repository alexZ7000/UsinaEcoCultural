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

export default function Login() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
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
                                <MDBNavbarItem className="custom-center">
                                    <Link id="textNavBarPaginaInicial" to="/">Página Inicial</Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Doação</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
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
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>


                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">
                        <div className="text-center mb-7 my-5 ">
                            <p>Faça Login com:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="lg"/>
                                </MDBBtn>
                            </div>
                        </div>

                        <p>Faça login na sua conta</p>


                        <MDBInput wrapperClass='mb-4' label='Endereço de E-mail' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Faça login</MDBBtn>
                            <a className="text-muted" href="#!">Esqueceu sua senha?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Não tem uma conta?</p>
                            <MDBBtn outline className='mx-2' color='primary'>
                                Cadastrar
                            </MDBBtn>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' >
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='#'>
                        Todos os direitos reservados
                    </a>
                </div>
            </MDBFooter>
        </MDBContainer>
    );
}
