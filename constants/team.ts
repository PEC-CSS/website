const HEADS = [
  {
    name: "Vidhi Sethi",
    image: "/assets/images/team/heads/vidhi.jpg",
    post: "Secretary",
  },
  {
    name: "Bhavik Vishal Sharma",
    image: "/assets/images/team/heads/bhavik.jpg",
    post: "Joint Secretary",
  },
  {
    name: "Aayush Sharma",
    image: "/assets/images/team/heads/aayush.jpg",
    post: "Assistant Secretary",
  },
  {
    name: "Himanshi Garg",
    image: "/assets/images/team/heads/himanshi.jpeg",
    post: "Treasurer",
  },
  {
    name: "Harmanjeet Singh Sahota",
    image: "/assets/images/team/heads/harman.jpg",
    post: "Webmaster",
  },
];

const folderPath = "/assets/images/team/core";

const CORE = [
  {
    name: "Sachin",
    image: `${folderPath}/sachin.jpeg`,
    post: "Competitive Programming Lead",
  },
  {
    name: "Dheeraj Kumar",
    image: `${folderPath}/dheeraj.jpeg`,
    post: "Competitive Programming Lead",
  },
  {
    name: "Abhipsit Bajpai",
    image: `${folderPath}/abhipsit.png`,
    post: "Machine Learning Lead",
  },
  {
    name: "Amisha Gupta",
    image: `${folderPath}/amisha.jpeg`,
    post: "Machine Learning Lead",
  },
  {
    name: "Mithas Janbade",
    image: `${folderPath}/mithas.jpeg`,
    post: "Machine Learning Lead",
  },
  {
    name: "Pranav Bhatia",
    image: `${folderPath}/pranav.jpeg`,
    post: "Dev Lead",
  },
  {
    name: "Kanavpreet Singh",
    image: `${folderPath}/kanavpreet.png`,
    post: "Dev Lead",
  },
  {
    name: "Ananyaa Priyadarshini",
    image: `${folderPath}/ananyaa.jpeg`,
    post: "Dev Lead",
  },
  {
    name: "Yatin Kanwar",
    image: `${folderPath}/yatin.jpeg`,
    post: "Social Lead",
  },
  {
    name: "Anav Jain",
    image: `${folderPath}/anav.jpeg`,
    post: "Alumni Relations Lead",
  },
  {
    name: "Mihira Gupta",
    image: `${folderPath}/mihira.jpeg`,
    post: "Operations and Logistics Lead",
  },
  {
    name: "Rishuraj Pandey",
    image: `${folderPath}/rishuraj.jpeg`,
    post: "Marketing and Outreach Lead",
  },
  {
    name: "Diya Bansal",
    image: `${folderPath}/diya.jpeg`,
    post: "Women In Tech Lead",
  },
  {
    name: "Madhav",
    image: `${folderPath}/madhav.jpeg`,
    post: "Cybersecurity Lead",
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
