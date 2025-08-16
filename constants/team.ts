const HEADS = [
    {
        name: "Gurmehar Singh",
        image: "/assets/images/team/heads/Gurmehar.jpeg",
        post: "Chairperson",
    },
    {
        name: "Sambhav Jain",
        image: "/assets/images/team/heads/Sambhav.jpeg",
        post: "Vice Chairperson",
    },
    {
        name: "Gaurav Gupta",
        image: "/assets/images/team/heads/gaurav.jpg",
        post: "Treasurer",
    },
    {
        name: "Anubhav Pandey",
        image: "/assets/images/team/heads/anubhav.jpeg",
        post: "Webmaster",
    },
];

const folderPath = "/assets/images/team/core";

const CORE = [
    {
        name: "Harshit Minhas",
        image: `${folderPath}/harshit.jpeg`,
        post: "CP Lead",
    },
    {
        name: "Chetanya Mahana",
        image: `${folderPath}/chetanya.jpeg`,
        post: "CP Lead",
    },
    {
        name: "Arnav Vikas Garg",
        image: `${folderPath}/arnav.jpeg`,
        post: "AI Lead",
    },
    {
        name: "Aaditya Sharma",
        image: `${folderPath}/aaditya.jpeg`,
        post: "AI Lead",
    },
    {
        name: "Hardik Ahuja",
        image: `${folderPath}/hardik.jpeg`,
        post: "AI Lead",
    },
    {
        name: "Kritika Jari",
        image: `${folderPath}/kritika.jpeg`,
        post: "Dev Lead",
    },
    {
        name: "Harshul Arora",
        image: `${folderPath}/harshul.jpeg`,
        post: "Dev Lead",
    },
    {
        name: "Raghav Sharma",
        image: `${folderPath}/raghav.jpeg`,
        post: "Open Source Lead",
    },
    {
        name: "Aryan",
        image: `${folderPath}/aryan.png`,
        post: "Cyber Lead",
    },
    {
        name: "Keshav Arora",
        image: `${folderPath}/keshav.jpeg`,
        post: "Cyber Lead",
    },
    {
        name: "Prasuk",
        image: `${folderPath}/Prasuk.jpeg`,
        post: "Socials Lead",
    },
    {
        name: "Shreya Pahuja",
        image: `${folderPath}/shreya.jpeg`,
        post: "Socials Lead",
    },
    {
        name: "Akansha",
        image: `${folderPath}/akansha.jpeg`,
        post: "WIT Lead",
    },
    {
        name: "Vanshika",
        image: `${folderPath}/vanshika.jpeg`,
        post: "WIT Lead",
    },
];

const rootTechPath = "/assets/illustrations/tech";
const DEVELOPERS = [
    {
        name: "Harshpreet Singh Johar",
        image: "/assets/images/team/heads/harshpreet.png",
        post: "Full Stack",
        tech: getTechAssets(["nextjs", "spring", "supabase", "do", "fi"]),
    },
    {
        name: "Manjot Singh Oberoi",
        image: "/assets/images/team/heads/manjot.png",
        post: "Full Stack",
        tech: getTechAssets(["nextjs", "spring", "supabase"]),
    },
    {
        name: "Sanil Gupta",
        image: `/assets/images/team/heads/Sanil_Gupta.png`,
        post: "Backend",
        tech: getTechAssets(["spring", "supabase"]),
    },
    {
        name: "Abhinav Rawal",
        image: `/assets/images/team/heads/Abhinav_Rawal.png`,
        post: "Backend",
        tech: getTechAssets(["spring", "supabase"]),
    },
    {
        name: "Ishwarendra Jha",
        image: "/assets/images/team/heads/ishwarendra.png",
        post: "Frontend",
        tech: getTechAssets(["nextjs", "fi"]),
    },
    {
        name: "Kriti Mahajan",
        image: "/assets/images/team/heads/kriti.png",
        post: "Designing, UI/UX",
        tech: getTechAssets(["nextjs", "fi", "ai"]),
    },
];

function getTechAssets(names: string[]): string[] {
    let assets = [];
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        assets.push(`${rootTechPath}/${element}.svg`);
    }
    return assets;
}

export { HEADS, CORE, DEVELOPERS };
