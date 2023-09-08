import { Fragment } from "react";

function ListGroup() {
    const lista = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
    ]

    return (
        <Fragment>
            <div>
                <h1>List</h1>
                <ul className="list-group">
                    {lista.map((lista) => <li key={lista}>{lista}</li>)}
                </ul>
            </div>
        </Fragment>
    );
}

export default ListGroup;