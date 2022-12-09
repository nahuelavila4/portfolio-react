import React from "react";
import '../stylesheet/Contact.css'
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="ingrese su mensaje"/>
      </Form.Group>
    </Form>
  );
}

export function Contact() {
  return (
    <div className="container contacto text-center">
      <div className="row">
        <h1>Mis Contactos</h1>
        <TextControlsExample />
      </div>
    </div>
  );
}
