import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './../../Home/Home';
import Sobre from './../../Sobre/Sobre';
import Habilidades from './../../Habilidades/Habilidades';
import Projetos from './../../Projetos/Projetos';
import Curriculo from './../../Curriculo/Curriculo';

const Content = () => {
    return (
        <Routes>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/curriculo" element={<Curriculo />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Content;