import type { NextPage } from "next";
import styles from "./button-text-only.module.css";

export type ButtonTextOnlyType = {
  className?: string;
};

const ButtonTextOnly: NextPage<ButtonTextOnlyType> = ({ className = "" }) => {
  return (
    <button className={[styles.buttonTextOnly, className].join(" ")}>
      <div className={styles.text}>Subscribe</div>
    </button>
  );
};

export default ButtonTextOnly;
