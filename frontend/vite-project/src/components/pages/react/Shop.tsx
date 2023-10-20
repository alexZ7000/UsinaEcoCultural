import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/loja.css";
import {
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle, MDBFooter,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import icone_usina from "./Assets/images/usina_icon.png";

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

  function renderProduct(product: Product) {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [l, setL] = useState(0);
  
      const adicionarAoCarrinho = (product:Product)  => {
          const novoProduto = { nome: product.name , preco: product.price};
          setCarrinho(prevCarrinho => [...prevCarrinho, novoProduto]);
          setL(l => l + 1);
      };
  
    return (
      <div className="container container-fluid mt-4 p-3">
        <div className="row">
          <div className="card col-md-4" style={{ width: '18rem' }}>
            <img src={product.imageLink} className="card-img-top" alt="Imagem do Produto" />
            <div className="card-body">
              <h5 className="card-title text-center">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <select className="chinen">
                <option>chinen</option>
              </select>
              <p></p>
              <h3 className="text-center">R$ {product.price}</h3>
              <a href="#" className="btn btn-primary" onClick={() => adicionarAoCarrinho(product)}>
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
            <a href="xxxxxx.br" className="btn btn-success" >Continuar com o pagamento</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default function Loja() {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const calcularTotal = () => {
      return carrinho.reduce((total, produto) => total + produto.preco, 0);
    };
  
    return (
        <>
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
                            onClick={() => setShowNavCentred(!showNavCentred)}
                        >
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
                                <MDBNavbarItem className="mx-4">
                                    <div className='mx-auto'>
                                        <Link to="/Login">
                                            <a className='btn mb-2 btn btn-outline-success' href='' role='button'>
                                                <MDBIcon fas icon="user" />Login
                                            </a>
                                        </Link>
                                    </div>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <Link to="/SignUp"><a className='btn btn-success' href='' role='button'><MDBIcon far icon="user" /> Cadastre-se</a></Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBRow>
        </MDBContainer>
      <div className="mx-auto">
        {products.map((product) => renderProduct(product))}
        <CarrinhoDaLoja carrinho={carrinho} calcularTotal={calcularTotal} />
      </div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado em nossas redes sociais:</span>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </a>
                        <a href='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </a>
                        <a href='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </a>
                        <a href='https://www.instagram.com/usinaecocultural/' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </a>
                        <a href='https://www.youtube.com/@usinaecocultural' target="_blank" className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
                        </a>
                    </div>
                </section>


                <section className='containerInfoSite'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me"/>
                                    <u>Usina-EcoCultural</u>
                                </h6>
                                <p>
                                    Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                                <p>
                                    Para saber mais, acesse nosso:
                                    <a href="https://linktr.ee/usinaecocultural">Linktr.ee</a>
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Produtos da Loja</u></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Roupas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Canecas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Livros
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Outros
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Links Úteis</u></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Apoie a Causa
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Configurações
                                    </a>
                                </p>
                                <p>
                                    <Link to="/Shop" className="text-dark">
                                        Loja
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/History" className="text-dark">
                                        Eventos
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Contato</u></h6>
                                <p>
                                    <MDBIcon icon="home" className="me"/>
                                    <i>Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</i>
                                    <br/>
                                    Perto da estação Santos-Imigrantes (Linha Verde)
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me"/>
                                    <strong>usinaecoculturalnaooficial@gmail.com</strong>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me"/>(xx) xxxxx-xxxx
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div className='text-center p-4 mt-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © {new Date().getFullYear()} Todos os Direitos Reservados
                    <a className='text-reset fw-bold' href='#'>
                    </a>
                </div>
            </MDBFooter>
        </>
    );
  }