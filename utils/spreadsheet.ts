import { GoogleSpreadsheetRow } from "google-spreadsheet";
import  { TrendingCard }  from "../components/home/Trending";
import { JWT } from 'google-auth-library';

const { GoogleSpreadsheet } = require('google-spreadsheet');

export const fetchBranchTrending = async (trendingType: string) => {
  const jwt = new JWT({
    key : "",
    email : "",
    scopes : ["https://www.googleapis.com/auth/spreadsheets"],    
    });
  const spreadsheet = new GoogleSpreadsheet(
      "1QVhtLgkaR6tdY0I-1BYX0zdtKEc2JFBJQi-FuVyKbo0", jwt
    );
  await spreadsheet.loadInfo();
  const sheet = spreadsheet.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const filteredRows: GoogleSpreadsheetRow[] = rows.filter((row: GoogleSpreadsheetRow) => {
    return row.get('branch') === trendingType;
  });
  const trendingCards: TrendingCard[] = filteredRows.slice(Math.max(filteredRows.length -3, 0)).map((row: GoogleSpreadsheetRow) => {
      return {
      title : row.get('title'),
      description : row.get('description'),
      image : row.get('image'),
      href : row.get('href'),
    };
  });
  return trendingCards;
};

export const fetchHomeTrending = async () => {
  const jwt = new JWT({
    key : "",
    email : "",
    scopes : ["https://www.googleapis.com/auth/spreadsheets"],    
    });
  const spreadsheet = new GoogleSpreadsheet(
      "1QVhtLgkaR6tdY0I-1BYX0zdtKEc2JFBJQi-FuVyKbo0", jwt
    );
  await spreadsheet.loadInfo();
  const sheet = spreadsheet.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const trendingCards: TrendingCard[] = rows.slice(Math.max(rows.length -3, 0)).map((row: GoogleSpreadsheetRow) => {
      return {
      title : row.get('title'),
      description : row.get('description'),
      image : row.get('image'),
      href : row.get('href'),
    };
  });
  return trendingCards;
};

