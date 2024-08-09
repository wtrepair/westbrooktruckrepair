import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutUsContainerWrapper, className].join(" ")}>
      <div className={styles.aboutUsContainer}>
        <img className={styles.aboutUsContainerChild} loading="lazy" alt="" />
        <div className={styles.aboutUs}>
          <img
            className={styles.aboutUsImage}
            alt=""
            src="/about-us-image@2x.png"
          />
          <div className={styles.aboutUs1}>
            <div className={styles.welcomeMessage}>
              <div className={styles.description}>About Us</div>
              <h1 className={styles.welcomeToWestbrook}>
                Welcome to Westbrook Truck Repair
              </h1>
            </div>
            <div className={styles.atWestbrookTruck}>
              At Westbrook Truck Repair in Kingston, ON, we bring years of truck
              repair experience to provide quality services at competitive
              rates, aiming to save your company time and money by eliminating
              the hassle of vehicle transport. 
            </div>
            <button className={styles.seeMoreButton}>
              <b className={styles.seeMore}>See More</b>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevron-right-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
