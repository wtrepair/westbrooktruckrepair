import type { NextPage } from "next";
import Background from "../components/background";
import Hero from "../components/hero";
import WorkItems from "../components/work-items";
import FrameComponent2 from "../components/frame-component2";
import ContactInfo from "../components/contact-info";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Newsletter from "../components/newsletter";
import GroupComponent from "../components/group-component";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.backgroundParent}>
        <Background />
        <Hero />
      </section>
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.homePageChild} />
      <div className={styles.companyInfo}>
        <div className={styles.emsContractingParent}>
          <div className={styles.emsContracting}>EMS Contracting</div>
          <div className={styles.frameParent}>
            <div className={styles.hourMobileRepairServiceParent}>
              <h1 className={styles.hourMobileRepairContainer}>
                <span>
                  <p className={styles.hourMobile}>24 Hour Mobile</p>
                  <p className={styles.hourMobile}>Repair Service</p>
                </span>
              </h1>
              <div className={styles.imageSlogan}>
                <img
                  className={styles.emsHomePageChange2}
                  loading="lazy"
                  alt=""
                  src="/ems-home-page-change-2@2x.png"
                />
                <img
                  className={styles.image4Icon}
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
            </div>
            <button className={styles.makeAnEnquiryWrapper}>
              <b className={styles.makeAnEnquiry}>Make An Enquiry</b>
            </button>
          </div>
        </div>
      </div>
      <section className={styles.frameGroup}>
        <div className={styles.workItemsParent}>
          <WorkItems />
          <FrameComponent2 />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameChild} />
          </div>
        </div>
      </section>
      <section className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <img
              className={styles.contentWrapperChild}
              loading="lazy"
              alt=""
              src="/group-48095682@2x.png"
            />
            <h1 className={styles.ourQualifiedTechnicians}>
              Our qualified technicians handle all aspects of maintenance,
              engine checks, and tractor repairs, ensuring your trucks stay in
              top condition with preventive maintenance scheduling to prevent
              costly breakdowns. Confident in our expertise, we believe you’ll
              see why we’re the only truck repair service you’ll ever need.
            </h1>
          </div>
          <div className={styles.mechanicImageContainer}>
            <img
              className={styles.emsHomePageChange1}
              loading="lazy"
              alt=""
              src="/ems-home-page-change-1@2x.png"
            />
          </div>
        </div>
      </section>
      <ContactInfo />
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <FrameComponent />
          <FrameComponent1 />
        </div>
      </section>
      <Newsletter />
      <GroupComponent />
    </div>
  );
};

export default HomePage;
