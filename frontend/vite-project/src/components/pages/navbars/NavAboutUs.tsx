import {
    MDBBtn,
    MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import icone_usina from "../Assets/images/usina_icon.png";
import React, {useState} from "react";

export const NavAboutUs = () => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <MDBContainer className="mb-5 gradient-form">
            <MDBRow className="container-sm">
                <MDBNavbar
                    className="navbar"
                    expand="lg"
                    style={{ color: "#000", backgroundColor: "#ffffff" }}
                >
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type="button"
                            data-target="#navbarCenteredExample"
                            aria-controls="navbarCenteredExample"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShowNavCentred(!showNavCentred)}
                        >
                            <MDBIcon icon="bars" fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href="#" className="ms-1">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <img src={icone_usina} width={100} alt="" />
                            </Link>
                        </MDBNavbarBrand>

                        <MDBCollapse
                            navbar
                            show={showNavCentred}
                            className="justify-content-center"
                        >
                            <MDBNavbarNav fullWidth={true}>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <MDBNavbarLink aria-current="page" href="#">
                                            Página Inicial
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/Donate" style={{ textDecoration: "none" }}>
                                        <MDBNavbarLink>Doação</MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem active className="mx-auto">
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag="a" className="nav-link">
                                            Sobre nós
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <Link to="/History" style={{ textDecoration: "none" }}>
                                                <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                            </Link>
                                            <Link to="/Shop" style={{ textDecoration: "none" }}>
                                                <MDBDropdownItem link>Loja</MDBDropdownItem>
                                            </Link>
                                            <Link to="/Gallery" style={{ textDecoration: "none" }}>
                                                <MDBDropdownItem link>
                                                    Galeria de Fotos
                                                </MDBDropdownItem>
                                            </Link>
                                            <Link
                                                to="/EventsCalendary"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <MDBDropdownItem link>
                                                    Calendário de Eventos
                                                </MDBDropdownItem>
                                            </Link>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <div className="mx-auto">
                                        <Link
                                            to="/Login"
                                            style={{ textDecoration: "none", color: "#69A625" }}
                                            role="button"
                                        >
                                            <MDBBtn
                                                style={{ color: "#69A625" }}
                                                outline={true}
                                                className="mb-2 btn-outline-success"
                                            >
                                                <MDBIcon fas icon="user" />
                                                Login
                                            </MDBBtn>
                                        </Link>
                                    </div>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <Link
                                        to="/SignUp"
                                        style={{ textDecoration: "none" }}
                                        role="button"
                                    >
                                        <MDBBtn
                                            className="btn-success"
                                            style={{
                                                color: "ECECEC",
                                                backgroundColor: "#69A625",
                                                border: "none",
                                            }}
                                        >
                                            <MDBIcon far icon="user" />
                                            Cadastre-se
                                        </MDBBtn>
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBRow>
        </MDBContainer>
    );
}