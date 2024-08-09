import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.getInTouchWrapper, className].join(" ")}>
      <div className={styles.getInTouch}>
        <div className={styles.touchTitleContainer}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formAndInfo}>
            <div className={styles.formDetails}>
              <div className={styles.formComponents}>
                <div className={styles.formAndContact}>
                  <h1 className={styles.getInTouchContainer}>
                    <span>{`Get in `}</span>
                    <span className={styles.touch}>Touch</span>
                  </h1>
                  <div className={styles.servicesFromUs}>
                    Services from us are trusted, reliable and professional.
                    Please fill out the form completely, and we will get back to
                    you as soon as possible
                  </div>
                </div>
                <form className={styles.inputFields}>
                  <div className={styles.textField}>
                    <input
                      className={styles.name}
                      placeholder="Name *"
                      type="text"
                    />
                    <img
                      className={styles.textFieldChild}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.textField}>
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                    />
                    <img
                      className={styles.textFieldChild}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.textField}>
                    <input
                      className={styles.phoneNumber}
                      placeholder="Phone number *"
                      type="text"
                    />
                    <img
                      className={styles.textFieldChild}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.dropdown}>
                    <div className={styles.howDidYou}>How did you find us?</div>
                    <img
                      className={styles.submitButtonIcon}
                      alt=""
                      src="/submit-button.svg"
                    />
                  </div>
                  <button className={styles.button}>
                    <b className={styles.send}>send</b>
                  </button>
                </form>
              </div>
              <div className={styles.phoneEmailParent}>
                <div className={styles.phoneEmail}>
                  <img
                    className={styles.contactIcons}
                    loading="lazy"
                    alt=""
                    src="/frame-831.svg"
                  />
                  <div className={styles.phone16135487949}>
                    <p className={styles.phone}>PHONE</p>
                    <p className={styles.p}>1(613)548-7949</p>
                  </div>
                </div>
                <div className={styles.phoneEmail}>
                  <img
                    className={styles.contactIcons}
                    loading="lazy"
                    alt=""
                    src="/frame-833.svg"
                  />
                  <div className={styles.emailInfokingstontruckrepair}>
                    <p className={styles.phone}>
                      <span className={styles.email2}>
                        <span>EMAIL</span>
                      </span>
                    </p>
                    <p className={styles.p}>
                      <span className={styles.email2}>
                        <span>info@kingstontruckrepair.ca</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageFooter}>
            <div className={styles.imageFooterChild} />
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
