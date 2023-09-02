const HEADS = [
    {
        name: "Harshpreet Singh Johar",
        image: "/assets/images/team/heads/harshpreet.jpeg",
        post: "Chair",
    },
    {
        name: "Manjot Singh Oberoi",
        image: "/assets/images/team/heads/manjot.jpeg",
        post: "Vice Chair",
    },
    {
        name: "Ishwarendra Jha",
        image: "/assets/images/team/heads/ishwarendra.jpeg",
        post: "Secretary/Treasurer",
    },
    {
        name: "Kriti Mahajan",
        image: "/assets/images/team/heads/kriti.jpeg",
        post: "Webmaster",
    },
];

const folderPath = "/assets/images/team/core";

const CORE = [
    {
        name: "Abhinav Rawal",
        image: `${folderPath}/Abhinav_Rawal.jpg`,
        post: "CP Lead",
    },
    {
        name: "Harasees Singh",
        image: `${folderPath}/harasees_singh.jpg`,
        post: "CP Co-Lead",
    },
    {
        name: "Uttam Mittal",
        image: `${folderPath}/Uttam_Mittal.jpg`,
        post: "AI Lead",
    },
    {
        name: "Armaan Badhan",
        image: `${folderPath}/armaan_badhan.jpg`,
        post: "AI Co-Lead",
    },
    {
        name: "Vinayak Gupta",
        image: `${folderPath}/Vinayak_Gupta.jpg`,
        post: "Dev : Cloud Lead",
    },
    {
        name: "Dhruv Bansal",
        image: `${folderPath}/Dhruv.jpeg`,
        post: "Dev : Web Lead",
    },
    {
        name: "Jagjit Singh",
        image: `${folderPath}/jagjit_singh.jpeg`,
        post: "Dev : Open Source Lead",
    },
    {
        name: "Kanika Kaur",
        image: `${folderPath}/Kanika Kaur.jpeg`,
        post: "WiT Lead",
    },
    {
        name: "Kanisha Kaur",
        image: `${folderPath}/Kanisha Kaur.jpg`,
        post: "WiT Co-Lead",
    },
    {
        name: "Sanil Gupta",
        image: `${folderPath}/Sanil_Gupta.jpeg`,
        post: "Cyber Lead",
    },
    {
        name: "Kavya Rishi",
        image: `${folderPath}/kavya_rishi.jpeg`,
        post: "Cyber Co-Lead",
    },
    {
        name: "Aayush Singh Panwar",
        image: `${folderPath}/Aayush_Singh_Panwar.jpg`,
        post: "Socials Lead",
    },
    {
        name: "Saniya Singla",
        image: `${folderPath}/Saniya Singla.jpg`,
        post: "Socials Co-Lead",
    },
];

const rootTechPath = "/assets/illustrations/tech";
const DEVELOPERS = [
    {
        name: "Harshpreet Singh Johar",
        image: "/assets/images/team/heads/harshpreet.jpeg",
        post: "Full Stack",
        tech: getTechAssets(["nextjs", "spring", "supabase", "do", "fi"]),
    },
    {
        name: "Manjot Singh Oberoi",
        image: "/assets/images/team/heads/manjot.jpeg",
        post: "Full Stack",
        tech: getTechAssets(["nextjs", "spring", "supabase"]),
    },
    {
        name: "Sanil Gupta",
        image: `${folderPath}/Sanil_Gupta.jpeg`,
        post: "Backend",
        tech: getTechAssets(["spring", "supabase"]),
    },
    {
        name: "Abhinav Rawal",
        image: `${folderPath}/Abhinav_Rawal.jpg`,
        post: "Backend",
        tech: getTechAssets(["spring", "supabase"]),
    },
    {
        name: "Ishwarendra Jha",
        image: "/assets/images/team/heads/ishwarendra.jpeg",
        post: "Frontend",
        tech: getTechAssets(["nextjs", "fi"]),
    },
    {
        name: "Kriti Mahajan",
        image: "/assets/images/team/heads/kriti.jpeg",
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
