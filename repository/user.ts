import { ErrorResponse } from "../types/response/errorResponse";
import { User } from "../types/user";
import { fetchWrapper } from "../util/httpWrapper";
import { token } from "../util/token";

const getUser = async (): Promise<User | ErrorResponse> => {
    try {
        const response = await fetchWrapper.get({
            url: "v1/user",
            token: token,
        });
        return {
            ...response,
        };
    } catch (error: any) {
        return {
            message: error,
        };
    }
};

export { getUser };
