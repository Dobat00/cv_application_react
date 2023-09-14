import "./App.css";
import { Button } from "./components/Button";
import { FormsPessoal, FormsEd, FormsExp } from "./components/Forms";
import { useState } from "react";
import { info } from "./components/Forms";

// problemas notados: Quando o submit dos forms de informacoes pessoais, profissional e educacao acontece, se o usuario der 2 submits iguais,
// estraga com o produto final, ja que o objeto principal usa dos indexes hardcodados. Provavelmente da pra solucionar usando key
const objeto_teste = { nome: "matheus", idade: 23, email: "@gmail.com" };

function App() {
  const [curr, setCurr] = useState({
    nomePessoal: "",
    emailPessoal: "",
    telefonePessoal: "",
    nomeEdu: "",
    grauEstudo: "",
    anoConclusao: "",
    nomeEmpresa: "",
    cargo: "",
    responsabilidade: "",
    ingresso: "",
    saida: "",
  });

  function handleSubmit() {
    let inputClass = document.getElementsByClassName("input");
    setCurr({
      nomePessoal: inputClass[0].value,
      emailPessoal: inputClass[1].value,
      telefonePessoal: inputClass[2].value,
      nomeEdu: inputClass[3].value,
      grauEstudo: inputClass[4].value,
      anoConclusao: inputClass[5].value,
      nomeEmpresa: inputClass[6].value,
      cargo: inputClass[7].value,
      responsabilidade: inputClass[8].value,
      ingresso: inputClass[9].value,
      saida: inputClass[10].value,
    });
    console.log(curr);
  }
  return (
    <div className="content">
      <FormsPessoal />
      <FormsEd />
      <FormsExp />
      <br></br>
      <Button text="Salvar Curriculo" onClick={handleSubmit} />
      <Cv
        nome={curr.nomePessoal}
        email={curr.emailPessoal}
        telefone={curr.telefonePessoal}
        escola={curr.nomeEdu}
        grauDeEstudo={curr.grauEstudo}
        anoDeConclusao={curr.anoConclusao}
        nomeEmpresa={curr.nomeEmpresa}
        cargo={curr.cargo}
        responsabilidade={curr.responsabilidade}
        ingresso={curr.ingresso}
        saida={curr.saida}
      />
    </div>
  );
}

function Cv({
  nome,
  email,
  telefone,
  escola,
  grauDeEstudo,
  anoDeConclusao,
  nomeEmpresa,
  cargo,
  responsabilidade,
  ingresso,
  saida,
}) {
  return (
    <div className="cvDiv">
      <p>{nome}</p>
      <p>{email}</p>
      <p>{telefone}</p>
      <p>{escola}</p>
      <p>{grauDeEstudo}</p>
      <p>{anoDeConclusao}</p>
      <p>{nomeEmpresa}</p>
      <p>{cargo}</p>
      <p>{responsabilidade}</p>
      <p>{ingresso}</p> <p>{saida}</p>
    </div>
  );
}

export default App;
