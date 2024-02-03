export interface Transaction {
    id: number;
    name: string;
    role: "ORGANIZER" | "PARTICIPANT" | "PUBLICITY";
    xp_gained: number;
    timestamp: string;
}
