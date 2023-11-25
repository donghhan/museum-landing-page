"use client";
import "./style.Exhibition.scss";
import axios from "axios";
import { ScrapExhibition } from "@/lib/scrapper";
import { useState, useEffect } from "react";
import Header from "@/components/header/Header";
import useSWR from "swr";

export default function Exhibition() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/scrapper/exhibition").then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  console.log(data);

  return (
    <main>
      <Header />
      <section id="exhibition">
        <span className="head-title">Exhibition</span>
      </section>
    </main>
  );
}
