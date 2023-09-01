import Forms from "./Forms";

function Button({texto, func}) {
  return <button onClick={func}>{texto}</button>;
}


export default Button;
