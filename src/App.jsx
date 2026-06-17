import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Home from './pages/Home';
import Fixture from './pages/Fixture';
import Groups from './pages/Groups';
import MiSeleccion from './pages/MiSeleccion';

function App() {
  return (
    <Box minH="100vh" bg="#f0ece4">
      <Navbar />
      <Ticker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/grupos" element={<Groups />} />
        <Route path="/mi-seleccion" element={<MiSeleccion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Box>
  );
}

export default App;
