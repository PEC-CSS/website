import React, { useEffect, useState, useCallback } from "react";
import { GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import getServerCookieData from "../../lib/getServerCookieData";
import getCookieData from "../../lib/getCookieData";
import {
  getCertificates,
  createCertificate,
  deleteCertificate,
  downloadCertificate,
  massMailCertificates,
  uploadCsvCertificates,
  uploadTemplate,
  getEvents,
  Certificate,
} from "../../repository/certificates";
import styles from "../../styles/pages/certificates.module.scss";

type Status = {
  type: "success" | "error" | "info";
  message: string;
} | null;

function Certificates() {
  const { data: session } = useSession();
  const { data: cookieData } = getCookieData(session);
  const token = cookieData?.token;

  const [events, setEvents] = useState<any[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<number | "">("");
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const [singleName, setSingleName] = useState("");
  const [singleEmail, setSingleEmail] = useState("");

  const fetchEvents = useCallback(async () => {
    if (!token) return;
    try {
      const data = await getEvents(token);
      setEvents(Array.isArray(data) ? data : []);
    } catch {
      setStatus({ type: "error", message: "Failed to load events." });
    }
  }, [token]);

  const fetchCertificates = useCallback(async () => {
    if (!token || !selectedEventId) return;
    setLoading(true);
    try {
      const data = await getCertificates(token, selectedEventId as number);
      setCertificates(Array.isArray(data) ? data : []);
    } catch {
      setCertificates([]);
    } finally {
      setLoading(false);
    }
  }, [token, selectedEventId]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (selectedEventId) fetchCertificates();
  }, [selectedEventId, fetchCertificates]);

  const showStatus = (type: Status["type"], message: string) => {
    setStatus({ type, message });
    setTimeout(() => setStatus(null), 5000);
  };

  const handleUploadTemplate = async () => {
    if (!templateFile || !selectedEventId || !token) return;
    try {
      await uploadTemplate(selectedEventId as number, templateFile, token);
      showStatus("success", "Template uploaded successfully.");
      setTemplateFile(null);
    } catch (e: any) {
      showStatus("error", e?.message || "Template upload failed.");
    }
  };

  const handleUploadCsv = async () => {
    if (!csvFile || !selectedEventId || !token) return;
    try {
      const msg = await uploadCsvCertificates(
        selectedEventId as number,
        csvFile,
        token
      );
      showStatus("success", msg as string);
      setCsvFile(null);
      fetchCertificates();
    } catch (e: any) {
      showStatus("error", e?.message || "CSV import failed.");
    }
  };

  const handleGenerateSingle = async () => {
    if (!singleName.trim() || !singleEmail.trim() || !selectedEventId || !token)
      return;
    try {
      const cert = await createCertificate(
        {
          recipientName: singleName.trim(),
          recipientEmail: singleEmail.trim(),
          event: { id: selectedEventId as number },
          issueDate: new Date().toISOString().split("T")[0],
        },
        token
      );
      showStatus("success", `Certificate created for ${cert.recipientName}.`);
      setSingleName("");
      setSingleEmail("");
      fetchCertificates();
    } catch (e: any) {
      showStatus("error", e?.message || "Failed to create certificate.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!token) return;
    try {
      await deleteCertificate(id, token);
      showStatus("success", "Certificate deleted.");
      fetchCertificates();
    } catch (e: any) {
      showStatus("error", e?.message || "Failed to delete certificate.");
    }
  };

  const handleMassMail = async () => {
    if (!selectedEventId || !token) return;
    try {
      const msg = await massMailCertificates(
        selectedEventId as number,
        token
      );
      showStatus("info", msg as string);
    } catch (e: any) {
      showStatus("error", e?.message || "Mass mail failed.");
    }
  };

  const selectedEvent = events.find((e) => e.id === selectedEventId);

  return (
    <DashboardLayout
      title="Certificates | ACM at PEC"
      heading="Certificate Management"
    >
      <div className={styles.certificatesPage}>
        {status && (
          <div className={styles[status.type]}>{status.message}</div>
        )}

        <div className={styles.sectionCard}>
          <h2>Select Event</h2>
          <div className={styles.eventSelector}>
            <select
              value={selectedEventId}
              onChange={(e) =>
                setSelectedEventId(
                  e.target.value ? Number(e.target.value) : ""
                )
              }
            >
              <option value="">-- Choose an event --</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedEventId && (
          <>
            <div className={styles.sectionCard}>
              <h2>
                Upload PDF Template{" "}
                <span className={styles.badgeTemplate}>
                  {selectedEvent?.template ? "Replace" : "Required"}
                </span>
              </h2>
              <p style={{ marginBottom: "0.75rem", color: "#595959" }}>
                Upload a Canva PDF with AcroForm fields:{" "}
                <code>recipient_name</code>, <code>event_name</code>,{" "}
                <code>issue_date</code>
              </p>
              <div className={styles.sectionRow}>
                <div className={styles.fileInput}>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      setTemplateFile(e.target.files?.[0] ?? null)
                    }
                  />
                </div>
                <button
                  className={styles.uploadBtn}
                  disabled={!templateFile}
                  onClick={handleUploadTemplate}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h2>
                Bulk Import from CSV{" "}
                <span className={styles.badgeCsv}>CSV</span>
              </h2>
              <p style={{ marginBottom: "0.75rem", color: "#595959" }}>
                CSV must have columns: <code>Name</code>, <code>Email</code>
              </p>
              <div className={styles.sectionRow}>
                <div className={styles.fileInput}>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={(e) =>
                      setCsvFile(e.target.files?.[0] ?? null)
                    }
                  />
                </div>
                <button
                  className={styles.uploadBtn}
                  disabled={!csvFile}
                  onClick={handleUploadCsv}
                >
                  Import
                </button>
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h2>Generate Single Certificate</h2>
              <div className={styles.singleForm}>
                <input
                  placeholder="Recipient Name"
                  value={singleName}
                  onChange={(e) => setSingleName(e.target.value)}
                />
                <input
                  placeholder="Recipient Email"
                  type="email"
                  value={singleEmail}
                  onChange={(e) => setSingleEmail(e.target.value)}
                />
                <button
                  className={styles.generateBtn}
                  disabled={!singleName.trim() || !singleEmail.trim()}
                  onClick={handleGenerateSingle}
                >
                  Create
                </button>
              </div>
            </div>

            <div className={styles.sectionCard}>
              <div className={styles.actionRow}>
                <h2 style={{ margin: 0, flex: 1 }}>
                  Certificates ({certificates.length})
                </h2>
                <button
                  className={styles.massMailBtn}
                  disabled={certificates.length === 0}
                  onClick={handleMassMail}
                >
                  Mass Mail All
                </button>
              </div>

              {loading ? (
                <div className={styles.emptyState}>Loading...</div>
              ) : certificates.length === 0 ? (
                <div className={styles.emptyState}>
                  No certificates yet. Import via CSV or create one manually.
                </div>
              ) : (
                <div className={styles.tableWrapper}>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Issue Date</th>
                        <th style={{ textAlign: "right" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map((cert) => (
                        <tr key={cert.id}>
                          <td>{cert.recipientName}</td>
                          <td>{cert.recipientEmail}</td>
                          <td>{cert.issueDate}</td>
                          <td style={{ textAlign: "right" }}>
                            <a
                              href={downloadCertificate(cert.id)}
                              className={styles.downloadBtn}
                              style={{
                                display: "inline-block",
                                textDecoration: "none",
                                marginRight: "0.5rem",
                              }}
                            >
                              Download
                            </a>
                            <button
                              className={styles.dangerBtn}
                              onClick={() => handleDelete(cert.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Certificates;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { data } = getServerCookieData(context);
  const token = data?.token;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
