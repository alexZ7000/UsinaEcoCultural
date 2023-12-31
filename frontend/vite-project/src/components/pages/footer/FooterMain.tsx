import {Link} from "react-router-dom";
import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import instagram_logo from "../Assets/images/instagram_logo.png";

export const FooterMain = () => {
    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted mt-5"
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
                                <MDBIcon icon="home" className="me" />{" "}
                                <i>
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
    );
};