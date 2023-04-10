import "./App.css";
import Card from "./components/Card";

function App() {
  const usuario = {
    nome: "João Vitor",
    idade: 24,
    foto: "https://avatars.githubusercontent.com/u/117750400?v=4",
    github: "https://github.com/joaovitor381",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3ovitor407/",
  };

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  );
}

export default App;
