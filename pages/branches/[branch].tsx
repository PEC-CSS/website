import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { BRANCHES } from "../../constants/branch";
import { useRouter } from "next/router";
import styles from "../../styles/pages/branch.module.scss";
import CustomDropdown from "../../components/branch/CustomDropdown";
import { FiChevronDown } from "react-icons/fi";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";
import Trending from "../../components/home/Trending";
import Image from "next/image";

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
    subgroupColor?: string;
    leads: {
        image: string;
        name: string;
        post: string;
    }[];
}

export default function Branch({ branch, name, whoAreWe, whatWeDo, logoUrl, alias, subgroupColor, leads }: Props) {
    const router = useRouter();
    let lightenBy = 0;
    return (
        <PageLayout
            title={`${name} | ACM at PEC`}
            heading={branchHeading(branch)}
            bannerColor={subgroupColor}
            footerColor={subgroupColor}
            branch={alias}
            headerImgUrl={`/assets/logos/${alias}.png`}
        >
            <div className={styles.branch} data-branch={branch}>
                <div className={styles.branchInfo}>
                    <div className={styles.content}>
                        <h3>Who are we?</h3>
                        {whoAreWe?.map((content, id) => <p key={id}>{content}</p>)}

                        <h3>What we do?</h3>
                        {whatWeDo?.map((content, id) => <p key={id + 20}>{content}</p>)}
                    </div>

                    <div className={styles.subgroupLogo} style={{ border: `10px solid ${subgroupColor}` }}>
                        <Image
                            src={logoUrl as string}
                            alt={`${name}-logo`}
                            width={250}
                            height={250}
                        />
                    </div>
                </div>

                <div className={styles.branchLeads}>
                    <h3>Our Leads</h3>
                    <div className={styles.leads} style={{ backgroundColor: lightenColor(subgroupColor as string, lightenBy) }}>
                        {
                            leads.map((lead, id) => {
                                return <div key={id + 40} className={styles.lead}>
                                    <Image
                                        height={70}
                                        width={70}
                                        alt={`${alias} lead ${id}`}
                                        src={lead.image}
                                    />
                                    <div className={styles.data}>
                                        <p className={styles.name}>{lead.name}</p>
                                        <p className={styles.post}>{lead.post}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className={styles.trendingFromBranch}>
                    <h3>Trending from <code>acm::{alias}</code></h3>
                    <Trending trendingType={alias} />
                </div>

                <div className={styles.upNext}>
                    <h3>Up Next</h3>
                    <span className={styles.eventCard}>
                        <NextEventCard branch={alias} />
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
            logoUrl: `/assets/logos/${branches.alias}.png`,
            alias: branches.alias,
            subgroupColor: branches.color,
            leads: branches.leads,
        },
    };
}

const lightenColor = (col: string, amount: number) => {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amount;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amount;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amount;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}