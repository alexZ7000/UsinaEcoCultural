import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn
} from "mdb-react-ui-kit";
import abelha_usina from "./Assets/images/abelha.jpeg";
import banquete_usina from "./Assets/images/banquete.png";
import yoga_usina from "./Assets/images/yoga.png";
import abaixo_assinado_usina from "./Assets/images/abaixo_assinado_usina.png";
import usina_schedule from "./Assets/images/schedule.png";
import usina_parchment from "./Assets/images/parchment.png";
import usina_donate from "./Assets/images/donate.png";
import img1 from "./Assets/images/parceiros/amazonia_passa_aqui_parceiro.png"
import img2 from "./Assets/images/parceiros/aurelio_nomura_parceiro.jpg"
import img3 from "./Assets/images/parceiros/banda_o_do_forro_parceiro.jpg"
import img4 from "./Assets/images/parceiros/banda_trio_alvorada_parceiro.png"
import img5 from "./Assets/images/parceiros/bar_do_trecao_parceiro.jpg"
import img6 from "./Assets/images/parceiros/bloco_feminista_parceiro.jpg"
import img7 from "./Assets/images/parceiros/brinco_da_marquesa_parceiro.png"
import img8 from "./Assets/images/parceiros/cades_parceiro.png"
import img9 from "./Assets/images/parceiros/cades_vila_mariana_parceiro.jpg"
import img10 from "./Assets/images/parceiros/carlos_giannazi_parceiro.jpg"
import img11 from "./Assets/images/parceiros/casa_das_caldeiras_parceiro.png"
import img12 from "./Assets/images/parceiros/celso_giannazi_parceiro.jpg"
import img13 from "./Assets/images/parceiros/chao_parceiro.png"
import img14 from "./Assets/images/parceiros/ciclocidade_parceiro.png"
import img15 from "./Assets/images/parceiros/cine_favela_parceiro.jpg"
import img16 from "./Assets/images/parceiros/ediane_maria_parceiro.jpg"
import img17 from "./Assets/images/parceiros/eduardo_suplicy_parceiro.jpg"
import img18 from "./Assets/images/parceiros/escola_da_cidade_parceiro.png"
import img19 from "./Assets/images/parceiros/escola_nacional_paulo_freire_parceiro.png"
import img20 from "./Assets/images/parceiros/etec_gv_parceiro.jpg"
import img21 from "./Assets/images/parceiros/fau_usp_parceiro.jpg"
import img22 from "./Assets/images/parceiros/fps_parceiro.png"
import img23 from "./Assets/images/parceiros/gepem_parceiro.png"
import img24 from "./Assets/images/parceiros/guilherme_cortez_parceiro.jpg"
import img25 from "./Assets/images/parceiros/instituto_de_engenharia.jpg"
import img26 from "./Assets/images/parceiros/instituto_maua_de_tecnologia_parceiro.png"
import img27 from "./Assets/images/parceiros/luana_alves_parceiro.jpg"
import img28 from "./Assets/images/parceiros/luciene_giannazi_parceiro.jpg"
import img29 from "./Assets/images/parceiros/luna_zarattini_parceiro.jpg"
import img30 from "./Assets/images/parceiros/marina_helou_parceiro.jpg"
import img31 from "./Assets/images/parceiros/missao_ambiental_parceria.jpg"
import img32 from "./Assets/images/parceiros/miuc_parceiro.png"
import img33 from "./Assets/images/parceiros/mst_parceiro.png"
import img34 from "./Assets/images/parceiros/mtst_parceiro.png"
import img35 from "./Assets/images/parceiros/muda_ipiranga_parceiro.jpg"
import img36 from "./Assets/images/parceiros/muda_mooca_parceiro.png"
import img37 from "./Assets/images/parceiros/museu_do_ipiranga_parceiro.png"
import img38 from "./Assets/images/parceiros/nabil_bonduki_parceiro.jpg"
import img39 from "./Assets/images/parceiros/nunes_peixeiro_parceiro.jpg"
import img40 from "./Assets/images/parceiros/portela_parceiro.jpg"
import img41 from "./Assets/images/parceiros/psol_parceiro.png"
import img42 from "./Assets/images/parceiros/pt_parceiro.png"
import img43 from "./Assets/images/parceiros/partido_verde_parceiro.jpg"
import img44 from "./Assets/images/parceiros/samia_bomfim_parceiro.jpg"
import img45 from "./Assets/images/parceiros/sao_camilo_parceiro.jpg"
import img46 from "./Assets/images/parceiros/silvia_ferrado_parceiro.jpeg"
import img47 from "./Assets/images/parceiros/soninha_francine_parceiro.jpg"
import img48 from "./Assets/images/parceiros/sos_abelhas_sem_ferrao_parceiro.jpg"
import img49 from "./Assets/images/parceiros/uscs.png"

