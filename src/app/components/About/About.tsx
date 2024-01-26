/* eslint-disable react/no-unescaped-entities */
import "./About.css";

export default function About() {
  return (
    <section className="About">
      <div className="aboutme">
        <h1>Sobre Mim</h1>
        <p>
          I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Let's collaborate and shape the future of design together.
        </p>
      </div>
      <div className="container">
        <div className="infoCard">
          <h2>502</h2>
          <span>Projetos Feitos</span>
        </div>
        <div className="infoCard">
          <h2>10+</h2>
          <span>Anos de Experiência</span>
        </div>
        <div className="infoCard">
          <h2>273+</h2>
          <span>Clientes Atendidos</span>
        </div>
      </div>
    </section>
  );
}
