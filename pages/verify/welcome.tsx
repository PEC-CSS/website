import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/verify.module.scss";

export default function welcome() {
    return <PageLayout title="Welcome to PECACM" heading={"Welcome to PEC ACM!"}>
        <p className={styles.message}>Please check pec id for verification mail.</p>
    </PageLayout>
}