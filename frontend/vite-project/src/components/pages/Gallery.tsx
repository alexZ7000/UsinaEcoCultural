import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer
} from "mdb-react-ui-kit";
import abelha_usina from "./Assets/images/abelha.jpeg";
import banquete_usina from "./Assets/images/banquete.png";
import yoga_usina from "./Assets/images/yoga.png";
import usina_faixa_do_futuro from "./Assets/images/faixa_do_futuro.jpeg";
import cads_usina from "./Assets/images/cads_usina.jpg";
import cafe_da_manha_usina from "./Assets/images/cafe_da_manha_usina.jpeg";
import cantor_na_usina from "./Assets/images/cantor_na_usina.jpg";
import chamine_da_usina_preto_branco from "./Assets/images/chamine_da_usina_preto_branco.jpeg";
import chamine_usina from "./Assets/images/chamine_usina.jpg";
import comidinha_usina from "./Assets/images/comidinha_usina.jpeg";
import contando_historia_usina from "./Assets/images/contando_historia_usina.jpeg";
import crianca_pintando_usina from "./Assets/images/crianca_pintando_usina.jpg";
import danca_usina from "./Assets/images/danca_usina.png";
import discurso_diversao_usina from "./Assets/images/discurso_diversao_usina.jpg";
import discurso_diversao_usina1 from "./Assets/images/discurso_diversao_usina(1).jpg";
import discurso_diversao_usina2 from "./Assets/images/discurso_diversao_usina(2).png";
import faixa_pika_nova_usina from "./Assets/images/faixa_pika_nova_usina.jpg";
import feira_usina from "./Assets/images/feira_usina.jpg";
import foto_com_a_galera_usina from "./Assets/images/foto_com_a_galera_usina.jpeg";
import fsta_junina_usina from "./Assets/images/fsta_junina_usina.jpg";
import giz_usina from "./Assets/images/giz_usina.jpg";
import globo_na_usina from "./Assets/images/globo_na_usina.jpg";
import gral_unido_usina from "./Assets/images/gral_unido_usina.jpeg";
import marmita_usina from "./Assets/images/marmita_usina.jpg";
import palestra_usina from "./Assets/images/palestra_usina.jpg"
import palestra_usina1 from "./Assets/images/palestra_usina(1).jpg"
import panfleto_usina from "./Assets/images/panfleto_usina.jpg"
import reuniao_estudantes_usinas from "./Assets/images/reuniao_estudantes_usina.jpg"
import reuniao_usina from "./Assets/images/reuniao_usina(1).jpg"
import reuniao_usina1 from "./Assets/images/reuniao_usina(2).jpg"
import roda_usina from "./Assets/images/roda_usina.jpg"
import show_usina from "./Assets/images/show_usina.jpg"
import show_usina1 from "./Assets/images/show_usina(1).jpg"
import todos_unidos_usina from "./Assets/images/todos_unidos_usina.jpg"
import todos_unidos_usina1 from "./Assets/images/todos_unidos_usina(1).jpg"
import unidos_em_uma_nova_causa from "./Assets/images/unidos_em_uma_nova_causa_usina.jpg"
import vendinha_usina from "./Assets/images/vendinha_usina.jpg"
import yoga_usina1 from "./Assets/images/yoga_usina(1).jpg"
import { Modal } from "react-bootstrap";
import { FooterMain } from "./footer/FooterMain";
import { NavAboutUs } from "./navbars/NavAboutUs";

