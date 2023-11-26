import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBCollapse,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalTitle,
    MDBModalHeader,
    MDBModalDialog,
    MDBModalContent,
    MDBInput,
} from "mdb-react-ui-kit";
import exemplo_de_codigo_qr from "./Assets/images/exemplo_de_codigo_qr.png";
import pix_logo from "./Assets/images/pix_logo.png";
import {FooterMain} from "./footer/FooterMain";
import {NavDonate} from "./navbars/NavDonate";

export default function Home() {
    const [show, setShow] = useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const [valorDoacao, setValorDoacao] = useState(0);

    const toggleModalShow = () => {
        setBasicModal(!basicModal);
        const input = document.getElementById(
            "valorDoacaoInput"
        ) as HTMLInputElement | null;
        if (input) {
            input.value = "";
            setValorDoacao(0);
        }
    };
    const toggleDonationTextShow = () => setShow(!show);
    const [showOtherCamp, setOtherCamp] = useState(false);
    const handleDonationValue = (valor: React.SetStateAction<number>) => {
        setValorDoacao(valor);
        if (valor === 0) {
            setOtherCamp(true);
        } else {
            setOtherCamp(false);
        }
    };
    const renderModal = () => {
        return (
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Exemplo de Doação via Pix</MDBModalTitle>
                            <MDBBtn
                                outline={true}
                                className="btn-close"
                                color="danger"
                                onClick={toggleModalShow}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {showOtherCamp ? (
                                <>
                                    <MDBInput
                                        className="mb-4"
                                        id="valorDoacaoInput"
                                        label="Digite o valor desejado"
                                        onChange={(e) => setValorDoacao(Number(e.target.value))}
                                    />
                                    <h2>Doação de: {valorDoacao} R$</h2>
                                </>
                            ) : (
                                <h2>Doação de: {valorDoacao} R$</h2>
                            )}
                            <img
                                className="card-img-top item-align-center mx-auto"
                                src={exemplo_de_codigo_qr}
                                alt="exemplo_de_qr_code"
                            ></img>
                            <img src={pix_logo} alt="pix_logo" className="w-25"></img>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        );
    };

    return (
        <>
            <NavDonate/>
            { renderModal() }
            <div className="container-sm">
                <div className="row">
                    <div className="col-md-6 mb-4 mx-auto">
                        <div className="card">
                            <h1 className="card-title">
                                <strong>Doação via PIX</strong>
                            </h1>
                            <p className="card-text">
                                Escolha o valor que deseja doar ao movimento
                            </p>
                            <div>
                                <MDBBtn
                                    className="me-2 rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(10)}
                                >
                                    10 R$
                                </MDBBtn>
                                <MDBBtn
                                    className="me-2 rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(25)}
                                >
                                    25 R$
                                </MDBBtn>
                                <MDBBtn
                                    className="me-2 rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(50)}
                                >
                                    50 R$
                                </MDBBtn>
                                <MDBBtn
                                    className="me-2 rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(0)}
                                >
                                    Outro
                                </MDBBtn>
                            </div>
                            <MDBBtn
                                className="mt-5 btn-success gradient-custom-4"
                                style={{
                                    color: "#FFF",
                                    backgroundColor: "#69A625",
                                    border: "none",
                                }}
                                onClick={toggleModalShow}
                            >
                                CONFIRMAR
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <MDBBtn
                tag="a"
                onClick={toggleDonationTextShow}
                style={{ color: "#FFF", backgroundColor: "#3A90C3", border: "none" }}
            >
                O que faremos com sua doação?
            </MDBBtn>
            <MDBCollapse show={show}>
                <div className="row">
                    <div className="col-md-6 mx-auto mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Sua doação é muito importante para nós!</h4>
                                </div>
                                <p className="card-text mt-1">
                                    Com sua doação o movimento Usina Eco-Cultural poderá continuar
                                    com suas atividades de educação ambiental, arte e cultura.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBCollapse>
            <FooterMain />
        </>
    );
};
