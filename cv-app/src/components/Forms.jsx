import Button from "./Button";

function Forms({ valor1, valor2, valor3, func }) {
  return (
    <div className="divForms">
      <label>
        {valor1} <input type="text" />
        <br></br>
        {valor2} <input type="text" />
        <br></br>
        {valor3} <input type="text" />
        <br></br>
        <Button texto={"Enviar"}></Button>
      </label>
    </div>
  );
}

export default Forms;
