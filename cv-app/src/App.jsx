import "./App.css";
import Button from "./components/Button";
import Forms from "./components/Forms";

function App() {
  return(
    <div className="content">
      <Forms valor1={'nome'} valor2={'email'} valor3={'telefone'}></Forms>
    </div>
  )
}


export default App;
