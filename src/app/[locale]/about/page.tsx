"use client";
import "./style.About.scss";
import Header from "@/components/header/Header";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <main id="about">
      <Header />
      <section id="eugene-delacroix">
        <div className="text-wrapper">
          <h1 className="title">{t("hero_title")}</h1>
          <h2 className="sub-title">{t("hero_subtitle")}</h2>
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
        <h2 className="title">{t("hero_flavor_text")}</h2>
        <div className="paragraph">
          <p>{t("hero_paragraph_1")}</p>
          <p>{t("hero_paragraph_2")}</p>
          <p>{t("hero_paragraph_3")}</p>
          <p>{t("hero_paragraph_4")}</p>
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
          <h2 className="title">{t("display_title")}</h2>
          <div className="paragraph">
            <p>{t("display_paragraph_1")}</p>
            <p>{t("display_paragraph_2")}</p>
            <p>{t("display_paragraph_3")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
