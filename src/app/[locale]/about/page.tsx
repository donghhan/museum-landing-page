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
          <h2 className="sub-title">
            Housed in Eugéne Delacroix's former apartment
          </h2>
        </div>
        <div className="image-wrapper">
          <Image
            src="https://api-www.louvre.fr/sites/default/files/styles/w548_h308_c1/public/2021-01/jardin-du-musee-national-eugene-delacroix.jpg"
            alt="hero thumbnail image"
            quality={100}
            className="thumbnail"
            fill
            sizes="100%"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section id="eugene-delacroix__exp">
        <h2 className="title">
          Eugéne Delacroix was not just an outstanding painter, but also a
          gifted writer
        </h2>
        <div className="paragraph">
          <p>
            The museum was inaugurated in 1932. It owes its existence to the
            Society of Friends of Eugène Delacroix, comprising artists such as
            Maurice Denis and Paul Signac who arranged for Delacroix's last home
            to be turned into a museum. The Musée National Eugène-Delacroix was
            affiliated with the Louvre in 2004.
          </p>
          <p>
            The Musée National Eugene-Delacroix is housed in an apartment and
            studio in the central Paris neighbourhood of Saint-Germain-des-Pres,
            where Eugène Delacroix (1798-1863) lived and worked for several
            years and where he died in 1863. The studio-museum pays tribute to
            one of the greatest artists of the 19th century and provides a
            singular insight into his work.
          </p>
          <p>
            The masterpieces on display in Eugène Delacroix's last apartment and
            studio include Mary Magdalene in the Desert (a painting greatly
            admired by Baudelaire), The Education of the Virgin, Romeo and
            Juliet and the fresco Bacchus with a Tiger. There are also lesser
            known works such as the Study of Bindings, Oriental Jacket and
            Figures after Goya, characteristic of the artist's creativity, and a
            model for the decor of the library at the Assemblée Nationale.
          </p>
          <p>
            Sketches, finished paintings, prints and drawings in various
            techniques introduce visitors to the broad range of the artist's
            talent and cast light on his creative process. The museum also
            displays portraits of Delacroix and copies of his major works (The
            Death of Sardanapalus, Women of Algiers, etc.) by his friends or
            admirers such as Henri Fantin-Latour.
          </p>
        </div>
      </section>
      <section id="museum-info">
        <div className="image-wrapper">
          <Image
            src="https://www.musee-delacroix.fr/IMG/arton679.jpg"
            alt="section thumbnail"
            className="thumbnail"
            fill
            quality={100}
            sizes="100%"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-wrapper">
          <h2 className="title">What Does the Museum Display?</h2>
          <div className="paragraph">
            <p>
              The masterpieces on display in Eugène Delacroix's last apartment
              and studio include Mary Magdalene in the Desert (a painting
              greatly admired by Baudelaire), The Education of the Virgin, Romeo
              and Juliet and the fresco Bacchus with a Tiger. There are also
              lesser known works such as the Study of Bindings, Oriental Jacket
              and Figures after Goya, characteristic of the artist's creativity,
              and a model for the decor of the library at the Assemblée
              Nationale.
            </p>
            <p>
              Sketches, finished paintings, prints and drawings in various
              techniques introduce visitors to the broad range of the artist's
              talent and cast light on his creative process. The museum also
              displays portraits of Delacroix and copies of his major works (The
              Death of Sardanapalus, Women of Algiers, etc.) by his friends or
              admirers such as Henri Fantin-Latour.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
