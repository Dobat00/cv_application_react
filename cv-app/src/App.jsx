import "./App.css";
import { Button } from "./components/Button";
import { FormsPessoal, FormsEd, FormsExp } from "./components/Forms";
import { useState } from "react";
import { info } from "./components/Forms";

// problemas notados: Quando o submit dos forms de informacoes pessoais, profissional e educacao acontece, se o usuario der 2 submits iguais,
// estraga com o produto final, ja que o objeto principal usa dos indexes hardcodados. Provavelmente da pra solucionar usando key

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
  let inputClass = document.getElementsByClassName("input");
  const [show, setShow] = useState(true);
  function handleSubmit() {
    setShow(!show);

    if (show == true) {
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
    }

    console.log(curr);
  }
  if (show == true) {
    return (
      <div className="forms">
        <FormsPessoal />
        <FormsEd />
        <FormsExp />
        <br></br>
        <Button text="Salvar Curriculo" onClick={handleSubmit} />
      </div>
    );
  }
  return (
    <div className="content">
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
      <Button onClick={handleSubmit} text="Editar curriculo" />
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
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
      <p>Local de estudo: {escola}</p>
      <p>Grau de escolaridade: {grauDeEstudo}</p>
      <p>Ano de conclusao: {anoDeConclusao}</p>
      <p>Nome da empresa: {nomeEmpresa}</p>
      <p>Cargo: {cargo}</p>
      <p>Responsabilidades: {responsabilidade}</p>
      <p>Data de ingresso: {ingresso}</p> Data de saida: <p>{saida}</p>
    </div>
  );
}

export default App;
