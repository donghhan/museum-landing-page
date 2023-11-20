import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const keys = [
    "cl010065872",
    "cl010052610",
    "cl010052642",
    "cl010052669",
    "cl010052688",
    "cl010052692",
    "cl010052781",
    "cl010052784",
  ];

  try {
    const data = await Promise.all(
      keys.map((key: string) =>
        fetch(`https://collections.louvre.fr/ark:/53355/${key}.json`).then(
          (response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch");
            }
            return response.json();
          }
        )
      )
    );
    return NextResponse.json({ data });
  } catch (error: any) {
    console.log(error);
  }
}
