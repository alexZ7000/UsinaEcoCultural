import {MDBFooter} from "mdb-react-ui-kit";
import React from "react";

export const FooterLogin = () => {
    return (
        <MDBFooter>
            <div
                className="text-center p-4 mt-5"
                style={{
                    backgroundColor: "#69A625",
                    borderRadius: "16px",
                    color: "#ECECEC",
                }}
            >
                © {new Date().getFullYear()} Todos os Direitos Reservados
            </div>
        </MDBFooter>
    );
};