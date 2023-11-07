import axios from "axios";
import * as cheerio from "cheerio";

export async function ScrapExhibition() {
  const BRIGHTDATA_USERNAME = process.env.BRIGHTDATA_USERNAME as string;
  const BRIGHTDATA_PASSWORD = process.env.BRIGHTDATA_PASSWORD as string;
  const BRIGHTDATA_PORT = (process.env.BRIGHTDATA_PORT as string) || 22225;
  const sessionID = 100000 * Math.random() || 0;

  const url = "https://www.louvre.fr/en/what-s-on/exhibitions";

  const options = {
    auth: {
      username: `${BRIGHTDATA_USERNAME}-session-${sessionID}`,
      password: BRIGHTDATA_PASSWORD,
    },
    host: `brd.superproxy.io`,
    port: BRIGHTDATA_PORT,
    rejectUnauthorized: false,
  };

  try {
    const res = await axios.get(url, options);
    const $ = cheerio.load(res.data);

    const mainTitle = $(".Card_Main_link").text().trim();
    const mainExhibitionDate = $(".Card_Main_date").text().trim();
    const mainSubTitle = $(".Expositions_Grid_content").contents();

    const secondaryTitle = $(".Expositions_Grid_content").find("a");
    console.log(secondaryTitle);
  } catch (error: any) {
    throw new Error(`Failed to scrape data: ${error.message}`);
  }
}
