import { Home } from './components/homepage/home';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Dashboard } from './components/userpage/Dashboard';
import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import theme from './config/fonts/font';
import LoginForm from './components/homepage/loginform';
import Signupform from './components/homepage/Signupform';
import Fpass from './components/homepage/fpass';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/forgotpass" element={<Fpass />} />
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
