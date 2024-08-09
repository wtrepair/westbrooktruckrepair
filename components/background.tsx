import type { NextPage } from "next";
import styles from "./background.module.css";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.backgroundChild} />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.navSuporteWrapper}>
        <div className={styles.navSuporte}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <div className={styles.searchWrapper}>
            <div className={styles.search}>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
