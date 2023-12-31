import RevoCalendar from "revo-calendar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBRow
} from "mdb-react-ui-kit";
import { FooterMain } from "./footer/FooterMain";
import { NavAboutUs } from "./navbars/NavAboutUs";
import banquete from "./Assets/images/banquete.png"
import crianca from "./Assets/images/crianca_pintando_usina.jpg"
import uniao from "./Assets/images/gral_unido_usina.jpeg"

export default function Home() {
    const events = [
        {
            name: "Apresentação do Projeto Usina Eco-Cultural",
            date: Date.now(),
            allDay: true,
            extra: {
                icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
                text: "7 Pessoas",
            },
        }
    ];

    const translations = {
        esperanto: {
            days: ["Dimanĉo", ..."Sabato"],
            daysShort: ["Dim", ..."Sab"],
            daysMin: ["Di", ..."Sa"],
            months: ["Januaro", ..."Decembro"],
            monthsShort: ["Jan", ..."Dec"],
            noEventForThisDay: "Neniu evento por ĉi tiu tago ... do ripozu!",
            allDay: "Tuta tago",
            addEvent: "Aldoni eventon",
            delete: "Forigi",
            eventTime: "Tempo de evento",
            previousYear: "Pasintjare",
            nextYear: "Venonta jaro",
            toggleSidebar: "Baskulu flanka kolumno",
            toggleDetails: "Ŝaltu Detalojn",
        },
    };
    return (
        <>
            <NavAboutUs/>
            <MDBRow>
                <div className="mb-3 mb-3 ">
                    <h1>
                        <strong>Eventos</strong>
                    </h1>
                </div>
            </MDBRow>
            <div className="mb-2 text-center position-relative top-0 w-100">
                <div className="card mb-2">
                    <h5 className="card-header bg-white">Nome do Evento 1</h5>
                    <div className="card-body d-flex align-items-center">
                        <img src={banquete} alt={"banquete"} className={"card-img w-25 mr-3"}></img>
                        <div>
                            <p className="card-text">
                                &nbsp;<strong>Explicações do Evento 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p className="card-footer bg-white col-md-11 mx-auto"><i>8 de Dezembro de 2023</i></p>
                            <MDBBtn
                                className={"col-md-4 btn-success"}
                                style={{
                                    color: "ECECEC",
                                    backgroundColor: "#69A625",
                                    border: "none",
                                }}
                            >
                                INSCREVER-SE!
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 text-center position-relative top-0 w-100">
                <div className="card mb-2">
                    <h5 className="card-header bg-white">Nome do Evento 2</h5>
                    <div className="card-body d-flex align-items-center">
                        <img src={crianca} alt={"crianca"} className={"card-img w-25 mr-3"}></img>
                        <div>
                            <p className="card-text">
                                &nbsp;<strong>Explicações do Evento 2:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p className="card-footer bg-white col-md-11 mx-auto"><i>8 de Dezembro de 2023</i></p>
                            <MDBBtn
                                className={"col-md-4 btn-success"}
                                style={{
                                    color: "ECECEC",
                                    backgroundColor: "#69A625",
                                    border: "none",
                                }}
                            >
                                INSCREVER-SE!
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 text-center border-bottom border-2 position-relative top-0 w-100">
                <div className="card mb-2">
                    <h5 className="card-header bg-white">Nome do Evento 3</h5>
                    <div className="card-body d-flex align-items-center">
                        <img src={uniao} alt={"uniao"} className={"card-img w-25 mr-3"}></img>
                        <div>
                            <p className="card-text">
                                &nbsp;<strong>Explicações do Evento 3:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p className="card-footer bg-white col-md-11 mx-auto"><i>8 de Dezembro de 2023</i></p>
                            <MDBBtn
                                className={"col-md-4 btn-success"}
                                style={{
                                    color: "ECECEC",
                                    backgroundColor: "#69A625",
                                    border: "none",
                                }}
                            >
                                INSCREVER-SE!
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <MDBRow>
                <div className="mb-3 mb-3 mt-4">
                    <h1>
                        <strong>Calendário de Eventos</strong>
                    </h1>
                </div>
            </MDBRow>
            <RevoCalendar
                className="mb-5"
                events={events}
                style={{
                    borderRadius: "15px",
                    border: "3px solid #4F6995",
                    height: "534px",
                }}
                highlightToday={true}
                lang="pt"
                primaryColor="#3A90C3"
                secondaryColor="#efffff"
                todayColor="#FFFaa"
                textColor="#333333"
                indicatorColor="orange"
                animationSpeed={300}
                sidebarWidth={180}
                detailWidth={280}
                showDetailToggler={true}
                showSidebarToggler={true}
                onePanelAtATime={false}
                allowDeleteEvent={true}
                allowAddEvent={true}
                openDetailsOnDateSelection={true}
                timeFormat24={true}
                showAllDayLabel={false}
                detailDateFormat="DD/MM/YYYY"
            />
            <FooterMain />
        </>
    );
};
