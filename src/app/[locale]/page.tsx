import "./style.Home.scss";
import Image from "next/image";
import Header from "@/components/header/Header";

async function FetchHomePortrait(key: string) {
  return fetch(`https://collections.louvre.fr/ark:/53355/${key}.json`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

export default async function Home() {
  const keys = ["cl010065872"];
  const portraits = keys.map((key: string) => FetchHomePortrait(key));

  return (
    <main id="home">
      <Header />
      <section id="container">
        <div className="gallery upper"></div>
        <div className="title-wrapper">
          <span className="title">Escape With The Louvre</span>
        </div>
        <div className="gallery lower"></div>
      </section>
    </main>
  );
}
