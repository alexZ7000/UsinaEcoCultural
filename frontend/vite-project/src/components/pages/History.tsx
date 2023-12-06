import React, {useState} from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import usina_faixa_do_futuro from "./Assets/images/faixa_do_futuro.jpeg";
import usina_caminhao_de_lixo from "./Assets/images/caminhao-de-lixo-vai-incinerar-residuos-em-uma-usina-de-incineracao_124715-1127-removebg-preview(1).png";

import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBRow
} from "mdb-react-ui-kit";
import {FooterMain} from "./footer/FooterMain";
import {NavAboutUs} from "./navbars/NavAboutUs";

export default function History() {
    const [show1, setShow1] = useState(false);
    const [icon1, setIcon1] = useState("right");

    const [show2, setShow2] = useState(false);
    const [icon2, setIcon2] = useState("right");

    const [show3, setShow3] = useState(false);
    const [icon3, setIcon3] = useState("right");

    const [show4, setShow4] = useState(false);
    const [icon4, setIcon4] = useState("right");



    const toggleDonationTextShow1 = () => {
        setShow1(!show1);
        setIcon1(icon1 === "right" ? "down" : "right");
    };

    const toggleDonationTextShow2 = () => {
        setShow2(!show2);
        setIcon2(icon2 === "right" ? "down" : "right");
    };

    const toggleDonationTextShow3 = () => {
        setShow3(!show3);
        setIcon3(icon3 === "right" ? "down" : "right");
    };

    const toggleDonationTextShow4 = () => {
        setShow4(!show4);
        setIcon4(icon4 === "right" ? "down" : "right");
    };

    return (
        <>
            <NavAboutUs />
            <MDBContainer className="my-5 gradient-form">
                <MDBRow className="container-sm">
                    <div className="p-5 bg-light mb-5">
                        <h1 className="mb-3">
                            <strong className={"fs-1 border-bottom border-2"}>O Coletivo</strong>
                        </h1>
                        <img
                            src={usina_caminhao_de_lixo}
                            className="img-fluid "
                            alt="truckTrash"
                        />
                        <div className="mt-5 mb-1">
                            <p className="px-5">
                                <strong
                                    style={{ fontSize: "1.2em" }}
                                    className="text-wrap text-justify text-left fs-5"
                                >
                                    O Coletivo Usina Eco-Cultural surgiu do descontentamento de moradores próximos à região do
                                    Ipiranga e do antigo Incinerador Vergueiro, que foi deixado ao abandono por mais de 20 anos.
                                    Arquitetos, urbanistas, ativistas, artistas e ambientalistas e pessoas de diversas profissões
                                    decidiram, desde 2019, se unir e discutir propostas de transformação e melhorias não apenas
                                    para o Incinerador, mas para a região como um todo. O coletivo é plural, multipartidário e
                                    horizontal.
                                </strong>
                            </p>
                            <MDBBtn
                                tag="a"
                                onClick={toggleDonationTextShow1}
                                className={"btn-light"}
                            >
                                Ler mais <MDBIcon fas icon={`chevron-${icon1}`} />
                            </MDBBtn>
                            <MDBCollapse show={show1}>
                                <p className="mt-4 px-5">
                                    <strong
                                        style={{ fontSize: "1.2em" }}
                                        className="text-wrap text-justify text-left fs-5"
                                    >
                                        A proposta do movimento é readequar o espaço do que foi o Incinerador Vergueiro,
                                        transformando-o em um centro de cultura e estudos sobre o meio ambiente, mantendo viva a
                                        memória do que foi aquele espaço e proporcionando um local para reflexão sobre a cidade
                                        justa e democrática que desejamos no futuro.
                                        O objetivo principal é proporcionar à comunidade local um espaço revitalizado, representando
                                        não apenas um marco cultural, mas também um gesto de reparação histórica após décadas de
                                        abandono. A Usina Eco-Cultural surge como um ponto de encontro e convivência para a
                                        comunidade, contribuindo para fortalecer os laços sociais de quem vive na região.
                                    </strong>
                                </p>
                            </MDBCollapse>

                        </div>
                        <h1 className="mt-5 mb-3">
                            <strong className="border-bottom border-2">
                                Descontaminação do Espaço
                            </strong>
                        </h1>
                        <img
                            src={usina_faixa_do_futuro}
                            alt="green_future"
                            className="img-fluid rounded-4"
                        />
                        <div className="mt-5">
                            <p className="mt-4 px-5">
                                <strong style={{ fontSize: "1.2em" }}>
                                    Estudos sobre a condição do terreno e entornos: Recentemente, a prefeitura foi multada por
                                    adiar a entrega dos relatórios sobre a contaminação do espaço. A CETESB aplicou uma multa
                                    em relação à ausência de resposta da prefeitura sobre uma solicitação de informações sobre
                                    contaminações feita pela Usina pouco antes de darmos início oficialmente ao movimento.
                                    Sendo assim, a prefeitura não tem laudos sobre a contaminação do terreno e regiões afetadas
                                    pela queima de lixo.

                                </strong>
                            </p>
                            <MDBBtn
                                tag="a"
                                onClick={toggleDonationTextShow2}
                                className={"btn-light"}
                            >
                                Ler mais <MDBIcon fas icon={`chevron-${icon2}`} />
                            </MDBBtn>
                            <MDBCollapse show={show2}>
                                <p className="mt-4 px-5">
                                    <strong style={{ fontSize: "1.2em" }}>
                                        Por isso, é prioridade do coletivo a realização desses estudos para garantir
                                        a segurança de todos os moradores e frequentadores da Usina.
                                        Atualmente, a prefeitura não possui laudos sobre a contaminação do terreno e das áreas
                                        afetadas pela queima de lixo. Precisamos desses estudos para garantir a segurança de todos
                                        os moradores e frequentadores do Ipiranga. As informações que temos indicam que o
                                        abandono é o principal fator de contaminação, com a presença de pombos, entre outros. O
                                        local tem atraído moradores de rua e usuários de drogas, gerando uma sensação de
                                        insegurança para a população. O espaço não pode permanecer como está!
                                    </strong>
                                </p>
                            </MDBCollapse>
                            <h1 className="mt-5 mb-3">
                                <strong className="border-bottom border-2">
                                    Polo Cultural do Ipiranga
                                </strong>
                            </h1>
                            <p className="mt-4 px-5">
                                <strong style={{ fontSize: "1.2em" }}>
                                    No primeiro ano de nossa atuação, percebemos uma carência de cultura e ações voltadas para
                                    a educação ambiental na região. Isso fortalece ainda mais nosso coletivo e está alinhado com
                                    nossos objetivos. Precisamos de um espaço onde possamos debater e discutir a cidade que
                                    queremos, afinal, temos direito à cidade. Desde o início do movimento, já realizamos diversas
                                    ações de cultura.
                                </strong>
                            </p>
                        </div>
                        <h1 className="mt-5 mb-3">
                            <strong className="border-bottom border-2">
                                Melhorias para a região
                            </strong>
                        </h1>
                        <p className="mt-4 px-5">
                            <strong style={{ fontSize: "1.2em" }}>
                                O espaço abandonado há mais de 20 anos gera uma sensação de insegurança em seu
                                entorno. A readequação do espaço traz mais segurança para a área e valorização para toda a
                                região. Antes de ocuparmos o espaço, usuários de drogas estavam frequentando o local.
                            </strong>
                        </p>
                        <MDBBtn
                            tag="a"
                            onClick={toggleDonationTextShow3}
                            className={"btn-light"}
                        >
                            Ler mais <MDBIcon fas icon={`chevron-${icon3}`} />
                        </MDBBtn>
                        <MDBCollapse show={show3}>
                            <p className="mt-4 px-5">
                                <strong style={{ fontSize: "1.2em" }}>
                                    Não podemos permitir que o terreno seja usado para construir mais um prédio residencial no
                                    bairro; a área é de extrema relevância e deve ser usada em prol dos cidadãos. A região
                                    necessita de espaços de cultura e de discussão da cidade que queremos.
                                </strong>
                            </p>
                        </MDBCollapse>

                        <h1 className="mt-5 mb-3">
                            <strong className="border-bottom border-2">
                                Museu do Meio Ambiente
                            </strong>
                        </h1>
                        <p className="mt-4 px-5">
                            <strong style={{ fontSize: "1.2em" }}>
                                Na Usina, a educação ambiental é protagonista. A ideia é que a área da Usina seja um local
                                para o ensino de educação ambiental e experiências práticas, como o plantio de espécies
                                nativas, hortas suspensas (sem conexão com o solo, devido à condição desconhecida do solo)
                                e atividades de compostagem, ensinando a população a descartar corretamente o lixo
                                orgânico.
                            </strong>
                        </p>
                        <MDBBtn
                            tag="a"
                            onClick={toggleDonationTextShow4}
                            className={"btn-light"}
                        >
                            Ler mais <MDBIcon fas icon={`chevron-${icon4}`} />
                        </MDBBtn>
                        <MDBCollapse show={show4}>
                            <p className="mt-4 px-5">
                                <strong style={{ fontSize: "1.2em" }}>
                                    A proposta do Museu do Meio Ambiente é um sonho coletivo de todos aqueles que acreditam
                                    que o local deve ser ressignificado, devolvendo à população um espaço semelhante ao que foi
                                    feito no Incinerador de Pinheiros, próximo à praça Victor Civita. O Museu do Meio Ambiente faz
                                    parte de um Projeto de Lei que está na Câmara Municipal de São Paulo, que tem o objetivo de
                                    criar um Parque Linear que ligaria o Parque das Águas, no Jardim Botânico, ao Parque da
                                    Independência, no Museu do Ipiranga. Esse parque passaria pela Avenida Ricardo Jafet,
                                    acompanhando o famoso riacho do Ipiranga, tão presente na história do nosso país e também
                                    no nosso hino.
                                    O museu fará parte do Corredor Verde, projeto que busca fazer um parque linear que passa ao
                                    lado do terreno da Usina, na Av. Ricardo Jafet.
                                </strong>
                            </p>
                        </MDBCollapse>
                        <h1 className={"mt-5 mb-3"}>
                            <strong className="border-bottom border-2">
                                Programa Ruas Abertas
                            </strong>
                        </h1>
                        <p className="mt-4 px-5">
                            <strong style={{ fontSize: "1.2em" }}>
                                Política pública que fecha a rua aos domingos e permite que a população use para
                                brincadeiras, a ideia é que a Rua Breno Ferraz do Amaral em frente a Usina seja uma via
                                dentro do programa Ruas Abertas.
                            </strong>
                        </p>
                    </div>
                    <h1 className={"mb-3"}>
                        <strong className={"fs-1"}>
                            História
                        </strong>
                    </h1>
                    <h2>
                        <strong className={"fs-2 border-bottom border-2"}>
                            O Incinerador Vergueiro
                        </strong>

                    </h2>
                    <p className={"mt-4 px-5 col-md-10 mx-auto"}>
                        <strong style={{ fontSize: "1.2em" }}>
                            O Incinerador Vergueiro, localizado no Ipiranga, zona sul de São Paulo, foi um dos três
                            incineradores da cidade. Iniciou suas atividades em 1968, a princípio para lixo doméstico,
                            posteriormente incluindo lixo hospitalar a partir de 1977. Ativo até 2002, o Incinerador Vergueiro
                            desempenhou um papel significativo na história da coleta de lixo em São Paulo, chegando a
                            incinerar cerca de 50 toneladas diárias.
                        </strong>
                    </p>
                    <p className={"px-5 col-md-10 mx-auto"}>
                        <strong style={{ fontSize: "1.2em" }}>
                            O bairro do Ipiranga, predominantemente industrial, testemunhou o crescimento do
                            descontentamento com o Incinerador, cujas fumaças atingiam um raio de 10km, afetando até
                            cidades vizinhas. A população protestou intensamente na década de 90 e início dos anos 2000,
                            destacando a inadequação ambiental do Incinerador. Em 2000, um protesto bloqueou a entrada
                            de caminhões, levando o poder público a avaliar o incinerador.
                        </strong>
                    </p>
                    <p className={"px-5 col-md-10 mx-auto"}>
                        <strong style={{ fontSize: "1.2em" }}>
                            O laudo de dezembro de 2000 revelou a presença de coliformes fecais, bacteriófagos e
                            substâncias tóxicas nas cinzas, invalidando sua eficácia na esterilização do lixo. Detectou-se
                            também a liberação de substâncias cancerígenas nas fumaças. Pressionada, a prefeitura
                            assinou um Termo de Ajustamento de Conduta Ambiental, reduzindo a média diária de lixo para
                            6 toneladas. Em dezembro de 2001, ocorreu a última queima.
                        </strong>
                    </p>


                    <h2>Linha do tempo:</h2>
                    <ul>
                        <li className={"me-auto"}>
                            <strong>
                                1968 - Início das atividades do Incinerador Vergueiro
                            </strong>
                        </li>
                        <li>
                            2002 - Encerramento da queima de lixo
                        </li>
                    </ul>
                    TODO:TerminarEstilização
                    2004 -Concessão das operações do Transbordo Vergueiro por 20 anos para a empresa
                    EcoUrbis Ambiental
                    07/05/2021 - Início da obra de modernização do Transbordo Vergueiro
                    Agosto / 2022 - Término da obra de modernização do Transbordo Vergueiro
                    2019 - Primeira reunião da comunidade para propor o Centro Cultural no antigo Incinerador,
                    iniciativa do CADES Ipiranga.
                    maio / 2022 - Visita oficial no antigo Incinerador, do CADES Ipiranga, com o Subprefeito
                    Adnilson Almeida.
                    31/07/2022 - Comunidade começa a ocupar o antigo espaço Incinerador, iniciativa do CADES
                    Ipiranga, inicia a o movimento da Usina Eco-Cultural.
                    10
                    17/12/2022 - Primeiro Festival da Usina Eco-Cultural, chamado Lado B do B, com repercussão
                    na imprensa.
                    12/01/2023 - Visita surpresa do Prefeito de São Paulo, Ricardo Nunes, na Usina Eco-Cultural.
                    19/01/2023 - Tentativa da prefeitura de expulsar o movimento da Usina Eco-Cultural, o
                    movimento resistiu.
                    09/05/2023 - Movimento da Usina Eco-Cultural, representado pelo CADES Ipiranga apresenta
                    a proposta de revitalização da área com Museu do Meio-Ambiente e Mercado de alimentação
                    orgânica na Subprefeitura do Ipiranga para pleitear a verba municipal de 6 milhões de reais, a
                    convite do Conselho Participativo do Ipiranga.
                    27/05/2023 - Evento em parceria com a Umapaz na Usina com o tema de Resíduos Sólidos, o
                    movimento recebeu multa de 42 mil reais da subprefeitura do Ipiranga, a autuação foi por
                    motivo de evento sem autorização, a multa foi aplicada a integrante Débora Machado, o que
                    caracterizou perseguição política.
                    14/07/2023 - Movimento entrega a chave e deixa o território da Usina para subprefeitura em
                    negociação para retirada da multa. Subprefeitura não cumpriu o acordo.
                    29/07/2023 - Comemoração na rua de 1 ano do movimento. Evento contou com o apoio do
                    Vereador Aurélio Nomura - PSDB e a presença da escola de Samba Brinco da Marquesa.
                    24/07/2023 - Festa Junina da Usina Eco-Cultural, com o show do Ó do Forró, evento com 2 mil
                    pessoas na rua.
                    12/08/2023 - Audiência Pública sobre a Usina, realizada nas escola ao lado E.E. Raul Humaitá
                    Villa Nova, com os mandatos dos vereadores Silvia Ferraro e Aurélio Nomura.
                    19/09/2023 - Cassação do Vereador Camilo Cristófaro, mais influente sobre a subprefeitura do
                    Ipiranga, que perseguiu o movimento. A Usina Eco-Cultural se posicionou publicamente em
                    apoio à cassação.
                    14/11/2023 - Troca do Subprefeito do Ipiranga, Adnilson Almeida, antigo subprefeito ligada ao
                    vereador cassado Camilo Cristófaro é substituído por Rodrigo Bagnatori Ribeiro, ligado ao
                    Vereador Aurélio Nomura - PSDB.
                    09/12/2023 - Evento de Festa Junina da Usina Eco-Cultural, com o show do Ó do Forró, evento
                    com 2 mil pessoas na rua.
                    2024 - Será a renovação do contrato de Concessão das operações do Transbordo Vergueiro
                    (atualmente da EcoUrbis Ambiental)
                </MDBRow>
            </MDBContainer>
            <FooterMain />
        </>
    );
};
