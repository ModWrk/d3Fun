import React from "react";

const NewComponent = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Component 1 Heading"),
        React.createElement("h2", {}, "Component 2 Heading"),
        React.createElement("h2", {}, "Component 3 Heading")
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Page Title"),
        React.createElement(NewComponent),
        React.createElement(NewComponent),
        React.createElement(NewComponent)
    ]);
};

// class App extends React.Component {
//     handleTitleClick() {
//         alert("what up!!");
//         console.log("console");
//     }
//     render() {
//         return React.creatElement("div", {},
//         React.creatElement('h1', {onClick: this.handleTitleClick}, 'Click Works !')
//     )}
// }

ReactDOM.render(React.createElement(App), document.getElementById("root"));