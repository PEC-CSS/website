import Papa from 'papaparse';
import {ChangeEvent} from "react";

interface CsvRow {
    [key: string]: string;
}

function getEmailColumnIndex(headers: string[]): number {
    const emailKeywords = ['email', 'mail', 'email id'];
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i].toLowerCase();
        if (emailKeywords.some(keyword => header.includes(keyword))) {
            return i;
        }
    }

    return -1;
}

export const getEmailsFromCSV = (csvData: string): string[] => {
    const results = Papa.parse<CsvRow>(csvData, {
        header: true,
        skipEmptyLines: true,
    });

    if (results.errors.length > 0) {
        console.error('Error parsing CSV:', results.errors);
        return [];
    }

    const emailColumnIndex = getEmailColumnIndex(results.meta.fields || []);

    if (emailColumnIndex === -1) {
        console.error('No email column found in the CSV.');
        return [];
    }
    return results.data.map(row => row[results.meta?.fields?.[emailColumnIndex] ?? '']);
}

export const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): string[] => {
    const file = event.target.files?.[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const csvData = e.target.result;
            return getEmailsFromCSV(csvData);
        };
    }
    return [];
};