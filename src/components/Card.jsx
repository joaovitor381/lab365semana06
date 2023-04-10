import "./Card.css";

function Card({ usuario }) {
  return (
    <div className="card">
      <img className="card-logo" src={usuario.foto} alt={usuario.nome} />
      <div className="card-dados">
        <h1>{usuario.nome}</h1>
        <h2>Idade: {usuario.idade} anos</h2>
        <div className="card-contatos">
          <a href={usuario.github} target="_blank">
            <box-icon
              type="logo"
              name="github"
              color="#ed0000"
              size="md"
              title="https://github.com/joaovitor381"
            ></box-icon>
          </a>
          <a href={usuario.linkedin} target="_blank">
            <box-icon
              type="logo"
              name="linkedin"
              color="#ed0000"
              size="md"
              title="https://www.linkedin.com/in/jo%C3%A3ovitor407/"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
