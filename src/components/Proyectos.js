import React from "react";
import "./components.css";

const Proyectos = () => {
  return (
      <div
        className="row animate__animated animate__backInUp col-2 mt-5"
        style={{ textAlign: "center", width: '100%'}}
      >
        <div
          id="cardProyecto"
          className="card bg-light col m-2"
        >
          <div className="card-body">
            <h3 className="card-title">Scan Script</h3>
            <h5 style={{ color: "#778489" }} className="card-text">
              Este script combina funciones de varias herramientas como Nmap, Nikto y SpeedTest-cli
            </h5>
            <br />
            <a className="btn btn-primary" href="../scripts/Scan-Script.zip" download>Descargar</a>
          </div>
        </div>
        <div
          id="cardProyecto"
          className="card bg-light col m-2"
        >
          <div className="card-body">
            <h3 className="card-title">Wordpress Script</h3>
            <h5 style={{ color: "#778489" }} className="card-text">
              Este script para instalación y automatización de wordpress
            </h5>
            <br />
            <a className="btn btn-primary" href="../scripts/script-wp.zip" download>Descargar</a>
          </div>
        </div>
      </div>
  );
};

export default Proyectos;
