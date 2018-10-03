const NewComponent = () => {
    return React.creatElement("div", {}, [
        React.creatElement("h2", {}, "Component 1 Heading"),
        React.creatElement("h2", {}, "Component 2 Heading"),
        React.creatElement("h2", {}, "Component 3 Heading")
    ]);
}

const App = () => {
    return React.creatElement("div", {}, [
        React.creatElement('h1', {}, 'Page Title'),
        React.creatElement(NewComponent),
        React.creatElement(NewComponent),
        React.creatElement(NewComponent)
    ]);
}


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

ReactDOM.render(React.creatElement(App), document.getElementById('root')) 