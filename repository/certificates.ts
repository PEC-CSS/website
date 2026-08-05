import { fetchWrapper } from "../util/httpWrapper";

export interface Certificate {
  id: number;
  recipientName: string;
  recipientEmail: string;
  certificateUrl?: string;
  event?: { id: number; title?: string };
  issueDate: string;
}

export const getCertificates = async (
  token: string,
  eventId?: number
): Promise<Certificate[]> => {
  const params = eventId ? `?eventId=${eventId}` : "";
  return fetchWrapper.get({
    url: `api/certificates${params}`,
    token,
  });
};

export const getCertificateById = async (
  id: number,
  token: string
): Promise<Certificate> => {
  return fetchWrapper.get({ url: `api/certificates/${id}`, token });
};

export const createCertificate = async (
  certificate: {
    recipientName: string;
    recipientEmail: string;
    event: { id: number };
    issueDate: string;
  },
  token: string
): Promise<Certificate> => {
  return fetchWrapper.post({
    url: "api/certificates",
    body: certificate,
    token,
  });
};

export const deleteCertificate = async (id: number, token: string) => {
  return fetchWrapper.delete({ url: `api/certificates/${id}`, token });
};

export const downloadCertificate = (id: number): string => {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : process.env.BACKEND;
  return `${backendUrl}/api/certificates/${id}/download`;
};

export const massMailCertificates = async (
  eventId: number,
  token: string
): Promise<string> => {
  return fetchWrapper.post({
    url: `api/certificates/mass-mail/${eventId}`,
    body: {},
    token,
  });
};

export const uploadCsvCertificates = async (
  eventId: number,
  file: File,
  token: string
): Promise<string> => {
  return fetchWrapper.upload({
    url: `api/certificates/upload-csv/${eventId}`,
    file,
    fieldName: "file",
    token,
  });
};

export const uploadTemplate = async (
  eventId: number,
  file: File,
  token: string
) => {
  return fetchWrapper.upload({
    url: `api/templates/upload/${eventId}`,
    file,
    fieldName: "file",
    token,
  });
};

export const getEvents = async (token: string): Promise<any[]> => {
  return fetchWrapper.get({
    url: "v1/events?eventsFrom=2020-01-01&eventsTill=2030-12-31&pageSize=9999",
    token,
  });
};
