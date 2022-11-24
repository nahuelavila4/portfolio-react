import React from "react";
import "../stylesheet/Project.css";
import Boxeo from "../img/boxeo-vector.jpg";
export function Project() {
  return (
    <div className="proyectos-recientes d-flex flex-column text-center">
      <section>
        <h1>Proyectos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec velit eget ipsum mattis euismod at sit amet dui. Ut et tortor et
          massa pellentesque fringilla at ac elit.
        </p>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={Boxeo}></img>
                <div className="overlay">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
