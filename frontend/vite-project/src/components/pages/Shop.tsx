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

function headerShop() {
    return
    <MDBContainer className="mb-5 gradient-form">
        <MDBRow className='container-sm'>
            <MDBNavbar className="navbar" expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarCenteredExample'
                            aria-controls='navbarCenteredExample'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick=() => setShowNavCentred(!showNavCentred)
                    </MDBContainer>
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                <MDBNavbarBrand href='#' className="ms-1">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img
                            src={icone_usina}
                            width={100}
                            alt=''
                        />
                    </Link>
                </MDBNavbarBrand>

                <MDBCollapse navbar show={showNavCentred} className="justify-content-center">
                    <MDBNavbarNav fullWidth={true}>
                        <div className="ms-5"></div>
                        <div className='ms-5'></div>
                        <div className='ms-5'></div>
                        <div className='ms-5'></div>
                        <div className='ms-5'></div>
                        <MDBNavbarItem className="mx-auto">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Página Inicial
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="mx-auto">
                            <Link to="/Donate" style={{ textDecoration: 'none' }}>
                                <MDBNavbarLink>Doação</MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="mx-auto">
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Sobre nós
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <Link to="/History" style={{ textDecoration: 'none' }}>
                                        <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                    </Link>
                                    <Link to="/Shop" style={{ textDecoration: 'none' }}>
                                        <MDBDropdownItem link>Loja</MDBDropdownItem>
                                    </Link>
                                    <Link to="/EventsCalendary" style={{ textDecoration: 'none' }}>
                                        <MDBDropdownItem link>Calendário de Eventos</MDBDropdownItem>
                                    </Link>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="ms-5">
                            <Link to="/Login"><a className='btn btn-outline-success ms-5' href='' role='button'><MDBIcon fas icon="user" /> Login</a></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="mx-4">
                            <Link to="/SignUp"><a className='btn btn-success' href='' role='button'><MDBIcon far icon="user" /> Cadastre-se</a></Link>
                        </MDBNavbarItem>
             
                    </MDBNavbarNav>

                </MDBCollapse>
    
                

            </MDBNavbar>

        </MDBRow>
    </MDBContainer>
};
function renderProduct(product: Product): React.FC {
        const [carrinho, setCarrinho] = useState<any[]>([]);
        const [l, setL] = useState(0);

        const adicionarAoCarrinho = (idProduto: number, tamanho: string, precoProduto: number,) => {
                const novoProduto = { id: idProduto, tamanho, preco: precoProduto };
                setCarrinho(prevCarrinho => [...prevCarrinho, novoProduto]);
                setL(l => l + 1); // Atualiza a quantidade de produtos (l)
        };

        const calcularTotal = () => {
            return carrinho.reduce((total, produto) => total + precoProduto, 0);
  };
        const productsContainer = document.getElementById('products-container');
        if (productsContainer) {
            productsContainer.innerHTML = products.map(renderProduct).join('');
        }
    return 
        <div class="container container-fluid mt-4  p-3">
            <div class="row"></div>
                <div class="card col-3" style="width: 18rem;">
                    <img src=${product.imageLink} class="card-img-top"></img>
                <div class="card-body">
                    <h5 class="card-title text-center">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p></p>
                    <p></p>
                    <select class="chinen">
                        <option>chinen</option>
                    </select>
                    <p></p>
                    <h3 class="text-center">R$ ${product.price}</h3>
                    <a href="#" class="btn btn-primary"onClick=() => adicionarAoCarrinho(${product.name}, ${product.price})>Adicionar ao Carrinho</a>
                </div>
            </div>
        </div>
    
function carrinhoDaLoja(){
    return
        console.log("SEUS ITENS: " + carrinho);
        console.log("O valor total foi de:  " + calcularTotal());
        <button class = "btn btn-success">Continuar com o pagamento</button>
}
 
    
      
};
function footerDaLoja() {
    return
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
             </div>
        <div>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f"/>
            </a>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter"/>
            </a>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="google"/>
            </a>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram"/>
            </a>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin"/>
            </a>
            <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="github"/>
            </a>
        </div>
    </section>

    <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                          <MDBIcon icon="gem" className="me"/>
                          Incinerador Usina-EcoCultural
                    </h6>
                    <p>
                    Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                    </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                            Angular
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            React
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Vue
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Laravel
                        </a>
                    </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                            Pricing
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Settings
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Orders
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Help
                        </a>
                    </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                        <MDBIcon icon="home" className="me"/>
                    <i>Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</i>
                    <br/>
                    Perto da estação Santos-Imigrantes (Linha Verde)
                    </p>
                    <p>
                        <MDBIcon icon="envelope" className="me"/>
                    <strong>ExemploEmailUsina@gmail.com</strong>
                    </p>
                    <p>
                        <MDBIcon icon="phone" className="me"/> + 01 234 567 89
                    </p>
                    <p>
                        <MDBIcon icon="print" className="me"/> + 01 234 567 89
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>

    <div className='textRedesSociais'>
        <p><strong>Redes Sociais:</strong></p>
    </div>

    <div className="threeSocialMediaBottomButtons">
        <button className="helpBottomButton">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZKMBmKBZjzmsZCbgkcnLqhfwRlkGVxCFtRnXrQjZlXvgWznxWmLPWlbxzxGPLsJFzLV" target="_blank">
                <img className="help" src="./src/components/pages/images/question.png" alt="question" />
                Tire suas dúvidas!
            </a>
        </button>
        <button className="socialMediaBottomButton">
            <a href="https://linktr.ee/usinaecocultural" target="_blank">
                <img className="socialMedia" src="./src/components/pages/images/social-media.png" alt="social" />
                Veja nossas Causas!
            </a>
        </button>
        <button className="instagramBottomButton">
            <a href="https://www.instagram.com/usinaecocultural/" target="_blank">
                <img className="instagramImage" src="./src/components/pages/images/instagram.png" alt="Instagram" />
                Siga Nosso Instagram!
            </a>
        </button>
    </div>
    <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
        </a>
    </div>
</MDBFooter></> 
}; 
