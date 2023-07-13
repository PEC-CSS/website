import styles from '../../styles/components/Sidebar.module.scss'
import {SocialLinks} from "../common/SocialLinks/SocialLinks";
import {FaHome} from "react-icons/fa";
import {MdAccountCircle, MdLogout} from "react-icons/md";
import {BiCalendarEvent} from "react-icons/bi";
import {AiFillTrophy} from "react-icons/ai";
import {SidebarItem} from "./SidebarItem";

const sidebarItems = [
    {
        title: "Home",
        icon: <FaHome />,
        path: "/dashboard"
    },
    {
        title: "My Profile",
        icon: <MdAccountCircle />,
        path: "/user/me"
    },
    {
        title: "Leaderboard",
        icon: <AiFillTrophy />,
        path: "/dashboard/leaderboard"
    },
    {
        title: "Events",
        icon: <BiCalendarEvent />,
        path: "/dashboard/events"
    },
    {
        title: "Logout",
        icon: <MdLogout />,
        path: "/idk"
    }
]

export const Sidebar = () => {

    const user = {
        name: "Ken",
        designation: "Member",
        dp: "https://avatars.githubusercontent.com/u/78747188?v=4"
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={user.dp} alt={""} />
                <h2>{user.name}</h2>
                <h4>{user.designation}</h4>
            </div>
            <div className={styles.items}>
                {
                    sidebarItems.map((item, index) => {
                        return <SidebarItem key={index} title={item.title} icon={item.icon} path={item.path} />
                    })
                }
            </div>
            <div className={styles.socialLinks}>
                <h2>Social Media</h2>
                <SocialLinks />
            </div>
        </div>
    )
}