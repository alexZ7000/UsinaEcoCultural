import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import usina_faixa_do_futuro from "./Assets/images/faixa_do_futuro.jpeg";
import usina_caminhao_de_lixo from "./Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png";

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
    MDBFooter,
} from "mdb-react-ui-kit";
import icone_usina from "./Assets/images/usina_icon.png";
import instagram_logo from "./Assets/images/instagram_logo.png";

export default function History() {
    const [showNavCentred, setShowNavCentred] = useState(false);

    return (
        <>
            <MDBContainer className="mb-5 gradient-form">
                <MDBRow className="container-sm">
                    <MDBNavbar
                        className="navbar"
                        expand="lg"
                        style={{ color: "#000", backgroundColor: "#ffffff" }}
                    >
                        <MDBContainer fluid>
                            <MDBNavbarToggler
                                type="button"
                                data-target="#navbarCenteredExample"
                                aria-controls="navbarCenteredExample"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={() => setShowNavCentred(!showNavCentred)}
                            >
                                <MDBIcon icon="bars" fas />
                            </MDBNavbarToggler>
                            <MDBNavbarBrand href="#" className="ms-1">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <img src={icone_usina} width={100} alt="" />
                                </Link>
                            </MDBNavbarBrand>

                            <MDBCollapse
                                navbar
                                show={showNavCentred}
                                className="justify-content-center"
                            >
                                <MDBNavbarNav fullWidth={true}>
                                    <MDBNavbarItem className="mx-auto">
                                        <Link to="/" style={{ textDecoration: "None" }}>
                                            <MDBNavbarLink aria-current="page" href="#">
                                                Página Inicial
                                            </MDBNavbarLink>
                                        </Link>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-auto">
                                        <Link to="/Donate" style={{ textDecoration: "none" }}>
                                            <MDBNavbarLink>Doação</MDBNavbarLink>
                                        </Link>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem active className="mx-auto">
                                        <MDBDropdown>
                                            <MDBDropdownToggle tag="a" className="nav-link">
                                                Sobre nós
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <Link to="/History" style={{ textDecoration: "none" }}>
                                                    <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                                </Link>
                                                <Link to="/Shop" style={{ textDecoration: "none" }}>
                                                    <MDBDropdownItem link>Loja</MDBDropdownItem>
                                                </Link>
                                                <Link to="/Gallery" style={{ textDecoration: "none" }}>
                                                    <MDBDropdownItem link>
                                                        Galeria de Fotos
                                                    </MDBDropdownItem>
                                                </Link>
                                                <Link
                                                    to="/EventsCalendary"
                                                    style={{ textDecoration: "none" }}
                                                >
                                                    <MDBDropdownItem link>
                                                        Calendário de Eventos
                                                    </MDBDropdownItem>
                                                </Link>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <div className="mx-auto">
                                            <Link
                                                to="/Login"
                                                style={{ textDecoration: "none", color: "#69A625" }}
                                                role="button"
                                            >
                                                <MDBBtn
                                                    style={{ color: "#69A625" }}
                                                    outline={true}
                                                    className="mb-2 btn-outline-success"
                                                >
                                                    <MDBIcon fas icon="user" />
                                                    Login
                                                </MDBBtn>
                                            </Link>
                                        </div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <Link
                                            to="/SignUp"
                                            style={{ textDecoration: "none" }}
                                            role="button"
                                        >
                                            <MDBBtn
                                                className="btn-success"
                                                style={{ color: "ECECEC", backgroundColor: "#69A625" }}
                                            >
                                                <MDBIcon far icon="user" />
                                                Cadastre-se
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
                <MDBRow className="container-sm">
                    <div className="p-5 text-center bg-light mb-5">
                        <h1 className="mb-3">
                            <strong>NOSSA HISTÓRIA</strong>
                        </h1>
                        <img
                            src={usina_caminhao_de_lixo}
                            className="img-fluid"
                            alt="truckTrash"
                        />

                        <h1>
                            <strong>UM PASSADO PREOCUPANTE</strong>
                        </h1>

                        <h4 className="mb-3">
                            <strong className='border-bottom'>O Incenerador Vergueiro</strong>
                        </h4>

                        <div className='row mt-5 mb-1'>
                            <div className='col-md-5 mb-2 mx-auto border border-2  rounded-5 border-primary-subtle'>
                                <p className='mt-4'>
                                    <strong style={{fontSize: "1.2em"}} className='text-wrap text-justify text-left fs-5'>
                                        Em 1968, foi inaugurado o Incinerador Vergueiro, destinado
                                        inicialmente ao descarte de resíduos domésticos. No entanto, a
                                        partir de 1977, passou a receber também lixo hospitalar,
                                        resultando em uma queima que liberava fumaça e odor
                                        desagradáveis, afetando moradores em um raio de 10 km. Diante
                                        dessa situação, a comunidade local iniciou protestos para fechar
                                        o incinerador. Inicialmente, a prefeitura ignorou as demandas
                                        dos moradores, levando-os a adotar uma medida drástica: formaram
                                        uma barreira humana em frente ao incinerador, impedindo a
                                        entrada de caminhões para a queima.
                                    </strong>
                                </p>
                            </div>
                            <div className='col-md-5 mx-auto border border-2 rounded-5 border-primary-subtle'>
                                <p className='mt-4'>
                                    <strong style={{fontSize: "1.2em"}} className='text-wrap text-justify text-left fs-5'>
                                        Em seguida, um laudo das
                                        cinzas do incinerador confirmou a toxicidade da fumaça, contendo
                                        bacteriófagos, coliformes fecais, pseudômonas e substâncias
                                        cancerígenas. A explicação para isso residia na incapacidade dos
                                        fornos em atingir temperaturas suficientemente altas para
                                        queimar adequadamente o lixo hospitalar. Em dezembro de 2001, o
                                        incinerador realizou sua última queima, destruindo 2 toneladas
                                        de medicamentos vencidos de quimioterapia e 125 kg de maconha.
                                        No ano seguinte, em 2002, as atividades do incinerador foram
                                        oficialmente encerradas. Como símbolo da vitória da comunidade,
                                        balões coloridos de gás hélio foram liberados pela chaminé do
                                        incinerador.
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <h1 className="mt-5">
                            <strong className="border-bottom">UM FUTURO <strong className='text-success-emphasis'>VERDE</strong></strong>
                        </h1>
                        <img src={usina_faixa_do_futuro} alt="green_future" className='img-fluid rounded-4' />
                        <div className='row mt-5'>
                            <div className='col-md-5 mb-2 mx-auto border border-2 rounded-5 border-success-subtle'>
                                <p className="mt-4">
                                    <strong style={{ fontSize: "1.2em" }} >
                                        O Movimento Eco-Cultural está determinado a encerrar o capítulo
                                        de sofrimento associado a este local abandonado, iniciando uma
                                        nova narrativa que o transformará em um espaço seguro, agradável
                                        e ecologicamente responsável. Este ambiente revitalizado
                                        pretende tornar-se um verdadeiro refúgio para os residentes
                                        locais e visitantes, redefinindo a paisagem e a experiência
                                        turística na região, especialmente para aqueles que chegam da
                                        estação Santos Imigrantes. A Usina Eco-Cultural abraça uma
                                        variedade de atividades ao ar livre, incluindo yoga, teatro,
                                        skate, banquetes, entre outras.
                                    </strong>
                                </p>
                            </div>
                            <div className='col-md-5 mx-auto border border-2 rounded-5 border-success-subtle'>
                                <p className="mt-4">
                                    <strong style={{ fontSize: "1.2em" }} >
                                        O local que antes abrigava os
                                        fornos do incinerador será convertido em um Museu, oferecendo
                                        uma narrativa detalhada sobre a história passada do incinerador.
                                        A intenção é preservar os acontecimentos passados e criar
                                        consciência para as gerações futuras. A missão da Usina é
                                        proporcionar a cidadãos de bem mais uma opção em São Paulo para
                                        desfrutar o final de semana com a família, sem custos. Este
                                        projeto não apenas redefine o espaço, mas também promove a saúde
                                        e o bem-estar da comunidade, transformando-o em um local
                                        culturalmente enriquecedor e ecologicamente sustentável na
                                        cidade.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>

            <MDBFooter
                bgColor="light"
                className="text-center text-lg-start text-muted"
                style={{ borderRadius: "16px", backgroundColor: "#ECECEC" }}
            >
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Fique conectado em nossas redes sociais:</span>
                    </div>
                    <div>
                        <Link
                            to="https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                            target={"_blank"}
                            className="me-4 text-reset"
                        >
                            <MDBIcon fab icon="facebook" style={{ color: "darkblue" }} />
                        </Link>
                        <Link
                            to="https://www.instagram.com/usinaecocultural/"
                            target={"_blank"}
                            className="me-4 text-reset"
                        >
                            <img src={instagram_logo} alt="" width="16" className="mb-1" />
                        </Link>
                        <Link
                            to="https://www.youtube.com/@usinaecocultural"
                            target="_blank"
                            className="me-4 text-reset"
                        >
                            <MDBIcon fab icon="youtube" style={{ color: "red" }} />
                        </Link>
                    </div>
                </section>
                <section
                    className="containerInfoSite m-12"
                    style={{
                        borderRadius: "16px",
                        backgroundColor: "#ECECEC",
                        paddingTop: 10,
                    }}
                >
                    <MDBContainer className="text-center text-md-start mt-10">
                        <MDBRow className="mt-3">
                            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <MDBIcon className="me" />
                                    <u>Usina-EcoCultural</u>
                                </h6>
                                <p>
                                    <strong>
                                        Mobilização da comunidade para transformar o antigo
                                        Incinerador na Usina Eco-Cultural com ações de educação
                                        ambiental, arte e cultura.
                                    </strong>
                                </p>
                                <p>
                                    <strong>Para saber mais, acesse nosso:</strong>{" "}
                                    <Link to="https://linktr.ee/usinaecocultural" target="_blank">
                                        Linktr.ee
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <u>Produtos da Loja</u>
                                </h6>
                                <p>
                                    <MDBIcon fas icon="tshirt" />{" "}
                                    <Link to="/Shop" className="text-reset">
                                        Roupas
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="mug-hot" />{" "}
                                    <Link to="/Shop" className="text-reset">
                                        Canecas
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="book" />{" "}
                                    <Link to="/Shop" className="text-reset">
                                        Livros
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="shopping-bag" />{" "}
                                    <Link to="/Shop" className="text-reset">
                                        Outros
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <u>Links Úteis</u>
                                </h6>
                                <p>
                                    <MDBIcon fas icon="leaf" style={{ color: "green" }} />{" "}
                                    <Link to="/Donate" className="text-reset">
                                        Apoie a Causa
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="photo-video" />{" "}
                                    <Link to="/Gallery" className="text-reset">
                                        Galeria de Fotos
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="shopping-cart" />{" "}
                                    <Link to="/Shop" className="text-reset">
                                        Loja
                                    </Link>
                                </p>
                                <p>
                                    <MDBIcon fas icon="calendar-alt" />{" "}
                                    <Link to="/EventsCalendary" className="text-reset">
                                        Eventos
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <u>Contato</u>
                                </h6>
                                <p>
                                    <MDBIcon icon="home" className="me" />
                                    <i>
                                        {" "}
                                        Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo -
                                        SP, 04214-020
                                    </i>
                                    <br />
                                    Perto da estação Santos-Imigrantes (Linha Verde)
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me" />

                                    <strong> exemplo@email.com</strong>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me" /> (xx) xxxxx-xxxx
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div
                    className="text-center p-4 mt-5"
                    style={{
                        backgroundColor: "#69A625",
                        borderRadius: "16px",
                        color: "#ECECEC",
                    }}
                >
                    © {new Date().getFullYear()} - Todos os Direitos Reservados
                </div>
            </MDBFooter>
        </>
    );
}
