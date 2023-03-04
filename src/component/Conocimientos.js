import React from "react";
import "../stylesheet/Conocimientos.css";
const Conocimientos = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4">
        <div className="listas">
          <h4>Front-End</h4>
          <li className="lista-naranja">
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="lista-azul">
            <i className="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="lista-amarillo">
            <i className="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </li>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 ">
        <div className="listas">
          <h4>Back-End</h4>
          <li className="lista-verde">
            <i className="fa-brands fa-node-js"></i>
            <p>Nodejs</p>
          </li>
          <li className="lista-celeste">
            <i className="fa-brands fa-react"></i>
            <p>Express</p>
          </li>
          <li className="lista-sql"> 
            <i className="fa-solid fa-database"></i>
            <p>MySQL</p>
          </li>
          <li className="lista-php">
            <i className="fa-brands fa-php"></i>
            <p>PHP</p>
          </li>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4">
        <div className="listas">
          <h4>Librerias</h4>
          <li className="lista-celeste">
            <i className="fa-brands fa-react"></i>
            <p>React</p>
          </li>
          <li className="lista-violeta">
            <i className="fa-brands fa-bootstrap"></i>
            <p>Bootstrap</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
