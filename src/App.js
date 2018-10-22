import React from "react";
import { render } from "react-dom";
import NewComponent from "./NewComponent";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        const promise =
            promise.then(console.log, console.error)
    }

    render() {
        return (
            <div>
                <h1></h1>

            </div>
        )

    }
}

render(React.createElement(App), document.getElementById("root"));