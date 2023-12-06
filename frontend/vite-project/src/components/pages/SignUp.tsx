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
import {FooterLogin} from "./footer/FooterLogin";
import {NavLogin} from "./navbars/NavLogin";

export default function SignUp() {
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
                                Eu concordo com os{" "}
                                <Link to="/ServiceTerm">
                                    <i>
                                        <u>Termos de Serviço</u>
                                    </i>
                                </Link>
                            </p>
                        </div>
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
