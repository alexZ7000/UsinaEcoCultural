import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBRipple,
    MDBRow
} from "mdb-react-ui-kit";
import { NavNews } from "./navbars/NavNews"
import { FooterMain } from "./footer/FooterMain";

export default function App() {
    return (
        <>
            <NavNews />
            <MDBContainer className="py-5">
                <MDBRow className="gx-5 border-bottom pb-4 mb-5">
                    <MDBCol md="6" className="mb-4">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
                                className="w-100"
                                alt={"sla"}
                            />
                            <a href="#">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
              <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                Notícia do Dia!
              </span>
                        <h4>
                            <strong>Facilis consequatur eligendi</strong>
                        </h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                            consequatur eligendi quisquam doloremque vero ex debitis veritatis
                            placeat unde animi laborum sapiente illo possimus, commodi
                            dignissimos obcaecati illum maiores corporis.
                        </p>
                        <MDBBtn>Leia Mais</MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="gx-lg-5">
                    <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                                    className="img-fluid"
                                    alt={"sla"}
                                />
                                <a href="#">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6" className="text-end">
                                    <u> 01/12/2023</u>
                                </MDBCol>
                            </MDBRow>
                            <a href="#" className="text-dark">
                                <h5>Título da notícia</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    iste aliquid. Sed id nihil magni, sint vero provident esse
                                    numquam perferendis ducimus dicta adipisci iusto nam temporibus
                                    modi animi laboriosam?
                                </p>
                            </a>
                            <hr />
                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/011.webp"
                                    className="img-fluid"
                                    alt={"sla"}
                                />
                                <a href="#">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6" className="text-end">
                                    <u> 15/09/2023</u>
                                </MDBCol>
                            </MDBRow>
                            <a href="#" className="text-dark">
                                <h5>Título da notícia</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    iste aliquid. Sed id nihil magni, sint vero provident esse
                                    numquam perferendis ducimus dicta adipisci iusto nam temporibus
                                    modi animi laboriosam?
                                </p>
                            </a>
                            <hr />
                        </div>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
                        <div>
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.webp"
                                    className="img-fluid"
                                    alt={"sla"}
                                />
                                <a href="#">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </a>
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6" className="text-end">
                                    <u> 25/07/2023</u>
                                </MDBCol>
                            </MDBRow>
                            <a href="#" className="text-dark">
                                <h5>Título da notícia</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    iste aliquid. Sed id nihil magni, sint vero provident esse
                                    numquam perferendis ducimus dicta adipisci iusto nam temporibus
                                    modi animi laboriosam?
                                </p>
                            </a>
                            <hr />
                        </div>
                    </MDBCol>
                </MDBRow>
                <nav aria-label="...">
                    <MDBPagination circle className="mb-0 justify-content-center">
                        <MDBPaginationItem>
                            <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
                                Previous
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem active className={"ms-2"}>
                            <MDBPaginationLink href="#">1</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem className={"ms-2"}>
                            <MDBPaginationLink href="#">
                                2 <span className="visually-hidden">(current)</span>
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem className={"ms-2"}>
                            <MDBPaginationLink href="#">3</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem className={"ms-2"}>
                            <MDBPaginationLink href="#">Next</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </nav>
            </MDBContainer>
            <FooterMain />
        </>
    );
};