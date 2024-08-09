import type { NextPage } from "next";
import styles from "./input.module.css";

export type InputType = {
  className?: string;
};

const Input: NextPage<InputType> = ({ className = "" }) => {
  return (
    <div className={[styles.input, className].join(" ")}>
      <input
        className={styles.content}
        placeholder="Your email here"
        type="text"
      />
    </div>
  );
};

export default Input;
