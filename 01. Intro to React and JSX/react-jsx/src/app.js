const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// JSX Syntax

const headerElement = (
    <header className="header-container">
        <h1>Hello from React!</h1>
        <h2>Some  slogan here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga, dignissimos debitis consectetur repellendus at praesentium eligendi sunt ullam provident, corrupti distinctio, pariatur reiciendis ducimus facere perspiciatis deserunt. Ad, quam?</p>
    </header>
);

root.render(headerElement);