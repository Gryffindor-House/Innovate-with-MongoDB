import "./App.css";

import LoginForm from "./components/loginform";
import Footer from "./components/footer";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
