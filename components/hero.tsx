import type { NextPage } from "next";
import styles from "./hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <header className={[styles.hero2, className].join(" ")}>
      <div className={styles.hero2Child} />
      <div className={styles.hero2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.menuLinksParent}>
            <nav className={styles.menuLinks}>
              <div className={styles.homeWrapper}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.home}>About</div>
              <div className={styles.services}>Services</div>
              <div className={styles.gallery}>Gallery</div>
              <div className={styles.contactUs}>Contact Us</div>
            </nav>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.getAFreeQuoteWrapper}>
                <div className={styles.getAFree}>Get a Free Quote</div>
              </div>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevron-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero2Item} />
    </header>
  );
};

export default Hero;
