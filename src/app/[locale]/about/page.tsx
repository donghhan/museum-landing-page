import "./style.About.scss";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function About() {
  return (
    <main id="about">
      <Header />
      <section id="eugene-delacroix">
        <div className="text-wrapper">
          <h1 className="title">The musée national Eugène-Delacroix</h1>
          <p>
            Housed in Eugène Delacroix's former apartment, the Musée National
            Eugène-Delacroix is dedicated to the painter's memory. It was
            created on the initiative of some of the greatest artists of the
            1920s - such as Maurice Denis, Paul Signac, Édouard Vuillard and
            Ker-Xavier Roussel - and is a testament to their admiration for
            Delacroix and his work.
          </p>
          <Image
            src="https://api-www.louvre.fr/sites/default/files/styles/w548_h308_c1/public/2021-01/jardin-du-musee-national-eugene-delacroix.jpg"
            alt="hero thumbnail image"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section>
        <div className="text-wrapper">
          <h2 className="title">A STUDIO-MUSEUM IN THE HEART OF PARIS</h2>
          <p>
            The Musée National Eugène-Delacroix is housed in an apartment and
            studio in the central Paris neighbourhood of Saint-Germain-des-Prés,
            where Eugène Delacroix (1798-1863) lived and worked for several
            years and where he died in 1863. The studio-museum pays tribute to
            one of the greatest artists of the 19th century and provides a
            singular insight into his work.
          </p>
          <p>
            The museum was inaugurated in 1932. It owes its existence to the
            Society of Friends of Eugène Delacroix, comprising artists such as
            Maurice Denis and Paul Signac who arranged for Delacroix’s last home
            to be turned into a museum. The Musée National Eugène-Delacroix was
            affiliated with the Louvre in 2004.
          </p>
        </div>
      </section>
      <section>
        <div className="text-wrapper">
          <Image
            src="https://www.musee-delacroix.fr/IMG/arton679.jpg"
            alt="section thumbnail"
            width={500}
            height={500}
          />
          <h2 className="title">WHAT DOES THE MUSEUM DISPLAY?</h2>
          <p>
            The masterpieces on display in Eugène Delacroix’s last apartment and
            studio include Mary Magdalene in the Desert (a painting greatly
            admired by Baudelaire), The Education of the Virgin, Romeo and
            Juliet and the fresco Bacchus with a Tiger. There are also lesser
            known works such as the Study of Bindings, Oriental Jacket and
            Figures after Goya, characteristic of the artist’s creativity, and a
            model for the decor of the library at the Assemblée Nationale.
          </p>
          <p>
            Sketches, finished paintings, prints and drawings in various
            techniques introduce visitors to the broad range of the artist’s
            talent and cast light on his creative process. The museum also
            displays portraits of Delacroix and copies of his major works (The
            Death of Sardanapalus, Women of Algiers, etc.) by his friends or
            admirers such as Henri Fantin-Latour.
          </p>
        </div>
      </section>
    </main>
  );
}
