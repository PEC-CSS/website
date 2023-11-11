import { EventResponse } from "../types/response/eventResponse";
import { fetchWrapper } from "../util/httpWrapper";

const getEvents = async (duration: {
    startDate: string;
    endDate: string;
}): Promise<EventResponse> => {
    try {
        const response = await fetchWrapper.get({
            url: `v1/events?eventsFrom=${duration.startDate}&eventsTill=${duration.endDate}`,
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
