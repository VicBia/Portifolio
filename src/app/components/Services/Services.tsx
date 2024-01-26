/* eslint-disable react/no-unescaped-entities */
import "./Services.css";

export default function Services() {
  return (
    <section className="Services">
      <div className="servHead">
        <h1>Serviços</h1>
        <p>
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>
      <div className="cardsServices">
        <div className="cardServices">
          <h2>Design</h2>
          <p>
            I specialize in web development and design, creating visually
            appealing, user-friendly digital experiences.
          </p>
        </div>
        <div className="cardServices">
          <h2>Branding</h2>
          <p>
            I'm a branding expert, crafting unique visual identities that tell
            your story and resonate with your audience.
          </p>
        </div>
        <div className="cardServices">
          <h2>UX Research</h2>
          <p>
            I specialize in user experience research, collaborating on web
            development, and ensuring user-friendly digital products.
          </p>
        </div>
        <div className="cardServices">
          <h2>Usability Testing</h2>
          <p>
            I perform usability testing and optimize designs websites based on
            real-user feedback for seamless interactions.
          </p>
        </div>
      </div>
    </section>
  );
}
