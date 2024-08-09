import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.customerSupport11Wrapper}>
        <img
          className={styles.customerSupport11}
          loading="lazy"
          alt=""
          src="/customersupport-1-1@2x.png"
        />
      </div>
      <div className={styles.contactUsTodayHelpIsOnWrapper}>
        <h1
          className={styles.contactUsToday}
        >{`Contact us today & help is on the way`}</h1>
      </div>
      <div className={styles.scheduleService}>
        <div className={styles.scheduleButton}>
          <b className={styles.scheduleAService}>Schedule a Service</b>
          <img
            className={styles.chevronRightIcon}
            loading="lazy"
            alt=""
            src="/chevron-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
