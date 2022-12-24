import React from "react";
import AboutCard from "../components/about/AboutCard";
import LeadershipCard from "../components/about/LeadershipCard";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/about.module.scss";

function about() {
    return (
        <PageLayout title="About | ACM at PEC">
            <div className={styles.banner}/>
            <div className={styles.about}>
                <AboutCard
                    title={"What is ACM?"}
                    description={
                        "ACM student chapters are groups of college or university students who are interested in computer science and information technology and are affiliated with the Association for Computing Machinery. \n\n They also offer opportunities for professional development, such as workshops, guest lectures, and networking events. ACM student chapters are a great way for students to learn more about the field of computing, gain valuable experience, and build connections with others in the industry."
                    }
                    imgUrl={
                        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    }
                />
                <AboutCard
                    title={"What is ACM Board?"}
                    description={
                        "ACM Board is our leadership and administrative team including our dev team that handles behind-scenes logistics, financing, plans and hosts ACM-wide eventsand works towards improving the CS curriculum at PEC by engaging the CS faculty and department leadership."
                    }
                    flip={true}
                    imgUrl={
                        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    }
                />
                <AboutCard
                    title={"What is ACM Committees?"}
                    description={
                        "ACM is comprised of seven committees — each serving a different topic and mission. We strive to cover a plethora of interests and encourage members to explore new topics, too!"
                    }
                    imgUrl={
                        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    }
                />
                <AboutCard
                    title={"How do I get involved?"}
                    description={
                        "No matter what your background or major is, we would love to have you at our events and activities! \n To keep up with what's happening, we recommend joining our membership portal, our discord server, and our mailing list.  We will keep you up to date with everything ACM, and earning points on the portal might even earn you a prize! \n You can search us on Social Media with the name PECACM."
                    }
                    imgUrl={
                        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    }
                />
                <div className={styles.heading}>
                    <h1 className={styles.leadership}>Leadership</h1>
                    <p className={styles.leadershipPara}>
                        Our Secretary and Joint Secretary support the entire ACM
                        community while our committee heads foster the growth of
                        their committee.
                    </p>
                </div>
                <div className={styles.leadershipGrid}>
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                    <LeadershipCard
                        name="Alex Phal"
                        post="Secretary"
                        imgUrl="/user.png"
                    />
                </div>
            </div>
        </PageLayout>
    );
}

export default about;
