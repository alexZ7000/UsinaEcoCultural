import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn
} from "mdb-react-ui-kit";
import BoneUsina from "./Assets/images/BoneUsina.png";
import CadernoUsina from "./Assets/images/CadernoUsina.png";
import CanecaUsina from "./Assets/images/CanecaUsina.png";
import CamisetaUsina from "./Assets/images/CamisetaUsina.png";
import QuadroUsina from "./Assets/images/QuadroUsina.png";
import CanetaUsina from "./Assets/images/CanetaUsina.png";
import CalendarioUsina from "./Assets/images/CalendarioUsina.png";
import LivroUsina from "./Assets/images/LivroUsina.png";
import { Modal } from "react-bootstrap";
import { FooterMain } from "./footer/FooterMain";
import { NavAboutUs } from "./navbars/NavAboutUs";

interface Product {
    idProduto: number;
    name: string;
    description: string;
    price: number;
    opcoes1: string;
    opcoes2: string;
    opcoes3: string;
    opcoes4: string;
    imageLink: any;
}

const products: Product[] = [
    {
        idProduto: 1,
        name: "Camiseta da Usina",
        description: "Camiseta 100% Lã com a logo da Usina EcoCultural",
        price: 40,
        opcoes1: "Tamanho S",
        opcoes2: "Tamanho M",
        opcoes3: "Tamanho L",
        opcoes4: "Tamanho XL",
        imageLink: CamisetaUsina,
    },
    {
        idProduto: 2,
        name: "Caderno da Usina",
        description: "Cadernos escolares com a logo da Usina EcoCultural",
        price: 30,
        opcoes1: "Cor Preta",
        opcoes2: "Cor Verde",
        opcoes3: "Cor Branca",
        opcoes4: "Cor Amarela",
        imageLink: CadernoUsina,
    },
    {
        idProduto: 3,
        name: "Bone da Usina",
        description: "Bone preto da usina com a logo da Usina EcoCultural",
        price: 30,
        opcoes1: "Forma Pequena",
        opcoes2: "Forma Grande",
        opcoes3: "Aba reta Pequena",
        opcoes4: "Aba Reta Grande",
        imageLink: BoneUsina,
    },
    {
        idProduto: 4,
        name: "Caneca da Usina",
        description: "Canecas com a logo da Usina EcoCultural",
        price: 15,
        opcoes1: "Cor Vermelha",
        opcoes2: "Cor Azul",
        opcoes3: "Cor Amarela",
        opcoes4: "Cor Preta",
        imageLink: CanecaUsina,
    },
    {
        idProduto: 5,
        name: "Caneta da Usina",
        description: "Canetas com a logo da Usina EcoCultural",
        price: 5,
        opcoes1: "Tinta Vermelha",
        opcoes2: "Tinta Azul",
        opcoes3: "Tinta Verde",
        opcoes4: "Tinta Preta",
        imageLink: CanetaUsina,
    },
    {
        idProduto: 6,
        name: "Quadro da Usina",
        description: "Quadro com a paisagem da Usina EcoCultural",
        price: 50,
        opcoes1: "Paisagem paronâmica",
        opcoes2: "Paisagem frontal",
        opcoes3: "Desenho da Usina",
        opcoes4: "Logo da Usina EcoCultural",
        imageLink: QuadroUsina,
    },
    {
        idProduto: 7,
        name: "Livro da Usina",
        description: "Livros com a história da Usina EcoCultural",
        price: 20,
        opcoes1: "Capa Dura",
        opcoes2: "Capa Mole",
        opcoes3: "E-book",
        opcoes4: "Edição especial",
        imageLink: LivroUsina,
    },
    {
        idProduto: 8,
        name: "Calendário da Usina",
        description: "Calendário com a logo da Usina EcoCultural",
        price: 10,
        opcoes1: "Cor Vermelha",
        opcoes2: "Cor Azul",
        opcoes3: "Cor Verde",
        opcoes4: "Cor Preta",
        imageLink: CalendarioUsina,
    },
];

function renderProduct(products: Product) {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [l, setL] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const adicionarAoCarrinho = (product: Product) => {
        const novoProduto = { nome: product.name, preco: product.price };
        setCarrinho((prevCarrinho) => [...prevCarrinho, novoProduto]);
        setL((l) => l + 1);
    };

    return (
        <div
            className="card col-3 item-align-center ms-3 me-4 mb-5"
            style={{ width: "16rem" }}
        >
            <img
                src={products.imageLink}
                className="card-img-top item-align-center rounded-2"
                alt="Imagem do Produto"
                onClick={openModal}
                role="button"
            />
            {showModal && (
                <ImageModal
                    image={products.imageLink}
                    name={products.name}
                    onClose={closeModal}
                />
            )}
            <div className="card-body">
                <h5 className="card-title text-center">{products.name}</h5>
                <p className="card-text">{products.description}</p>
                <select
                    className="form-control btn-light active border-primary-subtle form-control-sm"
                    role="button"
                    style={{ backgroundColor: "#FFF" }}
                >
                    <option>{products.opcoes1}</option>
                    <option>{products.opcoes2}</option>
                    <option>{products.opcoes3}</option>
                    <option>{products.opcoes4}</option>
                </select>
                <h3 className="text-center my-3">R$ {products.price}</h3>
                <a
                    href="#"
                    className="btn btn-success"
                    onClick={() => adicionarAoCarrinho(products)}
                    style={{ color: "#FFF", backgroundColor: "#69A625", border: "none" }}
                >
                    Adicionar ao Carrinho
                </a>
            </div>
        </div>
    );
}

function ImageModal({
                        image,
                        name,
                        onClose,
                    }: {
    image: string;
    name: string;
    onClose: () => void;
}) {
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{name}</Modal.Title>
                <MDBBtn
                    outline={true}
                    className="btn-close"
                    color="danger"
                    onClick={onClose}
                ></MDBBtn>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={image}
                    alt="Imagem"
                    className="card-img-top item-align-center rounded-3 mx-auto"
                />
            </Modal.Body>
        </Modal>
    );
}

function CarrinhoDaLoja({
                            carrinho,
                            calcularTotal,
                        }: {
    carrinho: any[];
    calcularTotal: () => number;
}) {
    return (
        <div className="container container-fluid mt-4 p-3">
            <div className="row">
                <div className="col-12">
                    <h2>Seus Itens:</h2>
                    <ul>
                        {carrinho.map((product, index) => (
                            <li key={index}>
                                Produto: {product.name}, Preço: R$ {product.preco}
                            </li>
                        ))}
                    </ul>
                    <h3>O valor total foi de: R$ {calcularTotal()}</h3>
                    <a
                        href="#"
                        className="btn btn-success mt-3"
                        style={{
                            color: "#FFF",
                            backgroundColor: "#69A625",
                            border: "none",
                        }}
                    >
                        Continuar com o pagamento
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Loja() {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const calcularTotal = (product: Product) => {
        return carrinho.reduce((total, product) => total + product.price, 0);
    };

    return (
        <>
            <NavAboutUs />
            <div className="container container-fluid mt-4 p-3">
                <div className="row">
                    {products.map((product) => renderProduct(product))}
                    <CarrinhoDaLoja
                        carrinho={carrinho}
                        calcularTotal={calcularTotal as () => number}
                    />
                </div>
            </div>
            <div>
                <MDBBtn
                    color="success"
                    className="btn btn-danger btn-lg "
                    onClick={() => setCarrinho([])}
                >
                    Limpar Carrinho
                </MDBBtn>
            </div>
            <FooterMain />
        </>
    );
};
