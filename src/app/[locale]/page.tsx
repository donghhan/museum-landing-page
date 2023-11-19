"use client";
import "./style.Home.scss";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/header/Header";
import PortraitCard from "@/components/portrait-card/PortraitCard";

async function FetchHomePortrait(key: string) {
  return fetch(`https://collections.louvre.fr/ark:/53355/${key}.json`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());
  // .then((response) => console.log(JSON.stringify(response)));
}

export default function Home() {
  const upperKeys = [
    "cl010065872",
    "cl010052610",
    "cl010052642",
    "cl010052669",
  ];
  const upperPortraits = upperKeys.map((key: string) => FetchHomePortrait(key));

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Header />
      <main id="home" ref={ref}>
        <motion.div
          className="gallery upper"
          style={{ y: backgroundY }}
        ></motion.div>
        <motion.div className="title-wrapper" style={{ y: textY }}>
          <span className="title">Escape With The Louvre</span>
        </motion.div>
        <div className="gallery lower"></div>
      </main>
    </>
  );
}
