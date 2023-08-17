import { ErrorResponse } from "./errorResponse";
import { User } from "../user";

export interface AuthResponseState {
    jwtToken?: string;
    user?: User;
    error?: ErrorResponse;
}