export default function Gallery() {

    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = ({ index }: { index: any }) => {
        setSelectedIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedIndex(null);
        setShowModal(false);
    };

    const imagesData = [
        {
            src: abelha_usina,
            title: "Evento cultural",
            caption: "primeira imagem.",
        },
        {
            src: banquete_usina,
            title: "Banquete na Usina",
            caption: "segunda imagem.",
        },
        {
            src: yoga_usina,
            title: "Yoga na Usina",
            caption: "terceira imagem.",
        },
        {
            src: usina_faixa_do_futuro,
            title: "Faixa do Futuro",
            caption: "quarta imagem.",
        },
        {
            src: cads_usina,
            title: "CADE Ipiranga",
            caption: "quinta imagem.",
        },
        {
            src: cafe_da_manha_usina,
            title: "Café da Manhã na Usina",
            caption: "sexta imagem.",
        },
        {
            src: cantor_na_usina,
            title: "Viva a Música na Usina",
            caption: "sétima imagem.",
        },
        {
            src: chamine_usina,
            title: "Chaminé da Usina",
            caption: "oitava imagem.",
        },
        {
            src: comidinha_usina,
            title: "Banquete na Usina",
            caption: "nona imagem.",
        },
        {
            src: contando_historia_usina,
            title: "Histórias na Usina",
            caption: "décima imagem.",
        },
        {
            src: crianca_pintando_usina,
            title: "Criança se divertindo pintando na Usina",
            caption: "décima primeira imagem.",
        },
        {
            src: danca_usina,
            title: "Dança na Usina",
            caption: "décima segunda imagem.",
        },
        {
            src: discurso_diversao_usina,
            title: "Discurso e diversão na Usina",
            caption: "décima terceira imagem.",
        },
        {
            src: discurso_diversao_usina1,
            title: "Discurso e diversão na Usina",
            caption: "décima quarta imagem.",
        },
        {
            src: discurso_diversao_usina2,
            title: "Discurso e diversão na Usina",
            caption: "décima quinta imagem.",
        },
        {
            src: faixa_pika_nova_usina,
            title: "Nova Usina, novos hábitos, novo mundo",
            caption: "décima oitava imagem.",
        },
        {
            src: feira_usina,
            title: "Feira na Usina",
            caption: "décima nona imagem.",
        },
        {
            src: foto_com_a_galera_usina,
            title: "Foto com todos na Usina",
            caption: "vigésima imagem.",
        },
        {
            src: fsta_junina_usina,
            title: "Festa Junina na Usina",
            caption: "vigésima primeira imagem.",
        },
        {
            src: giz_usina,
            title: "Criança brincando com giz na Usina",
            caption: "vigésima segunda imagem.",
        },
        {
            src: globo_na_usina,
            title: "Globo na Usina",
            caption: "vigésima terceira imagem.",
        },
        {
            src: gral_unido_usina,
            title: "União na Usina",
            caption: "vigésima quarta imagem.",
        },
        {
            src: marmita_usina,
            title: "Marmita na Usina",
            caption: "vigésima quinta imagem.",
        },
        {
            src: palestra_usina,
            title: "Palestra na Usina",
            caption: "vigésima oitava imagem.",
        },
        {
            src: palestra_usina1,
            title: "Palestra na Usina",
            caption: "vigésima nona imagem.",
        },
        {
            src: panfleto_usina,
            title: "Panfleto na Usina",
            caption: "trigésima imagem.",
        },
        {
            src: reuniao_estudantes_usinas,
            title: "Reunião com os Estudantes do IMT na Usina",
            caption: "trigésima primeira imagem.",
        },
        {
            src: reuniao_usina,
            title: "Reunião na Usina",
            caption: "trigésima segunda imagem.",
        },
        {
            src: reuniao_usina1,
            title: "Reunião na Usina",
            caption: "trigésima terceira imagem.",
        },
        {
            src: roda_usina,
            title: "Roda de conversa na Usina",
            caption: "trigésima quarta imagem.",
        },
        {
            src: show_usina,
            title: "Show na Usina",
            caption: "trigésima quinta imagem.",
        },
        {
            src: show_usina1,
            title: "Show na Usina",
            caption: "trigésima sexta imagem.",
        },
        {
            src: todos_unidos_usina,
            title: "Todos unidos na Usina",
            caption: "trigésima sétima imagem.",
        },
        {
            src: todos_unidos_usina1,
            title: "Todos unidos na Usina",
            caption: "trigésima oitava imagem.",
        },
        {
            src: unidos_em_uma_nova_causa,
            title: "Unidose em uma nova causa na Usina",
            caption: "trigésima nona imagem.",
        },
        {
            src: vendinha_usina,
            title: "Vendinha na Usina",
            caption: "quadragésima imagem.",
        },
        {
            src: yoga_usina1,
            title: "Yoga na Usina",
            caption: "quadragésima primeira imagem.",
        },
        {
            src: chamine_da_usina_preto_branco,
            title: "Chaminé da Usina em preto e branco",
            caption: "quadragésima segunda imagem.",
        },
    ];

    function ImageModal({
                            image,
                            title,
                            caption,
                            onClose,
                        }: {
        image: string;
        title: string;
        caption: string;
        onClose: () => void;
    }) {
        return (
            <Modal show={true} onHide={onClose} className="modal-xl mx-auto">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <MDBBtn
                        className="close ms-auto"
                        outline
                        color="danger"
                        onClick={onClose}
                    >
                        &times;
                    </MDBBtn>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={image}
                        alt="Imagem"
                        className="card-img-top img-fluid item-align-center rounded-1 mx-auto"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <p className={"me-auto"}>{caption}</p>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <NavAboutUs />
            <MDBContainer className="mb-5">
                <h2 className="text-center mt-5 mb-3">Galeria de Imagens</h2>
                <div className="row">
                    {imagesData.map((image, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="gallery-item">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    style={{
                                        minHeight: "20rem",
                                        maxHeight: "20rem",
                                        minWidth: "23rem",
                                        maxWidth: "23rem"
                                }}
                                    className="img-fluid  rounded-1"
                                    onClick={() => openModal({ index: index })}
                                    role="button"
                                />
                                {showModal && selectedIndex === index && (
                                    <ImageModal
                                        image={image.src}
                                        caption={image.caption}
                                        title={image.title}
                                        onClose={closeModal}
                                    />
                                )}
                                <h4>{image.title}</h4>
                                <p>{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </MDBContainer>
            <FooterMain />
        </>
    );
};
