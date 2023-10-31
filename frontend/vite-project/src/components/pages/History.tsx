import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import usina_faixa_do_futuro from './Assets/images/faixa_do_futuro.jpeg'
import usina_caminhao_de_lixo from './Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png'

import {
    MDBContainer,
    MDBBtn,
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
} from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";

export default function History() {
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
                                            <Link to="/Login" style={{ textDecoration: 'none' }} role='button'>
                                                <MDBBtn outline={true} className='mb-2 btn-outline-success'>
                                                    <MDBIcon fas icon="user"/>Login
                                                </MDBBtn>
                                            </Link>
                                        </div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <Link to="/SignUp" style={{ textDecoration: 'none' }} role='button'>
                                            <MDBBtn className='btn-success'>
                                                <MDBIcon far icon="user"/>Cadastre-se
                                            </MDBBtn>
                                        </Link>
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
                            <img src={usina_caminhao_de_lixo} className="img-fluid" alt="truckTrash"/>

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


                    <section className='containerInfoSite m-12' style={{borderRadius: '16px', backgroundColor: '#ECECEC'}}>
                        <MDBContainer className='text-center text-md-start mt-10'>
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
                                        <Link to='#!' className='text-reset'>
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
                                        <Link to="/History" className="text-reset">
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
                        © {new Date().getFullYear()} Todos os Direitos Reservados
                    </div>
                </MDBFooter>
        </>
    );
}

