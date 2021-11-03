import logo from './logo.svg';
import './App.css';
import Pacientes from './paginas/pacientes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar';

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>

          <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/paciente" element={<Pacientes />} />
             
          </Routes>

      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
