"use client";
import axios from "axios";
import { ScrapExhibition } from "@/lib/scraper";
import { useEffect } from "react";
import useSWR from "swr";

export default function Exhibition() {
  const fetcher = async (url: string) => {
    const res = await fetch(`${url}`);
  };

  const { data, error, isLoading } = useSWR(
    "/api/scrapper/exhibition",
    fetcher
  );

  // console.log(data);

  return <main>This is exhibition page</main>;
}
