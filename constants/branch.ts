const folderPath = "/assets/images/team/core";

const BRANCHES = {
    development: {
        name: "Development",
        whoAreWe: [
            "At PEC-ACM's Web Development Subgroup, we are a dynamic community of passionate individuals dedicated to exploring and mastering the world of web development. We strive to provide an inclusive and collaborative environment where members can enhance their skills, share knowledge, and develop innovative web solutions.",
        ],
        whatWeDo: [
            "Empower growth with workshops, hackathons & knowledge sharing. Explore diverse technologies. Shape the future of tech together. Join us to unleash your potential and collaborate with a vibrant community.",
        ],
        alias: "development",
        color: "#EF3133",
        oneLiner: "Dynamic web dev community empowering growth through workshops, hackathons, and knowledge sharing. Shape the future together! Join us!",
        leads: [
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
        ],
        
    },
    ai: {
        name: "Machine Learning",
        whoAreWe: [
            "PEC-ACM's exclusive community, fostering AI & data science exploration. Emphasis on teamwork, hackathons, research, and conference opportunities for students' engagement and growth.",
        ],
        whatWeDo: [
            "Prioritizing projects & hackathons for hands-on experience & teamwork. Apply knowledge in real-world scenarios, innovate AI solutions. Creative thinking, time constraints & judging at hackathons.",
            "Beyond hackathons, we offer workshops, guest lectures & research opportunities to broaden knowledge in AI and data science. Empowering students to excel and present their findings at conferences, fostering a collaborative learning community.",
        ],
        alias: "ai",
        color: "#FCBA28",
        oneLiner: "Hackathons, projects, workshops empower students with AI skills, teamwork, and real-world innovation. Presenting findings, fostering collaboration.",
        leads: [
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
        ],
    },
    cp: {
        name: "Competitive Programming",
        whoAreWe: [
            "We thrive on adrenaline-fueled problem-solving challenges. With a passion for algorithms, data structures, math, and logic, we foster collaboration and continuous growth, excelling in individual contests and conquering team challenges together.",
        ],
        whatWeDo: [
            "Cherishing the thrill of competitive programming, we find joy in the adrenaline rush during intense coding competitions and celebrate each accepted submission with happiness.",
            "Besides organizing various coding contests, we actively teach diverse algorithms and encourage interactive discussions."
        ],
        alias: "cp",
        color: "#5A2E8F",
        oneLiner: "Passionate problem solvers, excelling in contests and team challenges, driven by adrenaline and collaboration.",
        leads: [
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
        ],
    },
    cyber: {
        name: "Cyber",
        whoAreWe: [
            "PEC-ACM Cyber is the cybersecurity branch of ACM. We are the group of people who look at things, and think to ourselves, “I wonder how I can break this.” We are the group of people that look at the deep depths of every thing we encounter, because we understand that true security lies in the details. ",
        ],
        whatWeDo: [
            "We use our skills, and knowledge to find a way to get around challenges, go to places where we are not supposed to be, look at things hidden away from the rest of the world, and break things that are not meant to be broken. We organize, and participate in challenges where breaking things and uncovering secrets not only earns you prizes but also allows you to showcase your computer skills.",
        ],
        alias: "cyber",
        color: "#38B64B",
        oneLiner: "Exploring limits, breaking barriers, and unraveling secrets. Join PEC-ACM Cyber for cybersecurity adventures.",
        leads: [
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
        ],
    },
    socials: {
        name: "Socials",
        whoAreWe: [
            "ACM club's creative team for social media and publicity. Promote activities, design captivating materials, engage the audience, and foster a vibrant community. Attract and retain members with visually appealing content.",
        ],
        whatWeDo: [
            "We do more than create content - analyzing social media data, gathering feedback, and adapting strategies to boost our online presence and reach. Join us to unleash your creativity beyond websites and flags!"
        ],
        alias: "socials",
        color: "#CB1D8C",
        oneLiner: "PEC-ACM club's creative team - Engaging content, vibrant community. Unleash creativity beyond websites! Join us!",
        leads: [
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
        ],
    },

    wit: {
        name: "Women in Tech",
        whoAreWe: [
            "Our mission is to foster and promote female participation in ACM and tech-related events, addressing the existing gender disparity in these fields. Through strategic & focused initiatives, our subgroup aims to create a supportive and empowering environment that encourages and enables women to actively engage and excel in ACM and the broader technology community.",
        ],
        whatWeDo: [
            "By providing a platform for networking, mentorship, and professional development, we seek to empower women to pursue their passion for computing. We are committed to cultivating a diverse and inclusive community, where women can thrive and contribute their unique perspectives, talents, and ideas to shape the future of computing.",
        ],
        alias: "wit",
        color: "#3CB878",
        oneLiner: "Fostering female participation in tech. Empowering women to excel and shape computing's future. Inclusive community, join us!",
        leads: [
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
        ],
    },
};

export { BRANCHES };
