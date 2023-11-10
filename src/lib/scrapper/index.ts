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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateConverter = (date: string) => {
    const startDateData = date
      .split(" ", 3)
      .map((e) =>
        isNaN(parseInt(e)) === true ? months.indexOf(e) + 1 : parseInt(e)
      )
      .reverse()
      .join("-");
    const endDateData = date
      .split(" ")
      .splice(4)
      .map((e) =>
        isNaN(parseInt(e)) === true ? months.indexOf(e) + 1 : parseInt(e)
      )
      .reverse()
      .join("-");
    return [new Date(startDateData), new Date(endDateData)];
  };

  try {
    const res = await axios.get(url, options);
    const $ = cheerio.load(res.data);

    const mainLinkTitle = [$(".Card_Main_link").text().trim()];
    const mainLinkDate = [$(".Card_Main_date").text().trim()];
    const mainLinkSubtitle = [$(".Card_Main_subtitle").text().trim()];

    const secondaryTitle = $(
      ".Expositions_Grid_content .Card_child .Card_Secondary_title"
    )
      .get()
      .map((e) => $(e).text().trim());

    const secondarySubTitle = $(
      ".Expositions_Grid_content .Card_child .Card_Secondary_subtitle"
    )
      .get()
      .map((e) => $(e).text().trim());

    const secondaryExhibitionDate = $(
      ".Expositions_Grid_content .Expositions_Grid_item .Card_Secondary_card .Card_child .Card_Secondary_date"
    )
      .get()
      .map((e) => $(e).text());
    const title = mainLinkTitle.concat(secondaryTitle);
    const subTitle = mainLinkSubtitle.concat(secondarySubTitle);
    const date = mainLinkDate
      .concat(secondaryExhibitionDate)
      .map((e) => dateConverter(e));

    console.log(data);
  } catch (error: any) {
    throw new Error(`Failed to scrape data: ${error.message}`);
  }
}
