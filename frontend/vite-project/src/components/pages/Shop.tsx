import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Store: React.FC = () => {
  return (
    <div className="container">
      <h1>Bem-vindo à nossa loja</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              className="card-img-top"
              src="xxxxxx"
              alt="Produto 1"
            />
            <div className="card-body">
              <h5 className="card-title">Carro</h5>
              <p className="card-text">Vruuuuuum.</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              className="card-img-top"
              src="xxxxxxx"
              alt="Geladeira"
            />
            <div className="card-body">
              <h5 className="card-title">Geladeira</h5>
              <p className="card-text">Geladeira Eletrolux.</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              className="card-img-top"
              src="xxx"
              alt="Produto 3"
            />
            <div className="card-body">
              <h5 className="card-title">Fogão 4 bocas</h5>
              <p className="card-text">Fire.</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              className="card-img-top"
              src="xxxxxxx"
              alt="Geladeira"
            />
            <div className="card-body">
              <h5 className="card-title">Glock</h5>
              <p className="card-text">hahaha.</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;