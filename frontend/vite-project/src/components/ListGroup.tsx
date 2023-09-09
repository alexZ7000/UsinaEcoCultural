import { Fragment } from "react";

function ListGroup(){
    const cities = [
        'New york',
        'Sao Paulo',
        "Curitiba",
        "French"
    ]

    return<Fragment>
        <ul className="list-group">
            {cities.map((cities) => <li key={cities}>{cities}</li>)}
        </ul>
    </Fragment>
}

export default ListGroup;