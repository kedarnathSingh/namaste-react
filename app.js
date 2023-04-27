import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";

header = React.createElement("h1", {}, "This is a H1 tag");
console.log(header);
// jsx- html like or xml like syntax 
// For multiline code () braces is required
// React Element
const element = <span>This is an element.</span>
const jsxheading =(<h1 id="heading">
    This is a heading.
    {element}
    </h1>);
console.log(jsxheading);

// Component
// Class Based component
// Functional component
// React Component
const HeaderComponent = () => {
    return(<div>
        This is a react functional component. 
    </div>)
}
// Component Composition
const HeadingComponent = () => (
    <div id="tag1">
        <h1>This is a React code</h1>
        {jsxheading}
        {HeaderComponent()}
        <HeaderComponent />

    </div>
);

// React Fragnent  - behaves like an empty tag

const HeadingComponent2 = () => (
    // <React.Fragment>
    <>
    <div id="tag1">
        <h1>This is a React code</h1>
        {jsxheading}
        {HeaderComponent()}
        <HeaderComponent />
    </div>
    <div> Test Node</div>
    </>
    // </React.Fragment>
);

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);






