import { EventResponse } from "../types/response/eventResponse";
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

export { getEvents };
