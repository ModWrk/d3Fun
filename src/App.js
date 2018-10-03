import React from "react";
// import { render } from  "react-dom";

const NewComponent = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Component 1 Heading"),
        React.createElement("h2", {}, "Component 2 Heading"),
        React.createElement("h2", {}, "Component 3 Heading")
    ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));