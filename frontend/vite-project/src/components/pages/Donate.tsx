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
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
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
    const toggleDonationTextShow2 = () => setShow2(!show2);
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
                                    className="rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(10)}
                                >
                                    10 R$
                                </MDBBtn>
                                &nbsp;&nbsp;
                                <MDBBtn
                                    className="rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(25)}
                                >
                                    25 R$
                                </MDBBtn>
                                &nbsp;&nbsp;
                                <MDBBtn
                                    className="rounded-2 btn-success gradient-custom-4"
                                    onClick={() => handleDonationValue(50)}
                                >
                                    50 R$
                                </MDBBtn>
                                &nbsp;&nbsp;
                                <MDBBtn
                                    className="rounded-2 btn-success gradient-custom-4"
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
            <div className={"row"}>
            <MDBBtn
                tag="a"
                onClick={toggleDonationTextShow}
                className={"col-md-4 mx-auto mt-3"}
                style={{ color: "#FFF", backgroundColor: "#3A90C3", border: "none", marginBottom: "10px" }}
            >
                Porque é importante sua doação?
            </MDBBtn>
            <MDBCollapse show={show}>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Sua doação é muito importante para nós!</h4>
                            </div>
                            <p className="card-text mt-1">
                                Cada doação que recebemos não é apenas uma contribuição financeira,
                                mas sim um investimento no nosso futuro coletivo.
                                A Usina é mais do que um local é um epicentro de possibilidades.
                                Com a sua ajuda, queremos aprimorar esse espaço para que possamos
                                utilizá-lo de maneiras ainda mais incríveis e benéficas para todos.
                            </p>
                        </div>
                    </div>
                </div>
            </MDBCollapse>
            </div>
            <div className={"row"}>
            <MDBBtn
                tag="a"
                onClick={toggleDonationTextShow2}
                className={"col-md-4 mx-auto mt-5"}
                style={{ color: "#FFF", backgroundColor: "#3A90C3", border: "none", marginBottom: "10px" }}
            >
                Como sua doação nos ajuda?
            </MDBBtn>
            <MDBCollapse show={show2}>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Sua doação é muito importante para nós!</h4>
                            </div>
                            <p className="card-text mt-1">
                                <ol>
                                    <strong>Sustentabilidade Ambiental</strong>
                                    <p>
                                        Com a sua ajuda, implementaremos práticas sustentáveis,
                                        como energia renovável e gestão de resíduos,
                                        tornando a Usina um exemplo de responsabilidade ambiental.
                                    </p>
                                </ol>

                                <ol>
                                    <strong>Reutilização da área</strong>
                                    <p>Esta área poderá transformar a Usina em um espaço de convivência e aprendizado para a comunidade</p>
                                </ol>

                                <ol>
                                    <strong>Eventos Comunitários</strong>
                                    <p>
                                        O espaço renovado será palco de eventos comunitários regulares,
                                        como feiras locais, festivais e encontros culturais.
                                        Sua doação contribuirá para a criação de espaços adequados
                                        e atrativos para a realização desses eventos que unem a comunidade.
                                    </p>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </MDBCollapse>
            </div>
            <FooterMain/>
        </>
    );
};
