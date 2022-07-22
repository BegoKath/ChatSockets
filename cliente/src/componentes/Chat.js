import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "../App.css";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };

  return (
    <div className="container-chat">
      <div className="chat wrapper">
        {mensajes.map((e, i) => (
          
          <div key={i} className="wrapper">
            <div className="m-2 fw-bold">  {e.nombre} </div>
            <div className="msg">              
             {e.mensaje}
            </div>
         
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <br></br>
      <div className="msg-container">
      <form className="d-flex justify-content-around align-items-center" onSubmit={submit}>
        {/*<label htmlFor="">Escriba su mensaje</label>*/}
          <textarea
            className="text-msg form-control"
            cols="30"
            rows="10"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button className="send-msg btn">Enviar</button>      
      </form>
      </div>
    </div>
  );
};

export default Chat;
