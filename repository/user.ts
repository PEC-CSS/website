import { UserResponse } from "../types/response/userResponse";
import { fetchWrapper } from "../util/httpWrapper";

const getUser = async (authToken: string): Promise<UserResponse> => {
    try {
        const response = await fetchWrapper.get({
            url: "v1/user",
            token: authToken,
        });

        console.log(`users me res :`, response);

        return {
            user: {
                ...response,
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

const getUserFromEmail = () => {};

export { getUser, getUserFromEmail };
