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
            {cities.map((cities) => <li className="list-group-item" key={cities} onClick={(event) => console.log(event)}>{cities}</li>)}
        </ul>
    </Fragment>
}

export default ListGroup;