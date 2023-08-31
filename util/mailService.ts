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
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        // text: message,
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
