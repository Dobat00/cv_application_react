function Button() {
  return <button onClick={sayHello}></button>;
}

function sayHello() {
  console.log("hello!");
}

export default Button;
