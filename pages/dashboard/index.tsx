import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/DashboardHome.module.scss"
import Trending from "../../components/home/Trending";

function DashboardHome() {
    // dummy user
    const user = {
        name: "Ken",
        designation: "Member",
        email: "msinghoberoi993@gmail.com"
    }


    return (
        <DashboardLayout title="Dashboard | ACM at PEC" heading={`Hey ${user.name},`}>
            <div>
                <h2>What&#39;s going on?</h2>
                <Trending />
            </div>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default DashboardHome;