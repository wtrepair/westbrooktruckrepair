import type { NextPage } from "next";
import styles from "./contact-info.module.css";

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: NextPage<ContactInfoType> = ({ className = "" }) => {
  return (
    <section className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.email1480x8005}>
        <div className={styles.emailInfo}>
          <div className={styles.description}>Testimonials</div>
          <div className={styles.emailTitleContainer}>
            <h1 className={styles.title}>What Our Clients Says</h1>
          </div>
        </div>
        <div className={styles.locationReviews}>
          <div className={styles.firstReview}>
            <div className={styles.firstReviewContent}>
              <div className={styles.firstReviewDetails}>
                <div className={styles.firstReviewHeader}>
                  <div className={styles.stars}>
                    <img
                      className={styles.starsChild}
                      loading="lazy"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.starsChild}
                      loading="lazy"
                      alt=""
                      src="/star-3.svg"
                    />
                    <img
                      className={styles.starsInner}
                      loading="lazy"
                      alt=""
                      src="/star-4.svg"
                    />
                    <img
                      className={styles.starsChild}
                      loading="lazy"
                      alt=""
                      src="/star-5.svg"
                    />
                    <img
                      className={styles.starsChild}
                      alt=""
                      src="/star-6.svg"
                    />
                  </div>
                  <img
                    className={styles.logo5ff3c18e1Icon}
                    loading="lazy"
                    alt=""
                    src="/logo5ff3c18e-1.svg"
                  />
                </div>
                <blockquote className={styles.locatedOffHwyContainer}>
                  <span>
                    <p className={styles.locatedOffHwy}>
                      “Located off Hwy. 401 at the 611 Truck Stop on Centennial
                      Drive.  Friendly and efficient staff.  Plenty of room in
                      their parking lot.
                    </p>
                    <p className={styles.locatedOffHwy}>
                      They also offer 24 hour mobile repair service. I am a
                      repeat customer.”
                    </p>
                  </span>
                </blockquote>
              </div>
              <textarea className={styles.secondReview} rows={5} cols={19} />
            </div>
            <div className={styles.secondReviewContent}>
              <div className={styles.secondReviewDetails}>
                <div className={styles.firstReviewHeader}>
                  <div className={styles.stars}>
                    <img
                      className={styles.starsChild}
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.starsChild}
                      alt=""
                      src="/star-3.svg"
                    />
                    <img
                      className={styles.starsInner}
                      alt=""
                      src="/star-4.svg"
                    />
                    <img
                      className={styles.starsChild}
                      alt=""
                      src="/star-5.svg"
                    />
                    <img
                      className={styles.starsChild}
                      alt=""
                      src="/star-6.svg"
                    />
                  </div>
                  <img
                    className={styles.logo5ff3c18e1Icon}
                    loading="lazy"
                    alt=""
                    src="/logo5ff3c18e-1-1.svg"
                  />
                </div>
                <div className={styles.iAndSeveral}>
                  I, and several of the drivers at our Kingston depot, have
                  always found them excellent, courteous, conscientious to a
                  fault, efficient and helpful.I would highly recommend them for
                  highway truck service!(I do not work for them, by the way, but
                  am a satisfied customer!).I will continue to use them to
                  service and fix my highway truck.
                </div>
              </div>
              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerDetails}>
                  <div className={styles.janeCooper}>Jane Cooper</div>
                  <div className={styles.presidentOfSales}>
                    President of Sales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-48095636.svg"
          />
          <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
