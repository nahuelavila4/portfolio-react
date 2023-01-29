import React from "react";
import { useState } from "react";
import "../stylesheet/Contact.css";
import { Formik } from "formik";
export function Contact() {
  return (
    <div className="container contacto">
      <div className="row titulo">
        <h2>Contacto</h2>
      </div>
      <div className="row contenido">
        <div className="seccion col-sm-12 col-md-6">
          <h3>Vamos a hablar</h3>
          <p>Buenos Aires, Argentina</p>
          <p>+54 1126132007</p>
        </div>

        <div className="col-sm-12 col-md-6">
          <Formik
            initialValues={{
              nombre: "",
              asunto: "",
              empresa: "",
              email: "",
              mensaje: "",
            }}
            validate={(values) => {
              let errores = {};

              // Validacion nombre
              if (!values.nombre) {
                errores.nombre = "Porfavor ingrese un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras y espacios";
              }
              // Validacion email
              if (!values.email) {
                errores.email = "Porfavor ingrese un email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  values.email
                )
              ) {
                errores.email = "Caracteres ingresados invalidos";
              }
              return errores;
            }}
            /* onSubmit={(values, { resetForm }) => {
              resetForm();
              console.log("Formulario enviado");
            }} */
          >
            {({
              values,
              handleSubmit,
              errors,
              touched,
              handleChange,
              handleBlur,
            }) => (
              <form
                /*{handleSubmit}*/ 
                name="contact v1"
                method="post"
                data-netlify="true"
              >
                <div className="row mb-3">
                  <div className="col-12 col-md-6 col-lg-6">
                    <input
                      type={"hidden"}
                      name="form-name"
                      value={"contact v1"}
                    />
                    <label htmlFor="nombre">Nombre</label>
                    <div>
                      <input
                        type={"text"}
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Jhon Doe"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {touched.nombre && errors.nombre && (
                        <div className="error">{errors.nombre}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <label htmlFor="tema">Asunto</label>
                    <div>
                      <input
                        type={"text"}
                        className="form-control"
                        id="tema"
                        name="asunto"
                        placeholder="Entrevista"
                        value={values.asunto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-md-6 col-lg-6">
                    <label htmlFor="empresa">Empresa</label>
                    <div>
                      <input
                        type={"text"}
                        className="form-control"
                        id="empresa"
                        name="empresa"
                        placeholder="Mercado Libre"
                        value={values.empresa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <label htmlFor="email">Email</label>
                    <div>
                      <input
                        type={"email"}
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="jhon@gmail.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="msj">Mensaje</label>
                    <div>
                      <textarea
                        name="mensaje"
                        className="form-control"
                        id="msj"
                        value={values.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-info" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
