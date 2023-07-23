import Image from "next/image";
import styles from "../../styles/pages/index.module.scss";

export default function Branches() {
    return <div className={styles.branch_illustration}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/assets/illustrations/branches.svg"} alt={"Branches at PECACM"} />
    </div>
}