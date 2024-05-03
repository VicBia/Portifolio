/* eslint-disable react/no-unescaped-entities */
import "./About.css";

export default function About() {
  return (
    <section className="About" id="about">
      <div className="aboutme">
        <h1>Sobre Mim</h1>
        <p>
          Sou estudante atualmente cursando Engenharia da Computação, também
          estudo programação, principalmente a linguagem Java. Aprendi bastante
          sobre as outras linguagem e a lógica dentro delas, afinal é muito
          importante se manter em aprendizagem constante, principalmente na área
          tecnológica. <br />Dedico meu tempo livre pra estudar mais sobre as
          linguagens de programação e me manter atualizado das evoluções
          tecnológicas constantes. Me adapto rapidamente, mesmo fora da zona de
          conforto e gosto de aprender. Essa flexibilidade ajuda no meu
          desenvolvimento pessoal e profissional. <br />Tenho como objetivo agregar ao
          mundo da maneira que eu puder e crescer tanto pessoalmente quando
          profissionalmente, afinal nessa minha passagem, quero poder fazer
          aquilo que estiver ao meu alcance e também ir um pouco mais além.
        </p>
      </div>
      <div className="container">
        <div className="infoCard">
          <h2>23</h2>
          <span>Projetos Feitos</span>
        </div>
        <div className="infoCard">
          <h2>2+</h2>
          <span>Anos de Experiência</span>
        </div>
        <div className="infoCard">
          <h2>55+</h2>
          <span>Clientes Atendidos</span>
        </div>
      </div>
    </section>
  );
}
