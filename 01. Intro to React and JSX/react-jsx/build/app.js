var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// JSX Syntax

var headerElement = React.createElement(
    "header",
    { className: "header-container" },
    React.createElement(
        "h1",
        null,
        "Hello from React!"
    ),
    React.createElement(
        "h2",
        null,
        "Some  slogan here"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga, dignissimos debitis consectetur repellendus at praesentium eligendi sunt ullam provident, corrupti distinctio, pariatur reiciendis ducimus facere perspiciatis deserunt. Ad, quam?"
    )
);

root.render(headerElement);