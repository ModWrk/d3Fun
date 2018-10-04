import React from "react";
import { render } from "react-dom";
import NewComponent from "./NewComponent";

class App extends React.Component {
    handleTitleClick() {
        alert("what up!!");
        console.log("console");
    }
    render() {
        return React.createElement("div", {},
            React.createElement('h1', { onClick: this.handleTitleClick }, 'Click Dis!')
        )
    }
}

render(React.createElement(App), document.getElementById("root"));