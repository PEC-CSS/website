import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/me.module.scss";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import Image from "next/image";
import React,{ useState } from "react";

function MyProfile() {
  const user = {
      name: "Ken",
      branch: "CSE",
      SID: "20103076",
      designation: "Member",
      email: "msinghoberoi993@gmail.com",
      dp: "/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F78747188%3Fv%3D4&w=128&q=75",
      //trophy: "/_next/image?url=https://img.favpng.com/15/4/1/trophy-cartoon-png-favpng-D3Eg2sgAks8xcVfmb8cCUDW7F.jpg"
    }
    
    const [events, setevents] = useState('Events');

    
  return (
    <DashboardLayout
        title="Dashboard | ACM at PEC"
    >
        <div style={{
             display: 'flex',
             flexDirection: 'row',
             justifyContent: 'space-between'
        }}>

        <div className={styles.trending}>
              <Image className={styles.userImg} src={user.dp} alt={""} height={150} width={150} />
              <div className={styles.info}>
                <h2 className={styles.header}>{user.name}, <span className={styles.designation}>{user.designation}</span></h2>
                  <h2 className={styles.header}>{user.branch}</h2>
                  <h2 className={styles.header}>{user.SID}</h2>
              </div>
          </div>
          <div className={styles.trending1}>
          <Image src="/assets/images/trophy3.png" alt={""} height={150} width={150}  />
          <div className={styles.info}>
                
                  <h1 className={styles.header}>{user.SID}</h1>
              </div>
          </div>
          </div>
          
          <div className={styles.menu}>
              <button className={styles.MenuButton} onClick ={() => setevents('Events')}>Events</button>
              <button className={styles.MenuButton} onClick ={() => setevents('History')}>History</button>
          </div>

          <div>
              {events == 'Events' ? (
                <div className={styles.cardcontainer} >
                <div className={styles.outtercard}>
                <div className={styles.card}>
                  <div className = {styles.cardcontent} >
                      <p>No Events Found</p>
                  </div>
                </div>
                </div>
                </div>
              ) :
                  (
                    <div className={styles.cardcontainer} >
                <div className={styles.outtercard}>
                <div className={styles.card}>
                  <div className = {styles.cardcontent} >
                      <p>No History Found</p>
                  </div>
                </div>
                </div>
                </div>
                      
                  )}
          </div>
          
    </DashboardLayout>
  );
};

export default MyProfile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies[Common.AUTHORIZATION];

  if (!token) {
      return {
          redirect: {
              destination: "/login",
              permanent: false,
          },
      };
  }

  return {
      props: {},
  };
}