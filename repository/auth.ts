import { AuthResponseState } from "../types/response/authResponse";
import { ErrorResponse } from "../types/response/errorResponse";
import { fetchWrapper } from "../util/httpWrapper";

const login = ({
    email,
    password,
}: {
    email: string;
    password: string;
}): AuthResponseState => {
    fetchWrapper
        .post({
            url: "v1/user/login",
            body: { email, password },
        })
        .then((res) => {
            return {
                ...res,
            };
        })
        .catch((res: ErrorResponse) => {
            return {
                error: res,
            };
        });
    return {};
};

const register = () => {};

export { login, register };
