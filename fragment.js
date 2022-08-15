import React from "react";
import ReactDOM from "react-dom";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const listItems = numbers.map((number) =>
    <React.Fragment>
        <span>N° </span>
        <p>{number}</p>
    </React.Fragment>
)

ReactDOM.render(
    <>{listItems}</>,
    document.getElementById('root')
)