import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import usina_faixa_do_futuro from "./Assets/images/faixa_do_futuro.jpeg";
import usina_caminhao_de_lixo from "./Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png";

import {
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import {FooterMain} from "./footer/FooterMain";
import {NavAboutUs} from "./navbars/NavAboutUs";

export default function History() {
    return (
        <>
            <NavAboutUs />
            <MDBContainer className="my-5 gradient-form">
                <MDBRow className="container-sm">
                    <div className="p-5 text-center bg-light mb-5">
                        <h1 className="mb-3">
                            <strong>NOSSA HISTÓRIA</strong>
                        </h1>
                        <img
                            src={usina_caminhao_de_lixo}
                            className="img-fluid"
                            alt="truckTrash"
                        />

                        <h1>
                            <strong>UM PASSADO PREOCUPANTE</strong>
                        </h1>

                        <h4 className="mb-3">
                            <strong className="border-bottom">O Incenerador Vergueiro</strong>
                        </h4>

                        <div className="row mt-5 mb-1">
                            <div className="col-md-5 mb-2 mx-auto border border-2  rounded-5 border-primary-subtle">
                                <p className="mt-4">
                                    <strong
                                        style={{ fontSize: "1.2em" }}
                                        className="text-wrap text-justify text-left fs-5"
                                    >
                                        Em 1968, foi inaugurado o Incinerador Vergueiro, destinado
                                        inicialmente ao descarte de resíduos domésticos. No entanto,
                                        a partir de 1977, passou a receber também lixo hospitalar,
                                        resultando em uma queima que liberava fumaça e odor
                                        desagradáveis, afetando moradores em um raio de 10 km.
                                        Diante dessa situação, a comunidade local iniciou protestos
                                        para fechar o incinerador. Inicialmente, a prefeitura
                                        ignorou as demandas dos moradores, levando-os a adotar uma
                                        medida drástica: formaram uma barreira humana em frente ao
                                        incinerador, impedindo a entrada de caminhões para a queima.
                                    </strong>
                                </p>
                            </div>
                            <div className="col-md-5 mx-auto border border-2 rounded-5 border-primary-subtle">
                                <p className="mt-4">
                                    <strong
                                        style={{ fontSize: "1.2em" }}
                                        className="text-wrap text-justify text-left fs-5"
                                    >
                                        Em seguida, um laudo das cinzas do incinerador confirmou a
                                        toxicidade da fumaça, contendo bacteriófagos, coliformes
                                        fecais, pseudômonas e substâncias cancerígenas. A explicação
                                        para isso residia na incapacidade dos fornos em atingir
                                        temperaturas suficientemente altas para queimar
                                        adequadamente o lixo hospitalar. Em dezembro de 2001, o
                                        incinerador realizou sua última queima, destruindo 2
                                        toneladas de medicamentos vencidos de quimioterapia e 125 kg
                                        de maconha. No ano seguinte, em 2002, as atividades do
                                        incinerador foram oficialmente encerradas. Como símbolo da
                                        vitória da comunidade, balões coloridos de gás hélio foram
                                        liberados pela chaminé do incinerador.
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <h1 className="mt-5">
                            <strong className="border-bottom">
                                UM FUTURO{" "}
                                <strong className="text-success-emphasis">VERDE</strong>
                            </strong>
                        </h1>
                        <img
                            src={usina_faixa_do_futuro}
                            alt="green_future"
                            className="img-fluid rounded-4"
                        />
                        <div className="row mt-5">
                            <div className="col-md-5 mb-2 mx-auto border border-2 rounded-5 border-success-subtle">
                                <p className="mt-4">
                                    <strong style={{ fontSize: "1.2em" }}>
                                        O Movimento Eco-Cultural está determinado a encerrar o
                                        capítulo de sofrimento associado a este local abandonado,
                                        iniciando uma nova narrativa que o transformará em um espaço
                                        seguro, agradável e ecologicamente responsável. Este
                                        ambiente revitalizado pretende tornar-se um verdadeiro
                                        refúgio para os residentes locais e visitantes, redefinindo
                                        a paisagem e a experiência turística na região,
                                        especialmente para aqueles que chegam da estação Santos
                                        Imigrantes. A Usina Eco-Cultural abraça uma variedade de
                                        atividades ao ar livre, incluindo yoga, teatro, skate,
                                        banquetes, entre outras.
                                    </strong>
                                </p>
                            </div>
                            <div className="col-md-5 mx-auto border border-2 rounded-5 border-success-subtle">
                                <p className="mt-4">
                                    <strong style={{ fontSize: "1.2em" }}>
                                        O local que antes abrigava os fornos do incinerador será
                                        convertido em um Museu, oferecendo uma narrativa detalhada
                                        sobre a história passada do incinerador. A intenção é
                                        preservar os acontecimentos passados e criar consciência
                                        para as gerações futuras. A missão da Usina é proporcionar a
                                        cidadãos de bem mais uma opção em São Paulo para desfrutar o
                                        final de semana com a família, sem custos. Este projeto não
                                        apenas redefine o espaço, mas também promove a saúde e o
                                        bem-estar da comunidade, transformando-o em um local
                                        culturalmente enriquecedor e ecologicamente sustentável na
                                        cidade.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
            <FooterMain />
        </>
    );
};
