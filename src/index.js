import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  return <h1>Hello world from React</h1>;
};

const Header = () => <h1>Header!</h1>;

const Main = () => {
  const clickHandler = () => {
    console.log('Click to main')
  }

  return <main className="main-section" onClick={clickHandler} style={{ color: "red" }}>
    <Hello />
  </main>
};

const Footer = () => <footer>Footer!</footer>;

const App = () => <div>
  <Header />
  <Main />
  <Footer />
</div>;

ReactDOM.render(<App />,
  document.getElementById("root"))

console.log("Hello world!")