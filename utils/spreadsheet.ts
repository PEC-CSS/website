import { GoogleSpreadsheetRow } from "google-spreadsheet";
import  { TrendingCard }  from "../components/home/Trending";
import { JWT } from 'google-auth-library';

const { GoogleSpreadsheet } = require('google-spreadsheet');

export const fetchBranchTrending = async (trendingType: string) => {
  const jwt = new JWT({
    key : "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtfx3ndMQht6z/\n9iPKhoD4bfPm4yNbNmwwz54LVolWIA9JEymsmW1pI34og+E6QBlYiXTiJFYp4co8\nfhAHI9yDvICtlb5X8pR2aq/Y4CYemG6OuSD3GI9elQKXX5DHOOwb/75FfSVyMIXS\nsCp8G/8W/dsCA7rhR3W7rfxrZJyQvs0Oo6ewRozaghxRA8Yjit0hANDhZ5KX8gF0\nrPOpijjolEQmHVgkyzq3NmiYk4L7u8wu8f5HkQR+ZtfjUaxlwDTcKXJee9p8Dd4x\n4GgPp9K0mSMofBjTt5FOgomRG1nMibTd91eNVuLiqtmEk5HRdYMjVk/+YCC3xPgE\nnAd5/yHrAgMBAAECggEALggx5R9CNqDRtMjh9gqs67nwCMPkofTB8pIDOYJb2yga\nnljK/ou8Y6D//l1VZcNvxjPaRkyxsKt1VdU/SQr/3j7GmB6KhqRbdzpFfB0x9kMo\nRpyGUa5ed4AdQPbCaoLTbLfcir5vaBsUjRodGfIZNr0cWl8btTdzD93wq2YUXI9n\nOyH3hfIOQ0Ep8FHI4cn/APpfIrv1+3XeMpadO1BfPwpSgeHL9SVNEBRyfe7kvYqk\nx5cBd+/dixAEP3yb15i12qItzt+94UkMxgUUSIlBH41BhC27xRILcxGsXjcIsrh4\njWbo7Zt/Zg6zBZkjiZFicn6cDVVOZ3QLPvYYA/b4JQKBgQD5YgpRVEV203svj5pb\njLk9E0iair1kPOnId3mcyIxb2Cq1AjCvPmi7VQnToraAMekeQ0LSDyy1ac3E+WMI\nnxRTB3ShvPIwl5JP4XrJfaP3jYwCEa4S1D8jeksmyrTa8JlTJ5Dx5gBR13DsWSWY\nH7j9/ZNAdO+R430bvN8ADhuG/QKBgQDzzFY2gi74rXyJbeQghgNmAxIqSNuQGgpB\nQ1GDR0yC61GD2amnDpsf8FjOrCJOJMcyCtiOilRMHo11jhsIA/eeu5/llFs5jmiM\nyoKS61hBedBqWTIL3daD6ji1CKgyn5NodNdkJE0vW9F1iEsyn7DFMqOPT7FRA17U\n2oJ0CaGFBwKBgCAxM7vD8SOhsSk2lGp1BASKVLj+Z+xkoJksMxq2GMhSY1Dyc25r\n1AE6vQYA3yY1Sy6I6DtNkivo+JMQzmPyhSEiuT+XsHvtVQnSxZL1ERGHyCcMOThd\nBbmCs+jSCf6pSGGfnepcEnZ+JSmdaGj2z16aOUP81GA0yZWnD/Jl38/RAoGBAKRT\n4PCQwzRfS4geiBvb+MJz43SY81WoF61xwKmqD0pXbvRebFnsIGdgy5tSrzTY2WND\nqEA7wSIlndfU1yeJ9QgLE3Xdj7e144ayoVyCQVSw1Og6At+4wXTdFSgBE847fVJ1\nHxGi3lvDmeWM3pLazH2+6jwYzT379ZmnRzMLotFVAoGBANFQ9pQPQOnJMa7/acwT\ny8mx5omKD6UwPCKnN0tlUOZcQk7uYR+r8bc0Q2KJ7C0o1Ggw+Yk4CSGnK3uHArBK\nG2X0BTnxW7phqzIIYuWDItDTeTjHQWmEpSX+fS1siFnwQ5qEMRb42x9sPiqZiLPK\n8WTuFGQ5lOWtdStMJ6q/xzWu\n-----END PRIVATE KEY-----\n",
    email : "acm-website-intss@intss-393709.iam.gserviceaccount.com",
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
    key : "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtfx3ndMQht6z/\n9iPKhoD4bfPm4yNbNmwwz54LVolWIA9JEymsmW1pI34og+E6QBlYiXTiJFYp4co8\nfhAHI9yDvICtlb5X8pR2aq/Y4CYemG6OuSD3GI9elQKXX5DHOOwb/75FfSVyMIXS\nsCp8G/8W/dsCA7rhR3W7rfxrZJyQvs0Oo6ewRozaghxRA8Yjit0hANDhZ5KX8gF0\nrPOpijjolEQmHVgkyzq3NmiYk4L7u8wu8f5HkQR+ZtfjUaxlwDTcKXJee9p8Dd4x\n4GgPp9K0mSMofBjTt5FOgomRG1nMibTd91eNVuLiqtmEk5HRdYMjVk/+YCC3xPgE\nnAd5/yHrAgMBAAECggEALggx5R9CNqDRtMjh9gqs67nwCMPkofTB8pIDOYJb2yga\nnljK/ou8Y6D//l1VZcNvxjPaRkyxsKt1VdU/SQr/3j7GmB6KhqRbdzpFfB0x9kMo\nRpyGUa5ed4AdQPbCaoLTbLfcir5vaBsUjRodGfIZNr0cWl8btTdzD93wq2YUXI9n\nOyH3hfIOQ0Ep8FHI4cn/APpfIrv1+3XeMpadO1BfPwpSgeHL9SVNEBRyfe7kvYqk\nx5cBd+/dixAEP3yb15i12qItzt+94UkMxgUUSIlBH41BhC27xRILcxGsXjcIsrh4\njWbo7Zt/Zg6zBZkjiZFicn6cDVVOZ3QLPvYYA/b4JQKBgQD5YgpRVEV203svj5pb\njLk9E0iair1kPOnId3mcyIxb2Cq1AjCvPmi7VQnToraAMekeQ0LSDyy1ac3E+WMI\nnxRTB3ShvPIwl5JP4XrJfaP3jYwCEa4S1D8jeksmyrTa8JlTJ5Dx5gBR13DsWSWY\nH7j9/ZNAdO+R430bvN8ADhuG/QKBgQDzzFY2gi74rXyJbeQghgNmAxIqSNuQGgpB\nQ1GDR0yC61GD2amnDpsf8FjOrCJOJMcyCtiOilRMHo11jhsIA/eeu5/llFs5jmiM\nyoKS61hBedBqWTIL3daD6ji1CKgyn5NodNdkJE0vW9F1iEsyn7DFMqOPT7FRA17U\n2oJ0CaGFBwKBgCAxM7vD8SOhsSk2lGp1BASKVLj+Z+xkoJksMxq2GMhSY1Dyc25r\n1AE6vQYA3yY1Sy6I6DtNkivo+JMQzmPyhSEiuT+XsHvtVQnSxZL1ERGHyCcMOThd\nBbmCs+jSCf6pSGGfnepcEnZ+JSmdaGj2z16aOUP81GA0yZWnD/Jl38/RAoGBAKRT\n4PCQwzRfS4geiBvb+MJz43SY81WoF61xwKmqD0pXbvRebFnsIGdgy5tSrzTY2WND\nqEA7wSIlndfU1yeJ9QgLE3Xdj7e144ayoVyCQVSw1Og6At+4wXTdFSgBE847fVJ1\nHxGi3lvDmeWM3pLazH2+6jwYzT379ZmnRzMLotFVAoGBANFQ9pQPQOnJMa7/acwT\ny8mx5omKD6UwPCKnN0tlUOZcQk7uYR+r8bc0Q2KJ7C0o1Ggw+Yk4CSGnK3uHArBK\nG2X0BTnxW7phqzIIYuWDItDTeTjHQWmEpSX+fS1siFnwQ5qEMRb42x9sPiqZiLPK\n8WTuFGQ5lOWtdStMJ6q/xzWu\n-----END PRIVATE KEY-----\n",
    email : "acm-website-intss@intss-393709.iam.gserviceaccount.com",
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

