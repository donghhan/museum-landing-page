import { ScrapExhibition } from "@/lib/scraper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const scrapedData = await ScrapExhibition();
    return NextResponse.json({ scrapedData });
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to scrap data from website: ", error.message);
  }
}
