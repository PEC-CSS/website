import { User } from "../user";
import { ErrorResponse } from "./errorResponse";

export interface UserResponse {
    user?: User;
    error?: ErrorResponse
}