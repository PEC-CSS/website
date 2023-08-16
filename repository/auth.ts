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
    } catch (e: any) {
        return {
            error: e.message,
        };
    }
};

const register = () => {};

export { login, register };
