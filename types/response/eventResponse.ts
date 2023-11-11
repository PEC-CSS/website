import { Event } from "../event";
import { ErrorResponse } from "./errorResponse";

export interface EventResponse {
    events?: Event[]
    error?: ErrorResponse;
}
