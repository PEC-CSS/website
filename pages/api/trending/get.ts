import type { NextApiRequest, NextApiResponse } from "next";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheetRow, GoogleSpreadsheet } from "google-spreadsheet";

type Data = {
    result?: Trending[];
    error?: string;
};

type Trending = {
    title: string;
    description: string;
    image: string;
    content: string;
    branch: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { branch } = req.body;

    const privateKey = process.env.SPREADSHEET_KEY;
    const serviceEmail = process.env.SPREADSHEET_EMAIL;
    const spreadsheetId = process.env.SPREADSHEET_ID || "0";

    const jwt = new JWT({
        key: privateKey,
        email: serviceEmail,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const spreadsheet = new GoogleSpreadsheet(spreadsheetId, jwt);

    let trendingCards: Trending[] = [];

    spreadsheet
        .loadInfo()
        .then(() => {
            const sheet = spreadsheet.sheetsByIndex[0];
            sheet
                .getRows()
                .then((rows) => {
                    const filteredRows: GoogleSpreadsheetRow[] =
                        branch != "home"
                            ? rows.filter((row: GoogleSpreadsheetRow) => {
                                  return row.get("Branch") === branch;
                              })
                            : rows;

                    trendingCards = filteredRows
                        // take the latest 12 events
                        .slice(Math.max(filteredRows.length - 12, 0))
                        .map((row: GoogleSpreadsheetRow) => {
                            const image = row.get("Image");
                            const imageUrl = `https://drive.google.com/uc?id=${getId(image)}`;
                            return {
                                title: row.get("Title"),
                                description: row.get("Description"),
                                image: imageUrl,
                                content: row.get("Content"),
                                branch: row.get("Branch")
                            };
                        });
                    res.status(200).json({
                        result: trendingCards,
                    });
                })
                .catch((e) => {
                    throw e;
                });
        })
        .catch((e) => {
            res.status(500).json({
                error: e.message,
            });
        });
}

const getId = (url : string) => {
    const arr = url.split("=");
    return arr[1];
}
