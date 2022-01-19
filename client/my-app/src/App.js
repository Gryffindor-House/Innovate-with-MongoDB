import { Home } from './components/homepage/home';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Dashboard } from './components/userpage/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/fonts/font';

function App() {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
}

export default App;
