import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'; 
import usina_icon from './Assets/images/usina_icon.png';
import usina_faixa_do_futuro from './Assets/images/faixa_do_futuro.jpeg'
import usina_caminhao_de_lixo from './Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png'
import Home from './Home';
import Login from './Login'
import Shop from "./Shop";
import EventsCalendary from "./EventsCalendary";
import SignUp from "./SignUp";
import About from "./About"
import Card from 'react-bootstrap/Card';
import 'frontend\vite-project\src\loja.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas
import {
    MDBContainer,
    MDBBtn,
    MDBIcon,
    MDBInput,
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
    MDBFooter
};
interface Product {
    idProduto: number;
    name: string;
    description: string;
    price: number;
    imageLink: string;
  }
  
  const products: Product[] = [
    {
            idProduto: 1,
            name: 'Camiseta do Chinen',
            description: 'E do Mateus Yudi Chinen Oliveira',
            price: 700,
            imageLink: 'chinen.png'
    },
    {
            idProduto: 2,
            name: 'Shortes do Chinen',
            description: 'Shortes do Mateus Yudi Chinen Oliveira',
            price: 700,
            imageLink: 'chinen4.png'
    },
    {
            idProduto: 3,
            name: 'Bone do Chinen',
            description: 'Bone do Mateus Yudi Chinen Oliveira',
            price: 300,
            imageLink:'chinen7.png'
    },
    
  ];

  function cardProduto(product: Product) {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [l, setL] = useState(0);
  
    const adicionarAoCarrinho = (nomeProduto: string, precoProduto: number) => {
      const novoProduto = { nome: nomeProduto, preco: precoProduto };
      setCarrinho(prevCarrinho => [...prevCarrinho, novoProduto]);
      setL(l => l + 1);
    };
  
    return (
      <div class="container container-fluid mt-4 p-3">
        <div class="row">
          <div class="card col-3" style={{ width: '18rem' }}>
            <img src={product.imageLink} class="card-img-top" alt="Imagem do Produto" />
            <div class="card-body">
              <h5 class="card-title text-center">{product.name}</h5>
              <p class="card-text">{product.description}</p>
              <select class="chinen">
                <option>chinen</option>
              </select>
              <p></p>
              <h3 class="text-center">R$ {product.price}</h3>
              <a href="#" class="btn btn-primary" onClick={() => adicionarAoCarrinho(product.name, product.price)}>
                Adicionar ao Carrinho
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function CarrinhoDaLoja({ carrinho, calcularTotal }: { carrinho: any[]; calcularTotal: () => number }) {
    return (
      <div class="container container-fluid mt-4 p-3">
        <div class="row">
          <div class="col-12">
            <h2>Seus Itens:</h2>
            <ul>
              {carrinho.map((item, index) => (
                <li key={index}>
                  Produto: {item.nome}, Preço: R$ {item.preco}
                </li>
              ))}
            </ul>
            <h3>O valor total foi de: R$ {calcularTotal()}</h3>
            <button class="btn btn-success">Continuar com o pagamento</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default function Loja() {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const calcularTotal = () => {
      return carrinho.reduce((total, produto) => total + produto.preco, 0);
    };
  
    return (
      <div>
        {products.map((product) => renderProduct(product))}
        <CarrinhoDaLoja carrinho={carrinho} calcularTotal={calcularTotal} />
      </div>
    );
  }