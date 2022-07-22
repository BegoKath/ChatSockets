import React, { useState } from "react";
import Chat from "./componentes/Chat";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if (nombre !== "") {
      setRegistrado(true);
    }
  };

  return (
    <div className="App">
      {!registrado && (
        <form onSubmit={registrar}>
          <div className="d-flex flex-row justify-content-center align-items-center">
          <img src="https://10-raisons.fr/wp-content/uploads/2022/02/10-raisons-s-interesser-aux-nft.jpg" alt="..." height={"250px"} width={"250px"}  style={{objectFit:"cover"}}className="rounded-circle"></img>
          </div>
          
          
          <div className="m-4 text-center">
          <label  className="label-name fw-bold form-label" htmlFor="">Ingresa tu nombre:</label>
          </div>
          <input  className="form-control "value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <br></br>
          <div className="m-2 text-center ">
          <button className="btn  btn-access">INGRESAR</button>
          </div>  
        </form>
      )}

      {registrado && <Chat nombre={nombre} />}
    </div>
  );
}

export default App;
