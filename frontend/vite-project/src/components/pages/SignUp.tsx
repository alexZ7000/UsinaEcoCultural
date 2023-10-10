import React, {useState} from 'react';
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
import image from "./Assets/images/usina_icon.png";

export default function SignUp() {
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
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: ''}}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Crie sua Conta</h2>
                    <MDBInput wrapperClass='mb-4' label='Digite seu Nome' size='lg' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='E-mail' size='lg' id='form2' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Senha' size='lg' id='form3' type='password'/>
                    <MDBInput wrapperClass='mb-4' label='Repita sua Senha' size='lg' id='form4' type='password'/>
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault'/>
                        <p>Eu concordo com os <a href="#"><i><u>Termos de Serviço</u></i></a></p>
                    </div>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Registrar-se</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>

        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' >
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='#'>
                    Todos os direitos reservados
                </a>
            </div>
        </MDBFooter>
        </>
    );
}
