import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { BRANCHES } from "../../constants/branch";
import { useRouter } from "next/router";

export default function Branch({branch}: {branch: string}) {
    const router = useRouter();

    return <PageLayout title={`${branch} | ACM at PEC`}>
        {branch}
    </PageLayout>
}

export async function getServerSideProps({query}: any) {
    const branch = query.branch;

    if(!Object.keys(BRANCHES).includes(branch)) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        }
    }

    return {
        props: {
            branch: branch
        }
    }
}