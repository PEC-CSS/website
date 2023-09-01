import { Event } from "react-big-calendar";
import moment from "moment";

export const mockEvents = <Event[]>[
    {
        start: moment({
            month: 6,
            day: 19,
            year: 2023,
        }).toDate(),
        end: moment({
            month: 7,
            day: 19,
            year: 2023,
        }).toDate(),
        title: "Ideathon 3.0",
        resource: ["development", "Month long hackathon"],
    },
    {
        start: moment({
            month: 6,
            day: 26,
            year: 2023,
            hour: 19,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 6,
            day: 26,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        title: "CodeBattle_2023.1",
        resource: ["cp", "DSA mock round for internships"],
    },
    {
        start: moment({
            month: 7,
            day: 12,
            year: 2023,
            hour: 19,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 7,
            day: 12,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        title: "CodeBattle_2023.2",
        resource: ["cp", "DSA mock round for internships"],
    },
    {
        start: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 21,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 23,
            minute: 0,
        }).toDate(),
        title: "Kaggle Quest Ignite",
        resource: ["ai", "Kaggle Challenge"],
    },
    {
        start: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Kaggle Tips & Tricks",
        resource: ["ai", "Kaggle Challenge Discussion"],
    },
    {
        start: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Crewsphere Web 3.0 Session",
        resource: ["development", ""],
    }
];
