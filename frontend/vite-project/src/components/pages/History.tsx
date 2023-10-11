import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'; 
import usina_icon from './Assets/images/usina_icon.png';
import usina_faixa_do_futuro from './Assets/images/faixa_do_futuro.jpeg'
import usina_caminhao_de_lixo from './Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png'
import Home from './Home';
import Login from './Login'
import Shop from "./Shop";
import EventsCalendary from "./EventsCalendary";
import SignUp from "./SignUp";
import About from "./About"
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
import App from '../../App';

export default function History() {
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
                                    <MDBNavbarItem className="custom-center">
                                        <Link id="textNavBarPaginaInicial" to="/">Página Inicial</Link>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-auto">
                                        <MDBNavbarLink href="#">Doação</MDBNavbarLink>
                                    </MDBNavbarItem>
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

