import styles from "../../styles/components/Sidebar.module.scss";
import { SocialLinks } from "../common/SocialLinks/SocialLinks";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { AiFillTrophy, AiOutlineMenuUnfold } from "react-icons/ai";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { parseCookies } from "nookies";
import { Common } from "../../constants/common";
import { Avatar } from "@mui/material";

const sidebarItems = [
    {
        title: "Home",
        icon: <FaHome />,
        path: "/dashboard",
    },
    {
        title: "My Profile",
        icon: <MdAccountCircle />,
        path: "/user/me",
    },
    {
        title: "Leaderboard",
        icon: <AiFillTrophy />,
        path: "/dashboard/leaderboard",
    },
    {
        title: "Events",
        icon: <BiCalendarEvent />,
        path: "/dashboard/events",
    },
    {
        title: "Logout",
        icon: <MdLogout />,
        path: "/idk",
        logout: true,
    },
];

export const Sidebar = () => {
    const cookies = parseCookies();
    const user = {
        name: cookies[Common.USERNAME],
        designation: "Member",
        dp: cookies[Common.PHOTO],
    };

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState("false");

    return (
        <>
            <AiOutlineMenuUnfold
                onClick={() => setMobileSidebarOpen("true")}
                className={styles.hamburger}
            />
            <div className={styles.sidebar} data-open={mobileSidebarOpen}>
                <div className={styles.header}>
                    <div className={styles.pfp}>
                        <Avatar
                            sx={{
                                height: 80,
                                width: 80,
                                fontSize: 36,
                                fontFamily: "Josefin Sans",
                                bgcolor: "white",
                                color: "black",
                                mb: 2,
                            }}
                            src={user.dp}
                        >
                            {user.name[0]}
                        </Avatar>
                        <CgClose
                            onClick={() => setMobileSidebarOpen("false")}
                            className={styles.close}
                        />
                    </div>
                    <h2>{user.name}</h2>
                    <h4>{user.designation}</h4>
                </div>
                <div className={styles.items}>
                    {sidebarItems.map((item, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                path={item.path}
                                logout={item.logout}
                            />
                        );
                    })}
                </div>
                <div className={styles.socialLinks}>
                    <h2>Social Media</h2>
                    <SocialLinks />
                </div>
            </div>
        </>
    );
};
