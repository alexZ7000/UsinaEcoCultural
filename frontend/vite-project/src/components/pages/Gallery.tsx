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
import imagem5 from "./Assets/images/imagem5.png";
import imagem6 from "./Assets/images/imagem6.png";
import imagem7 from "./Assets/images/imagem7.png";
import imagem8 from "./Assets/images/imagem8.png";
import imagem9 from "./Assets/images/imagem9.png";
import { Modal } from "react-bootstrap";
import {FooterMain} from "./footer/FooterMain";
import {NavAboutUs} from "./navbars/NavAboutUs";

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
            src: imagem5,
            title: "Imagem 5",
            caption: "quinta imagem.",
        },
        {
            src: imagem6,
            title: "Imagem 6",
            caption: "sexta imagem.",
        },
        {
            src: imagem7,
            title: "Imagem 7",
            caption: "sétima imagem.",
        },
        {
            src: imagem8,
            title: "Imagem 8",
            caption: "oitava imagem.",
        },
        {
            src: imagem9,
            title: "Imagem 9",
            caption: "nona imagem.",
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
                        className="card-img-top item-align-center rounded-1 mx-auto"
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
                                    className="img-fluid  rounded-1 "
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
