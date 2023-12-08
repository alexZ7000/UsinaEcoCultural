import {
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import icone_usina from "../Assets/images/usina_icon.png";
import React, { useState } from "react";

export const NavLogin = () => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    return (
        <MDBContainer className="mb-5 gradient-form">
            <MDBRow className="container-sm">
                <MDBNavbar
                    className="navbar"
                    expand="lg"
                    style={{ backgroundColor: "FFF" }}
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
                            className="justify-content-center my-4"
                        >
                            <MDBNavbarNav fullWidth={false}>
                                <MDBNavbarItem className="mx-2">
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
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/News" style={{ textDecoration: "none" }}>
                                        <MDBNavbarLink>Notícias</MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-2">
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
                                            <Link
                                                to="/EventsCalendary"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <MDBDropdownItem link>
                                                    Eventos
                                                </MDBDropdownItem>
                                            </Link>
                                            <Link to="/Gallery" style={{ textDecoration: "none" }}>
                                                <MDBDropdownItem link>
                                                    Galeria de Fotos
                                                </MDBDropdownItem>
                                            </Link>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <div className="me-5"></div>
                                <div className="me-5"></div>
                                <div className="me-5"></div>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBRow>
        </MDBContainer>
    );
};