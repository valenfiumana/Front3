import React from "react";
import ReactDOM from "react-dom";

const Padre = (props) => {
    return (
        <div style={{ 
            width: "75%",
            background: "pink",
            height: "200px",
            padding: "20px"
        }}> 
            <h5>Soy un padre</h5>
            {props.children}
        </div>
    )
}

const Hijo = (props) => {
    return (
        <div style={{ 
            width: "50%",
            background: "purple",
            height: "100px",
            color: "white",
            padding: "10px",
            fontSize: "30px"
        }}> 
            {props.autor}
        </div>
    )
}

const App = () => {
    return (
        <Padre>
            <Hijo autor="Soy un hijo"/>
        </Padre>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));