const element = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child1"
}, [React.createElement("h1", {
    id: "h1"
}, "Hello! This is H1 Tag of Child1"),
React.createElement("h2", {
    id: "h3"
}, "Hello! This is H2 Tag of Child1")]
),React.createElement("div", {
    id: "child2"
}, [React.createElement("h1", {
    id: "h1"
}, "Hello! This is H1 Tag of Child2"),
React.createElement("h2", {
    id: "h2"
}, "Hello! This is H2 Tag of Child2")]
)]
);
console.log(element);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(element);