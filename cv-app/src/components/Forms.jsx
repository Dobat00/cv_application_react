import { Button } from "./Button";
import { useState } from "react";

let info = [];
export function FormsPessoal() {
  const [pessoal, setPessoal] = useState({ nome: "", email: "", telefone: "" });
  function handleSubmit() {
    console.log(pessoal);
    info.push(pessoal);
    console.log(info);
  }
  return (
    <div>
      <h3>Informacoes Pessoais</h3>
      <label>nome</label>
      <input
        type="text"
        id="inputNome"
        onChange={(event) =>
          setPessoal({ ...pessoal, nome: event.target.value })
        }
      ></input>
      <br></br>
      <label>email</label>
      <input
        type="text"
        id="inputEmail"
        onChange={(event) =>
          setPessoal({ ...pessoal, email: event.target.value })
        }
      ></input>
      <br></br>
      <label>telefone</label>
      <input
        type="text"
        id="inputTelefone"
        onChange={(event) =>
          setPessoal({ ...pessoal, telefone: event.target.value })
        }
      ></input>
      <Button text="Salvar informacoes pessoais" onClick={handleSubmit} />
    </div>
  );
}

export function FormsEd() {
  const [edu, setEdu] = useState({
    nomeEscola: "",
    grauEstudo: "",
    anoConclusao: "",
  });

  function handleSubmit() {
    console.log(edu);
    info.push(edu);
    console.log(info);
  }
  return (
    <>
      <h3>Educacao</h3>

      <label>Local onde estudou</label>
      <input
        type="text"
        id="inputNomeEscola"
        onChange={(event) => setEdu({ ...edu, nomeEscola: event.target.value })}
      ></input>
      <br></br>
      <label>Grau de estudo</label>
      <input
        type="text"
        id="inputGrauEstudo"
        onChange={(event) => setEdu({ ...edu, grauEstudo: event.target.value })}
      ></input>
      <br></br>
      <label>Ano em que concluiu os estudos</label>
      <input
        type="text"
        id="inputAnoConclusao"
        onChange={(event) =>
          setEdu({ ...edu, anoConclusao: event.target.value })
        }
      ></input>
      <Button onClick={handleSubmit} text="Salvar informacoes de educacao" />
    </>
  );
}

export function FormsExp() {
  const [exp, setExp] = useState({
    nomeEmpresa: "",
    cargo: "",
    responsabilidade: "",
    entrada: "",
    saida: "",
  });

  function handleSubmit() {
    console.log(exp);
    info.push(exp);
    console.log(info);
  }

  return (
    <>
      <h3>Experiencia profissional</h3>

      <label>Nome da empresa</label>
      <input
        type="text"
        id="inputNomeEmpresa"
        onChange={(event) =>
          setExp({ ...exp, nomeEmpresa: event.target.value })
        }
      />
      <br></br>
      <label>Cargo</label>
      <input
        type="text"
        id="inputCargo"
        onChange={(event) => setExp({ ...exp, cargo: event.target.value })}
      />
      <br></br>
      <label>Responsabilidade</label>
      <input
        type="text"
        id="inputResponsabilidade"
        onChange={(event) =>
          setExp({ ...exp, responsabilidade: event.target.value })
        }
      />
      <br></br>
      <label>Data de ingresso</label>
      <input
        type="text"
        id="inputDataIngresso"
        onChange={(event) => setExp({ ...exp, entrada: event.target.value })}
      />
      <label>Data de saida</label>
      <input
        type="text"
        id="inputDataSaida"
        onChange={(event) => setExp({ ...exp, saida: event.target.value })}
      />
      <br></br>
      <Button onClick={handleSubmit} text="Salvar informacoes profissionais" />
    </>
  );
}

export { info };
