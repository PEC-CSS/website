import { AuthResponseState } from "../types/response/authResponse";
import { ErrorResponse } from "../types/response/errorResponse";
import { RegisterResponse } from "../types/response/resgisterResponse";
import { fetchUrl, fetchWrapper } from "../util/httpWrapper";

const login = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<AuthResponseState> => {
    try {
        const response = await fetchWrapper.post({
            url: "v1/user/login",
            body: { email, password },
        });
        return {
            ...response,
        };
    } catch (error: any) {
        return {
            error: {
                message: error,
            },
        };
    }
};

const register = async ({
    firstName,
    lastName,
    email,
    password,
    branch,
    sid,
}: {
    firstName: string;
    lastName: string;
    password: string;
    branch: string;
    sid: string;
    email: string;
}): Promise<RegisterResponse> => {
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                name: `${firstName} ${lastName}`,
                sid: Number.parseInt(sid),
                branch,
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        if (res.status !== 200) {
            return {
                error: {
                    message: json.error,
                },
            };
        }
        if (json.result.success) {
            return {
                success: true,
            };
        }
        return {
            error: {
                message: json.error,
            },
        };
    } catch (error: any) {
        return {
            error: {
                message: error,
            },
        };
    }
};

const verify = async ({ token }: { token: string }): Promise<boolean> => {
    try {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        await fetch(fetchUrl(`v1/user/verify?token=${token}`), requestOptions);
        return true;
    } catch (error: any) {
        return false;
    }
};

export { login, register, verify };
