import { Event } from "react-big-calendar";
import moment from "moment";

/*
  Resources = [
        subgroup alias,
        short subtitle (Not event name),
        para_1,
        para_2,
        ...
        para_x,
        imageUrl: leave empty ("") if no url.
    ]

    you must have keep atleast one para.
    There is not limit to para but the total content (para_1 + para_2 + ... + para_x) should be within 50 words.
*/

export const mockEvents = <Event[]>[
    {
        start: moment({
            month: 5,
            day: 6,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 5,
            day: 6,
            year: 2023,
            hour: 18,
            minute: 30,
        }).toDate(),
        title: "Ideathon v3.0 Introductory Session",
        resource: [
            "dev", "Intro Session for Month long hackathon",
            "Platform: Google Meet",
            "Hackathon enhances your resume, showcasing practical problem-solving skills and innovation",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there! ",
            "",
        ],
    },
    {
        start: moment({
            month: 5,
            day: 17,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 5,
            day: 17,
            year: 2023,
            hour: 18,
            minute: 30,
        }).toDate(),
        title: "Lockout v2",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: Discord Voice Channel",
            "DSA and CP are essential for coding interviews and real-world software development challenges",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
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
            minute: 0,
        }).toDate(),
        title: "CodeBattle_2023.1",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: Hackerearth",
            "DSA and CP are essential for coding interviews and real-world software development challenges",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
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
            minute: 20,
        }).toDate(),
        title: "CodeBattle_2023.2",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: Hackerearth",
            "DSA and CP are essential for coding interviews and real-world software development challenges",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 20,
            minute: 45,
        }).toDate(),
        end: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 23,
            minute: 0,
        }).toDate(),
        title: "Kaggle Quest Ignite- Challenge 1",
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Platform: Kaggle",
            "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 5,
            day: 10,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 7,
            day: 19,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Ideathon 3.0",
        resource: [
            "dev", "Month long hackathon",
            "Platform: Online",
            "Hackathon enhances your resume, showcasing practical problem-solving skills and innovation",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there! ",
            "",
        ],
    },
    {
        start: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 17,
            minute: 15,
        }).toDate(),
        end: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 18,
            minute: 45,
        }).toDate(),
        title: "Kaggle Tips and Tricks",
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Platform: L21",
            "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Crewspehere Keynote Session",
        resource: [
            "dev", "Introduction to Web3",
            "Platform: L21",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 13,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 13,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Intro to Competitive Programming",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: L21",
            "DSA and CP are essential for coding interviews and real-world software development challenges",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 15,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 15,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "MLtiverse - Hands on ML",
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Platform: L21",
            "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 18,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 18,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Intro to Git/github",
        resource: [
            "dev", "Introduction to version control",
            "Platform: L21",
            "Learning git and github is important for collaboration, and open-source development, enhancing employability and project management skills",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 21,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 21,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Web Wizardry 101: Unleash the Digital Magic",
        resource: [
            "dev", "Introduction to Web Development",
            "Platform: L21",
            "Web is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "",
        ],
    }

];
