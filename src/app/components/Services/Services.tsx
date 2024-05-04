/* eslint-disable react/no-unescaped-entities */
import "./Services.css";

export default function Services() {
  return (
    <section className="Services" id="services">
      <div className="servHead">
        <h1>Serviços</h1>
        <p>
          Explore meus serviços de desenvolvimento, desde a interface e
          experiência do usuário até desenvolvimento e testes. Vamos criar
          experiências digitais excepcionais juntos
        </p>
      </div>
      <div className="cardsServices">
        <div className="cardServices">
          <h2>Desenvolvim. Back-End</h2>
          <p>
            Especializo-me no desenvolvimento back-end, criando sistemas
            robustos e funcionais que alimentam as experiências digitais.
          </p>
        </div>
        <div className="cardServices">
          <h2>Integração de Banco de Dados</h2>
          <p>
            Sei integrar e gerenciar bancos de dados, garantindo que suas
            aplicações tenham acesso rápido e seguro aos dados.
          </p>
        </div>
        <div className="cardServices">
          <h2>Otimização de Desempenho</h2>
          <p>
            Foco em otimizar o desempenho das aplicações, garantindo tempos de
            carregamento rápidos e uma experiência ágil para os usuários.
          </p>
        </div>
        <div className="cardServices">
          <h2>Segurança de Aplicações</h2>
          <p>
            Implemento medidas de segurança robustas para proteger suas
            aplicações de ameaças cibernéticas, mantendo os dados dos usuários
            seguros.
          </p>
        </div>
      </div>
    </section>
  );
}
