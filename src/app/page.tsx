import styles from "./page.module.css";
import Cover from "@/app/components/Cover/Cover";
import About from "@/app/components/About/About";
import Services from "@/app/components/Services/Services";
import Portfolio from "@/app/components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="blueBack">
        <Cover />
      </div>
      <About />
      <Services />
      <Portfolio />
      {/* <Contact /> */}
    </main>
  );
}
