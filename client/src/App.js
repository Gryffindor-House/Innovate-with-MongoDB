import "./App.css";
import { Home } from "./components/homepage/home";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Dashboard } from "./components/userpage/Dashboard";

function App() {
  return (
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
  );
}

export default App;
