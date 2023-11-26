import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselItem
} from "mdb-react-ui-kit";
import abelha_usina from "./Assets/images/abelha.jpeg";
import banquete_usina from "./Assets/images/banquete.png";
import yoga_usina from "./Assets/images/yoga.png";
import abaixo_assinado_usina from "./Assets/images/abaixo_assinado_usina.png";
import usina_schedule from "./Assets/images/schedule.png";
import usina_parchment from "./Assets/images/parchment.png";
import usina_donate from "./Assets/images/donate.png";
import { Link } from "react-router-dom";
import { NavHome } from "./navbars/NavHome";
import { FooterMain } from "./footer/FooterMain";

export default function Home() {
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
                    className="btn btn-outline-success mb-5 btn-lg"
                    to="/Donate"
                    role="button"
                    style={{ color: "#69A625" }}
                >
                    APOIE A CAUSA!
                </Link>

                <MDBCarousel showIndicators showControls fade>
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
