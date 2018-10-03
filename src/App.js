
class App extends React.Component {
    handleTitleClick() {
        alert("what up!!");
    }
    render() {
        return React.creatElement("div", {},
        React.creatElement('h1', {onClick: this.handleTitleClick}, 'App Lives!')
    )}
}

ReactDOM.render(React.creatElement(App), document.getElementById('root')) 