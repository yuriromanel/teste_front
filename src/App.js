
import './App.css';
import Pacientes from './paginas/paginas/pacientes';
import Medicos from './paginas/paginas/medicos';
import Consultas from './paginas/paginas/consultas';
import Especialidade from './paginas/paginas/especialidades';
import Home from './paginas/paginas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';


function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>

          <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/paciente" element={<Pacientes />} />
              <Route path="/medico" element={<Medicos />} />
              <Route path="/consulta" element={<Consultas />} />
              <Route path="/especialidade" element={<Especialidade/>} />             
          </Routes>

      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
