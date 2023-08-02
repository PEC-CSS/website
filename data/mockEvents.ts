import { Event } from "react-big-calendar";
import moment from "moment";

export const mockEvents = <Event[]>[
    {
        start: moment(
            {
                month: 6,
                day: 19,
                year: 2023
            }
        ).toDate(),
        end: moment(
            {
                month: 7,
                day: 19,
                year: 2023
            }
        ).toDate(),
        title: "Ideathon 3.0",
        resource: "Month long hackathon",
    },
    {
        start: moment(
            {
                month: 6,
                day: 26,
                year: 2023,
                hour: 19,
                minute: 30,
            }
        ).toDate(),
        end: moment(
            {
                month: 6,
                day: 26,
                year: 2023,
                hour: 21,
                minute: 30,
            }
        ).toDate(),
        title: "CodeBattle_2023.1",
        resource: "DSA mock round for internships",
    },
    {
        start: moment(
            {
                month: 7,
                day: 12,
                year: 2023,
                hour: 19,
                minute: 30,
            }
        ).toDate(),
        end: moment(
            {
                month: 7,
                day: 12,
                year: 2023,
                hour: 21,
                minute: 30,
            }
        ).toDate(),
        title: "CodeBattle_2023.2",
        resource: "DSA mock round for internships",
    }
]