"use client";
import "./style.Home.scss";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/header/Header";
import PortraitCard from "@/components/portrait-card/PortraitCard";

export default function Home() {
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

  const ref = useRef(null);
  const { scrollX } = useScroll();
  const textX = useTransform(scrollX, (value) => -value / 2);

  return (
    <>
      <Header />
      <main id="home" ref={ref}>
        <motion.div className="gallery upper">
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
        <motion.div className="title-wrapper" style={{ x: textX }}>
          <span className="title">Escape With The Louvre</span>
        </motion.div>
        <motion.div className="gallery lower">
          {data.slice(4).map((i, index) => (
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
      </main>
    </>
  );
}
