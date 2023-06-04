import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PerfilAssis from '../pages/PerfilAssis';
import PerfilDavid from '../pages/PerfilDavid';
import PerfilVitor from '../pages/PerfilVitor';
import PerfilPablo from '../pages/PerfilPablo';
import DefaultLayout from '../config/layout/DefaultLayout';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route path="/perfil-Assis" element={<DefaultLayout component={PerfilAssis} />} />
        <Route path="/perfil-David" element={<DefaultLayout component={PerfilDavid} />} />
        <Route path="/perfil-Vitor" element={<DefaultLayout component={PerfilVitor} />} />
        <Route path="/perfil-Pablo" element={<DefaultLayout component={PerfilPablo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
