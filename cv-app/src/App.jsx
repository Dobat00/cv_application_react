import "./App.css";
import { Button } from "./components/Button";
import { FormsPessoal, FormsEd, FormsExp } from "./components/Forms";
import { useState } from "react";
import { info } from "./components/Forms";

function App() {
  const [curr, setCurr] = useState({
    informacoesPessoais: {},
    educacao: {},
    profissional: {},
  });
  function handleSubmit() {
    // setCurr(...curr, informacoesPessoais:'oi')
    console.log(info);
  }
  return (
    <div className="content">
      <FormsPessoal />
      <FormsEd />
      <FormsExp />
      <br></br>
      <Button text="Salvar Curriculo" onClick={handleSubmit} />
    </div>
  );
}

export default App;
