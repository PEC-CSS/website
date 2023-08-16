import { AuthResponseState } from "../types/response/authResponse";
import { fetchWrapper } from "../util/httpWrapper";

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
}): Promise<AuthResponseState> => {
    try {
        const response = await fetchWrapper.post({
            url: "v1/user",
            body: {
                name: `${firstName} ${lastName}`,
                sid: Number.parseInt(sid),
                branch,
                email,
                password,
            },
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

export { login, register };
