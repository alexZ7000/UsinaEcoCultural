import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCheckbox
} from "mdb-react-ui-kit";
import google_logo from "./Assets/images/google_logo.png";
import { FooterLogin } from "./footer/FooterLogin";
import { NavLogin } from "./navbars/NavLogin";

export default function Login() {

    const [valor, setValor] = useState("");
    const handleChange = (event: any) => {
        setValor(event.target.value);
    };

    return (
        <>
            <NavLogin />
            <MDBContainer
                fluid
                className="d-flex align-items-center justify-content-center bg-image mt-5"
                style={{ backgroundImage: "" }}
            >
                <MDBCard style={{ maxWidth: "600px" }}>
                    <MDBCardBody>
                        <h2 className="text-uppercase text-center mb-5">
                            <strong>Faça seu Login</strong>
                        </h2>
                        <div className="my-5 mx-auto">
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="mx-4"
                                style={{ color: "darkblue" }}
                            >
                                <MDBIcon fab icon="facebook" size="lg" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="mx-4"
                                style={{ color: "red" }}
                            >
                                <img src={google_logo} alt="das" width="21"></img>
                            </MDBBtn>
                        </div>
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Digite seu E-mail"
                            size="lg"
                            id="form2"
                            type="email"
                            onChange={handleChange}
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Digite sua Senha"
                            size="lg"
                            id="form3"
                            type="password"
                            onChange={handleChange}
                        />
                        <div className="d-flex flex-row justify-content-center mb-4">
                            <MDBCheckbox name="flexCheck" id="flexCheckDefault" />
                            <p>Lembrar meus dados para próximo login</p>
                        </div>
                        <MDBBtn
                            className="mb-4 w-100 btn-success gradient-custom-4 mx-auto"
                            size="lg"
                            style={{ backgroundColor: "#69A625", border: "none" }}
                        >
                            Login
                        </MDBBtn>
                        <div className="text-center pt-1 pb-1">
                            <Link className="text-primary" to="#!">
                                Esqueceu sua senha?
                            </Link>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-3">
                <p className="mb-0 me-2">Não tem uma conta?</p>
                <Link to="/SignUp" role="button">
                    <MDBBtn
                        className="btn-success"
                        style={{ color: "#69A625", backgroundColor: "#FFF" }}
                    >
                        <MDBIcon far icon="user" />
                        Cadastre-se
                    </MDBBtn>
                </Link>
            </div>
            <FooterLogin />
        </>
    );
};
