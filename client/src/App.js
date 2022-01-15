import "./App.css";

import Footer from "./components/footer";
import Nav from "./components/nav";
import { Home } from "./components/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
