import React, { useState } from "react";
import { Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from "mdb-react-ui-kit";
import { FooterLogin } from "./footer/FooterLogin";
import { NavLogin } from "./navbars/NavLogin";
import { Button, Modal } from "react-bootstrap";

export default function SignUp() {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <>
            <NavLogin />
            <MDBContainer
                fluid
                className="d-flex align-items-center justify-content-center bg-image"
                style={{ backgroundImage: "" }}
            >
                <MDBCard style={{ maxWidth: "600px" }}>
                    <MDBCardBody>
                        <h2 className="text-uppercase text-center mb-5">
                            <strong>Crie sua Conta</strong>
                        </h2>
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Digite seu Nome"
                            size="lg"
                            id="name"
                            type="text"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Digite seu E-mail"
                            size="lg"
                            id="email"
                            type="email"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Digite sua Senha"
                            size="lg"
                            id="password"
                            type="password"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Repita sua Senha"
                            size="lg"
                            id="confirm-password"
                            type="password"
                        />
                        <div className="d-flex flex-row justify-content-center mb-4">
                            <MDBCheckbox name="flexCheck" id="flexCheckDefault" />
                            <p>
                                Eu concordo com os {" "}
                                <button className={"border-0 bg-white"} onClick={toggleModal}>
                                    <i>
                                        <u className={"text-primary"} style={{"cursor": "pointer"}}>Termos de Serviço</u>
                                    </i>
                                </button>
                            </p>
                        </div>
                        <Modal show={show} onHide={toggleModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Termos de Serviço</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Ao concordar com os termos de serviço de uma plataforma digital,
                                    o usuário se compromete a seguir as diretrizes e regulamentos
                                    estabelecidos pelo provedor de serviços.
                                    Esses termos funcionam como um contrato virtual entre o usuário
                                    e a plataforma, estabelecendo as condições para a utilização dos
                                    serviços oferecidos.

                                    Ao aceitar esses termos, o usuário reconhece e concorda com as
                                    regras que regem o uso da plataforma, o que inclui questões
                                    como privacidade, conduta online e responsabilidades legais.
                                    Essa concordância muitas vezes é expressa através de uma caixa
                                    de seleção ou botão específico durante o processo de registro
                                    ou instalação do aplicativo.
                                </p>
                                <ul>
                                    <li>
                                        Você não vai usar este site para fins ilegais ou maliciosos.
                                    </li>
                                    <li>
                                        Você não vai violar os direitos de propriedade intelectual de
                                        terceiros.
                                    </li>
                                    <li>
                                        Você não vai enviar ou transmitir vírus, malware ou outros tipos
                                        de código malicioso.
                                    </li>
                                    <li>
                                        Você não vai tentar acessar ou modificar dados ou funcionalidades
                                        que não sejam destinados a você.
                                    </li>
                                    <li>
                                        Você não vai interferir ou prejudicar o funcionamento normal deste
                                        site.
                                    </li>
                                </ul>
                                <p>
                                    Este site é fornecido "como está" e "como disponível", sem garantias
                                    de qualquer tipo, expressas ou implícitas. Nós não nos
                                    responsabilizamos por quaisquer danos ou prejuízos que possam
                                    resultar do uso ou da indisponibilidade deste site.
                                </p>
                                <p>
                                    Nós nos reservamos o direito de alterar ou encerrar este site a
                                    qualquer momento, sem aviso prévio. Nós também nos reservamos o
                                    direito de modificar estes termos de serviço a qualquer momento, sem
                                    aviso prévio. Você deve revisar estes termos periodicamente para
                                    verificar se há atualizações.
                                </p>
                                <p>
                                    Se você tiver alguma dúvida ou sugestão sobre estes termos de
                                    serviço, por favor, entre em contato conosco.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={toggleModal}>
                                    Fechar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <MDBBtn
                            className="w-100 btn-success gradient-custom-4"
                            size="lg"
                            style={{ backgroundColor: "#69A625", border: "none" }}
                        >
                            Registrar-se
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-3">
                <p className="mb-0 me-2">Já tem uma conta?</p>
                <Link to="/Login" role="button">
                    <MDBBtn
                        className="btn-success"
                        style={{ color: "#69A625", backgroundColor: "#FFF" }}
                    >
                        <MDBIcon far icon="user" style={{ color: "#69A625" }} />
                        Login
                    </MDBBtn>
                </Link>
            </div>
            <FooterLogin />
        </>
    );
};
