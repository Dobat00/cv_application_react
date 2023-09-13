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
    informacoesPessoais: {},
    educacao: {},
    profissional: {},
  });

  function handleSubmit() {
    //com esssa versao do setCurr "bruto", o console nao ira logar o objeto atualizado, porem, o curriculo em html sera gerado normalmente
    // setCurr({
    //   informacoesPessoais: info[0],
    //   educacao: info[1],
    //   profissional: info[2],
    // });
    const nextPessoal = (curr.informacoesPessoais = info[0]);
    const nextEducacao = (curr.educacao = info[1]);
    const nextProfissional = (curr.profissional = info[2]);
    setCurr({
      informacoesPessoais: nextPessoal,
      educacao: nextEducacao,
      profissional: nextProfissional,
    });
    console.log(curr);
    console.log(curr.informacoesPessoais.nome);
    console.log(curr.informacoesPessoais[0]);
  }
  return (
    <div className="content">
      <FormsPessoal />
      <FormsEd />
      <FormsExp />
      <br></br>
      <Button text="Salvar Curriculo" onClick={handleSubmit} />
      <Cv
        nome={curr.informacoesPessoais.nome}
        email={curr.informacoesPessoais.email}
        telefone={curr.informacoesPessoais.telefone}
        escola={curr.educacao.nomeEscola}
        grauDeEstudo={curr.educacao.grauEstudo}
        anoDeConclusao={curr.educacao.anoConclusao}
        nomeEmpresa={curr.profissional.nomeEmpresa}
        cargo={curr.profissional.cargo}
        responsabilidade={curr.profissional.responsabilidade}
        ingresso={curr.profissional.entrada}
        saida={curr.profissional.saida}
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
