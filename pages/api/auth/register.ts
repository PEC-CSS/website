import { NextApiRequest, NextApiResponse } from "next";
import { fetchWrapper } from "../../../util/httpWrapper";
import { sendMail } from "../../../util/mailService";
import { RegisterResponse } from "../../../types/response/resgisterResponse";

type Data = {
    result?: RegisterResponse;
    error?: string;
};

export default async function registerHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const resp = await fetchWrapper.post({
            url: "v1/user",
            body: {
                ...req.body,
            },
        });

        const emailToken = resp.emailToken;

        await sendMail({
            toEmail: req.body.email,
            subject: "PEC ACM Membership Verification",
            message: emailToken,
        });

        res.status(200).json({
            result: {
                success: true,
            },
        });
    } catch (err: any) {
        res.status(500).json({
            error: err,
        });
    }
}
