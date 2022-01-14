import "./App.css";

import LoginForm from "./components/loginform";
import Footer from "./components/footer";
import Nav from "./components/nav";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
