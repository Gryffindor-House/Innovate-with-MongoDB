import "./App.css";

import Footer from "./components/footer";
import LoginForm from "./components/loginform";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Footer />
        <LoginForm />
        <Nav />
      </header>
    </div>
  );
}

export default App;
