import React from "react";

const NewComponent = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Component 1 Heading"),
        React.createElement("h2", {}, "Component 2 Heading"),
        React.createElement("h2", {}, "Component 3 Heading")
    ]);
};

export default NewComponent;