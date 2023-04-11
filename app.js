{/* <div id="parent">
<div id="child">
<h1>This is a H1 tag.</h1>
<h2>This is a H2 tag.</h2>
</div>
<div id="child2">
<h1>This is a H1 tag.</h1>
<h2>This is a H2 tag.</h2>
</div>
</div> */}

const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "This is a H1 tag"),
        React.createElement("h2", {}, "This is a H2 tag")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "This is a H1 tag"),
        React.createElement("h2", {}, "This is a H2 tag")
    ])
]
);



const heading = React.createElement('h1', {'id': 'test'}, 'Hello World from React 2!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 


