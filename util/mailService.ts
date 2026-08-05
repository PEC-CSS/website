import nodemailer from "nodemailer";
import { fetchFrontendUrl } from "./httpWrapper";

export async function sendMail({
    subject,
    toEmail,
    message,
}: {
    subject: string;
    toEmail: string;
    message: string;
}) {
    const emailUser = process.env.NODEMAILER_EMAIL;
    const emailPass = process.env.NODEMAILER_PW;

    if (!emailUser || !emailPass) {
        console.warn(
            "NODEMAILER_EMAIL/NODEMAILER_PW not configured — skipping verification email to",
            toEmail
        );
        return;
    }

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: emailUser,
            pass: emailPass,
        },
    });

    var mailOptions = {
        from: emailUser,
        to: toEmail,
        subject: subject,
        html: convertToMail(message),
    };

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error.message);
            } else {
                resolve(info);
            }
        });
    });
}

function convertToMail(message: string): string {
    const url = `${fetchFrontendUrl()}/verify?token=${message}`;
    return `<div><h1>Welcome to PECACM!</h1><p>We are excited to welcome you to this exciting community of developers and programmers.</p><p>To verify your email, click <a href=${url}>here</a></p></div>`;
}
