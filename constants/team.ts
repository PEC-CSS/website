const HEADS = [
    {
        name: "Ankur Gupta",
        image: "/assets/images/team/heads/Ankur_Gupta.png",
        post: "Chairperson",
    },
    {
        name: "Priyanka Soni",
        image: "/assets/images/team/heads/Priyanka_Soni.png",
        post: "Vice Chairperson",
    },
    {
        name: "Akash Rout",
        image: "/assets/images/team/heads/Akash_Rout.png",
        post: "Treasurer",
    },
    {
        name: "Sparsh Singh Bhatia",
        image: "/assets/images/team/heads/sparsh.png",
        post: "Webmaster",
    },
];

const folderPath = "/assets/images/team/core";

const CORE = [
    {
        name: "Yashita Bansal",
        image: `${folderPath}/Yashita_Bansal.png`,
        post: "CP Lead",
    },
    {
        name: "Harsh Rishi Miglani",
        image: `${folderPath}/Harsh_Rishi_Miglani.png`,
        post: "CP Lead",
    },
    {
        name: "Chirag Garg",
        image: `${folderPath}/Chirag_garg.png`,
        post: "AI Lead",
    },
    {
        name: "Dhruv Goyal",
        image: `${folderPath}/Dhruv_Goyal.png`,
        post: "AI Lead",
    },
    {
        name: "Jaskeerat",
        image: `${folderPath}/Jaskeerat.png`,
        post: "Dev Lead",
    },
    {
        name: "Ujjawal Gupta",
        image: `${folderPath}/Ujjawal_Gupta.png`,
        post: "Dev Lead",
    },
    {
        name: "Nandini Gera",
        image: `${folderPath}/Nandini_Gera.png`,
        post: "WiT Lead",
    },
    {
        name: "Sugam Arora",
        image: `${folderPath}/Sugam_Arora.png`,
        post: "Cyber Lead",
    },
    {
        name: "Vishav Garg",
        image: `${folderPath}/Vishav_Garg.png`,
        post: "Socials Lead",
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
