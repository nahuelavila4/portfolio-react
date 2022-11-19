import React from "react";
import "../stylesheet/Knowledge.css";

function Frontend() {
  return (
    <div className="front">
      <h3>Front-End</h3>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>JavaScript</h5>
      <h5>React</h5>
      <h5>Bootstrap</h5>
    </div>
  );
}

function Backend() {
  return (
    <div className="front">
      <h3>Front-End</h3>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>JavaScript</h5>
      <h5>React</h5>
      <h5>Bootstrap</h5>
    </div>
  );
}

function Tool() {
  return (
    <div className="front">
      <h3>Front-End</h3>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>JavaScript</h5>
      <h5>React</h5>
      <h5>Bootstrap</h5>
    </div>
  );
}

export function Knowledge() {
  return (
    <div className="tecs container text-center">
      <div className="row">
        <h1>Tecnologias</h1>
      </div>
      <div className="row">
        <div className="col">
          <Frontend />
        </div>
        <div className="col">
          <Backend />
        </div>
        <div className="col">
          <Tool />
        </div>
      </div>
    </div>
  );
}
