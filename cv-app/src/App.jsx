import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="content">
      <Forms />
    </div>
  );
}

function Forms() {
  const [pessoal, setPessoal] = useState({ nome: "", email: "", telefone: "" });
  function handleSubmit() {
    let nome1 = document.getElementById("inputNome").value;
    let email1 = document.getElementById("inputEmail").value;
    let telefone1 = document.getElementById("inputTelefone").value;
    const novoPessoal = { nome: nome1, email: email1, telefone: telefone1 };
    setPessoal(novoPessoal);
    console.log(pessoal);
  }
  return (
    <div>
      <label>nome</label>
      <input type="text" id="inputNome"></input>
      <br></br>
      <label>email</label>
      <input type="text" id="inputEmail"></input>
      <br></br>

      <label>telefone</label>
      <input type="text" id="inputTelefone"></input>
      <Button text="submit" onClick={handleSubmit} />
    </div>
  );
}

function Button({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
export default App;
