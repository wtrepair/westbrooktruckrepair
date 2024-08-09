import type { NextPage } from "next";
import Input from "./input";
import ButtonTextOnly from "./button-text-only";
import styles from "./newsletter.module.css";

export type NewsletterType = {
  className?: string;
};

const Newsletter: NextPage<NewsletterType> = ({ className = "" }) => {
  return (
    <section className={[styles.newsletter, className].join(" ")}>
      <img
        className={styles.image2Icon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterContentChild} />
        <h2
          className={styles.getTheLatest}
        >{`Get the latest offers & Updates`}</h2>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <Input />
            <ButtonTextOnly />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
