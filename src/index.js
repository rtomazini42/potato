import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import Barras from './components/barras';
import Scatter from './components/scatter';

ReactDOM.render(

        
    <div className="row">
        
        <div className="barraTopo">
        
        </div>
        <div>
        <button><img className="iconBtn" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Filter_font_awesome.svg"></img>Filtrar</button>
            <h1>Dashboard</h1>
            <p className="subtitulo">Desafio Técnico Frontend</p>
        </div>
        <div className="conteudo">
            <Barras></Barras>
            <Scatter></Scatter>,
        </div>
    </div>,
    document.getElementById("root")
)