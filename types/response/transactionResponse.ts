import { Transaction } from "../transaction";
import { ErrorResponse } from "./errorResponse";

export interface TransactionResponse {
    events?: Transaction[]
    error?: ErrorResponse;
}