import { Link } from "react-router-dom";
import { NavHome } from "./navbars/NavHome";
import { FooterMain } from "./footer/FooterMain";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Home() {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };
    const corDoBotao = hover ? '#69A625' : '';


    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <>
            <NavHome />
            <MDBContainer>
                <MDBRow className="mb-3 pt-4" style={{ position: "relative" }}>
                    <MDBCol md="6" className="d-flex align-items-center">
                        <img
                            className="float-start w-100"
                            src={abaixo_assinado_usina}
                            alt="ImagemAbaixoAssinado"
                            style={{
                                position: "relative",
                                zIndex: "1",
                                borderRadius: "16px",
                                width: "100%",
                            }}
                        />
                    </MDBCol>
                    <MDBCol md="6" className="d-flex align-items-center">
                        <div className="me-3 border border-success w-100 h-100 rounded-3 p-4">
                            <h2 className="mb-4 border-bottom text-center text-wrap fs-2">
                                <strong>AJUDE A USINA ECO-CULTURAL !</strong>
                            </h2>
                            <p className="mx-4 text-center text-wrap">
                                <strong>
                                    Bem-vindos à nossa petição online em prol da transformação da{" "}
                                    <i className="text-bg-light">Usina Eco-Cultural </i> em um
                                    vibrante espaço de lazer para a comunidade local. Estamos
                                    buscando o apoio de todos os residentes e interessados em
                                    criar uma mudança positiva em nossa região, revitalizando um
                                    importante patrimônio e promovendo o bem-estar de todos.
                                </strong>
                            </p>
                            <p className="text-black text-center text-wrap">
                                <strong>
                                    Aqui está o link para ajudar a nossa transformação da Usina em
                                    um local mais atrativo:{" "}
                                    <Link
                                        to="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/"
                                        target="_blank"
                                    >
                                        Abaixo Assinado
                                    </Link>
                                </strong>
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="px-3 text-center bg-light my-5 rounded-2">
                <h1 className="mb-3 pt-4">
                    <strong>Futuro Museu do Meio Ambiente!</strong>
                </h1>
                <h4 className="mb-3">ONG Destinada as causas ambientais</h4>
                <Link
                    className="btn btn-outline-success col-md-3 btn-lg"
                    to="/Donate"
                    role="button"
                    style={{ borderColor: "#69A625", backgroundColor: corDoBotao }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    APOIE A CAUSA!
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBBtn
                    className={"btn-success col-md-3 btn-lg border-0"}
                    style={{ backgroundColor: "#69A625" }}
                    onClick={toggleModal}
                >
                    Nossos Apoiadores
                </MDBBtn>
                <Modal show={show} onHide={toggleModal} className={"modal-full-height modal-lg"}>
                    <Modal.Header >
                        <Modal.Title>Nossos Apoiadores</Modal.Title>
                        <MDBBtn
                            outline={true}
                            className="btn-close"
                            color="danger"
                            onClick={toggleModal}
                        ></MDBBtn>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row justify-content-center"}>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img1} alt={"img1"} className={" img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img2} alt={"img2"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img3} alt={"img3"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img4} alt={"img4"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img5} alt={"img5"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img6} alt={"img6"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img7} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img8} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img9} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img10} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img11} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img12} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3 bg-black"}>
                                <img src={img13} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img14} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img15} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img16} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img17} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img18} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img19} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img20} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img21} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img22} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img23} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img24} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img25} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img26} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img27} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img28} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img29} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img30} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img31} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img32} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img33} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img34} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img35} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img36} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img37} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img38} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img39} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img40} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img41} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img42} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img43} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img44} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img45} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>

                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img46} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img47} alt={"img8"} className={"card-img img-fluid"}></img>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img48} alt={"img9"} className={"card-img img-fluid"}></img>
                            </div>
                            <div className={"col-md-3 card border-0 mb-3"}>
                                <img src={img49} alt={"img7"} className={"card-img img-fluid"}></img>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={toggleModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <MDBCarousel showIndicators showControls fade className={"mt-5"}>
                    <MDBCarouselItem
                        className="w-100 d-block rounded-3"
                        itemId={1}
                        src={abelha_usina}
                        alt="abelha_usina"
                    />
                    <MDBCarouselItem
                        className="w-100 d-block rounded-3"
                        itemId={2}
                        src={banquete_usina}
                        alt="banquete_usina"
                    />
                    <MDBCarouselItem
                        className="w-100 d-block rounded-3"
                        itemId={3}
                        src={yoga_usina}
                        alt="yoga_usina"
                    />
                </MDBCarousel>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <h4 className="mt-5 border-bottom border-primary">
                                Faça sua doação
                            </h4>
                            <button className="btn btn-outline-light">
                                <Link to="/Donate" style={{ textDecoration: "none" }}>
                                    <img
                                        className=""
                                        width={225}
                                        height={210}
                                        src={usina_donate}
                                        alt="usina_donate"
                                    />
                                </Link>
                            </button>
                        </div>
                        <div className="col-md-4 mb-2">
                            <h4 className="mt-5 border-bottom border-primary">
                                Conheça nossa história
                            </h4>
                            <button className="btn btn-outline-light">
                                <Link to="/History" style={{ textDecoration: "none" }}>
                                    <img
                                        className=""
                                        width={200}
                                        height={190}
                                        src={usina_parchment}
                                        alt="usina_parchment"
                                    />
                                </Link>
                            </button>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4 className="mt-5 border-bottom border-primary">
                                Veja nossos próximos eventos
                            </h4>
                            <button className="btn btn-outline-light">
                                <Link to="/EventsCalendary" style={{ textDecoration: "none" }}>
                                    <img
                                        className=""
                                        width={200}
                                        height={200}
                                        src={usina_schedule}
                                        alt="usina_calendario"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <div
                        className="my-5"
                        style={{ borderRadius: "16px", backgroundColor: "light" }}
                    >
                        <h1 className="text-center border-bottom mb-3">
                            Onde nos encontrar?
                        </h1>
                        <iframe
                            className="container rounded-10 border-2 border-light my-1"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.060978890611!2d-46.62206929643048!3d-23.596908939478432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bf8fec09847%3A0x21fe6ebe5482bc4e!2sUsina%20Eco-Cultural!5e0!3m2!1spt-BR!2sbr!4v1693825060460!5m2!1spt-BR!2sbr"
                            width="600"
                            height="400"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p className="text-center" style={{ color: "#3A90C3" }}>
                            Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP,
                            04214-020
                        </p>
                    </div>
                </div>
            </div>
            <FooterMain />
        </>
    );
};
