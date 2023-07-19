import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import { BRANCHES } from "../../constants/branch";
import { useRouter } from "next/router";
import styles from "../../styles/pages/branch.module.scss";
import CustomDropdown from "../../components/branch/CustomDropdown";
import { FiChevronDown } from "react-icons/fi";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";
import Trending from "../../components/home/Trending";

const branchHeading = (branch: string) => {
    const branchList = Object.keys(BRANCHES);

    return (
        <div className={styles.headerText}>
            <span className={styles.sideText}>{">>"} On Branch</span>
            <span>
                <CustomDropdown 
                    icon={<FiChevronDown />}
                    currentBranch={branch}
                    branchList={branchList}
                />
            </span>
            <span className={styles.sideText}>, Nothing to commit.</span>
        </div>
    )
}

type Props = {
    branch: string;
    name: string;
    whoAreWe: string[];
    whatWeDo: string[];
    logoUrl: string;
    alias: string;
}

export default function Branch({ branch, name, whoAreWe, whatWeDo, logoUrl, alias }: Props) {
    const router = useRouter();
    return (
        <PageLayout title={`${branch} | ACM at PEC`} heading={branchHeading(branch)}>
            <div className={styles.branch} data-branch={branch}>
                <div className={styles.branchInfo}>
                    <div className={styles.content}>
                        <h3>Who are we?</h3>
                        { whoAreWe?.map((content, id) => <p key={id}>{content}</p>) }

                        <h3>What we do?</h3>
                            { whatWeDo?.map((content, id) => <p key={id + 20}>{content}</p>)}
                    </div>
                    <h1>LOGO</h1>
                </div>

                <div className={styles.trendingFromBranch}>
                    <h3>Trending from <code>acm::{alias}</code></h3>
                    {/* Dummy Text Replace it when you have card */}
                    Trending Cards 
                    <Trending />
                </div>

                <div className={styles.upNext}>
                    <h3>Up Next</h3>
                    <span className={styles.eventCard}>
                        <NextEventCard />    
                    </span>
                </div>
            </div>
        </PageLayout>
    );
}

export async function getServerSideProps({ query }: any) {
    const branch = query.branch;

    if (!Object.keys(BRANCHES).includes(branch)) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }

    const branches = BRANCHES[branch as keyof typeof BRANCHES];

    return {
        props: {
            branch: branch,
            name: branches.name,
            whoAreWe: branches.whoAreWe,
            whatWeDo: branches.whatWeDo,
            logoUrl: branches.logoUrl,
            alias: branches.alias,
        },
    };
}
