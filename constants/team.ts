const HEADS = [
    {
        name: "Harshpreet Singh Johar",
        image: "/assets/images/team/heads/harshpreet.png",
        post: "Chair",
    },
    {
        name: "Manjot Singh Oberoi",
        image: "/assets/images/team/heads/manjot.png",
        post: "Vice Chair",
    },
    {
        name: "Ishwarendra Jha",
        image: "/assets/images/team/heads/ishwarendra.png",
        post: "Secretary/Treasurer",
    },
    {
        name: "Kriti Mahajan",
        image: "/assets/images/team/heads/kriti.png",
        post: "Webmaster",
    },
];

const folderPath = "/assets/images/team/core";

const CORE = [
    {
        name: "Abhinav Rawal",
        image: `${folderPath}/Abhinav_Rawal.png`,
        post: "CP Lead",
    },
    {
        name: "Harasees Singh",
        image: `${folderPath}/harasees_singh.png`,
        post: "CP Co-Lead",
    },
    {
        name: "Uttam Mittal",
        image: `${folderPath}/Uttam_Mittal.png`,
        post: "AI Lead",
    },
    {
        name: "Armaan Badhan",
        image: `${folderPath}/armaan_badhan.png`,
        post: "AI Co-Lead",
    },
    {
        name: "Vinayak Gupta",
        image: `${folderPath}/Vinayak_Gupta.png`,
        post: "Dev : Cloud Lead",
    },
    {
        name: "Dhruv Bansal",
        image: `${folderPath}/Dhruv.png`,
        post: "Dev : Web Lead",
    },
    {
        name: "Jagjit Singh",
        image: `${folderPath}/jagjit_singh.png`,
        post: "Dev : Open Source Lead",
    },
    {
        name: "Kanika Kaur",
        image: `${folderPath}/Kanika Kaur.png`,
        post: "WiT Lead",
    },
    {
        name: "Kanisha Kaur",
        image: `${folderPath}/Kanisha Kaur.png`,
        post: "WiT Co-Lead",
    },
    {
        name: "Sanil Gupta",
        image: `${folderPath}/Sanil_Gupta.png`,
        post: "Cyber Lead",
    },
    {
        name: "Kavya Rishi",
        image: `${folderPath}/kavya_rishi.png`,
        post: "Cyber Co-Lead",
    },
    {
        name: "Aayush Singh Panwar",
        image: `${folderPath}/Aayush_Singh_Panwar.png`,
        post: "Socials Lead",
    },
    {
        name: "Saniya Singla",
        image: `${folderPath}/Saniya Singla.png`,
        post: "Socials Co-Lead",
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
        image: `${folderPath}/Sanil_Gupta.png`,
        post: "Backend",
        tech: getTechAssets(["spring", "supabase"]),
    },
    {
        name: "Abhinav Rawal",
        image: `${folderPath}/Abhinav_Rawal.png`,
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
