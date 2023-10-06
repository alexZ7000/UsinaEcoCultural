import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'; //import para linkar as páginas - não usado
import usina_icon from './Assets/images/usina_icon.png';
import usina_faixa_do_futuro from './Assets/images/faixa_do_futuro.jpeg'
import usina_caminhao_de_lixo from './Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png'
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

export default function History() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <>
        <MDBContainer className="my-5 gradient-form">
            <MDBRow className='container-sm'>
                <MDBNavbar expand='lg' light bgColor='light'>
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
                                src={usina_icon}
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
        <MDBContainer className="my-5 gradient-form">
             <MDBRow className='container-sm'>
                <div className='p-5 text-center bg-light mb-5'>
                    <h1 className='mb-3'>NOSSA HISTÓRIA</h1>
                    <h4 className='mb-3'>O Incenerador Vergueiro</h4>
                    <img src={usina_caminhao_de_lixo} alt="truckTrash"/>

                    <h1>Um Passado Preocupante</h1>
                    <p>
                        Em 1968 o Incinerador Vergueiro foi inaugurado, inicialmente recebendo somente lixo doméstico,
                        mas a partir de 1977 começou a receber lixo hospitalar também,
                        e a queima desse lixo causava um odor horrível e fumaça não só para os moradores da região,
                        já que a fumaça atingia um raio de 10km.
                        Com isso os moradores da região começaram a fazer protestos para fechar o Inicinerador,
                        inicialmente a prefeitura não deu ouvidos, então os moradores tomaram uma medida drástica,
                        fizeram um protesto em forma de barreira humana em frente ao incinerador,
                        impedindo a entrada de caminhões para a queima,e após isso um laudo das cinzas do incinerador foi feito
                        e foi constatato que a fumaça era realmente tóxica, possuindo bacteriófagos, coliformes fecais,
                        pseudômonas e substâncias cancerígenas, e a explicação para isso se deve ao fato de que os fornos não conseguiam atingir temperaturas
                        altas o suficientes queimar o lixo hospitalar. E em dezembro de 2001 o Incinerador faz sua última queima, queimando 2 toneladas de
                        medicamentos vencidos de quimioterapia e 125 kg de maconha. Em 2002 as atividades do incinerador é oficialmente encerrada, foram soltos
                        milhares de balões coloridos de gás hélio por sua chaminé como símbolo de vitória da comunidade.
                    </p>
                    <h1 className="mt-5" >Um Futuro Verde</h1>
                    <MDBIcon className="greenFuture">
                        <img  src={usina_faixa_do_futuro} alt="green_future"/>
                    </MDBIcon>
                    <p className="mt-5">O Movimento Eco-Cultural quer acabar com essa história de sofrimento, e escrever um novo capítulo,
                        transformando esse lugar abandonado em um lugar seguro, divertido e ecológico, um verdadeiro espaço
                        pra pessoas da comunidade e pessoas de fora poderem relaxar, seria um ponto turístico, especialmente quem
                        vem da estação Santos Imigrantes, transformando o ambiente e a vista da região. A Usina Eco-Cultural conta com
                        atividades ao ar livre, como: yoga, teatro, skate, banquetes e etc... O local aonde estão os fornos da Usina
                        será transformado em um Museu, e lá será contada toda a história do incinerador com detalhes.O objetivo da Usina é fazer você cidadão
                        de bem, tenha mais um lugar em São Paulo para passar o final de semana com a família, e o melhor de tudo, sem precisar pagar NADA!</p>

                </div>
             </MDBRow>
        </MDBContainer>


        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
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
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github"/>
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me"/>
                                    Incinerador Usina-EcoCultural
                                </h6>
                                <p>
                                    Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me"/>
                                    <i>Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</i>
                                    <br/>
                                    Perto da estação Santos-Imigrantes (Linha Verde)
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me"/>
                                    <strong>ExemploEmailUsina@gmail.com</strong>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me"/> + 01 234 567 89
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me"/> + 01 234 567 89
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

