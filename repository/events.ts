import { EventResponse } from "../types/response/eventResponse";
import { TransactionResponse } from "../types/response/transactionResponse";
import { fetchWrapper } from "../util/httpWrapper";

const getEvents = async (duration: {
    startDate: string;
    endDate: string;
}): Promise<EventResponse> => {
    try {
        const response = await fetchWrapper.get({
            // add a high pageSize since the default is 20
            url: `v1/events?eventsFrom=${duration.startDate}&eventsTill=${duration.endDate}&pageSize=9999`,
        });
        return {
            events: [...response],
        };
    } catch (error: any) {
        return {
            error: {
                message: error,
            },
        };
    }
};

const getUserEvents = async (query: {
    role: string;
    pageNumber: number;
    pageSize: number;
    token: string;
}): Promise<TransactionResponse> => {
    try {
        const response = await fetchWrapper.get({
            url: `v1/user/events?eventRole=${query.role}&pageSize=${
                query.pageSize
            }&offset=${query.pageNumber * query.pageSize}`,
            token: query.token 
        });
        return {
            events: [...response],
        };
    } catch (error: any) {
        return {
            error: {
                message: error,
            },
        };
    }
};
export { getEvents, getUserEvents };
