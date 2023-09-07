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
        resource: [
            "dev", "Month long hackathon",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "https://cdn.discordapp.com/attachments/981855994340597810/1149264104226295868/image.png",
        ],
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
        resource: [
            "cp", "DSA mock round for internships",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "https://cdn.discordapp.com/attachments/981855994340597810/1149264104226295868/image.png",
        ],
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
        resource: [
            "cp", "DSA mock round for internships",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "https://cdn.discordapp.com/attachments/981855994340597810/1149264104226295868/image.png",
        ],
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
        resource: [
            "ai", "Kaggle Challenge",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "",
        ],
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
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "",
        ],
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
        resource: [
            "dev", "Introduction to Web3",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "https://cdn.discordapp.com/attachments/981855994340597810/1149264104226295868/image.png",
        ],
    }
];
