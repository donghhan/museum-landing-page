"use client";
import "./style.Home.scss";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/header/Header";
import PortraitCard from "@/components/portrait-card/PortraitCard";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [data, setData] = useState<PortraitData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/portrait");
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error: any) {
        console.error("Failed to fetch data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  // const technique = data[0].materialsAndTechniques;
  // const creator = data[0].creator[0].label;
  // const dateCreated = data[0].dateCreated[0].startYear;
  // const image = data[0].image[0].urlThumbnail;
  // console.log(creator);
  // console.log(dateCreated);
  // console.log(technique);
  // console.log(image);
  // console.log(data[0].title);

  return (
    <>
      <Header />
      <main id="home" ref={ref}>
        <motion.div className="gallery upper" style={{ y: backgroundY }}>
          {data.slice(0, 4).map((i, index) => (
            <div key={index}>
              <PortraitCard
                title={i.title}
                materialsAndTechniques={i.materialsAndTechniques}
                dateCreated={[{ startYear: i.dateCreated[0].startYear }]}
                image={[{ urlThumbnail: i.image[0].urlThumbnail }]}
                creator={[{ label: i.creator[0].label }]}
              />
            </div>
          ))}
        </motion.div>
        <motion.div className="title-wrapper" style={{ y: textY }}>
          <span className="title">Escape With The Louvre</span>
        </motion.div>
        <div className="gallery lower"></div>
      </main>
    </>
  );
}
