import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.logoContainer}>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3-1@2x.png"
        />
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.frameParent}>
          <div className={styles.westbrookTruckRepairParent}>
            <div className={styles.westbrookTruckRepair}>
              Westbrook Truck Repair
            </div>
            <div className={styles.servicesLink}>
              <a className={styles.services}>Services</a>
            </div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.homeAboutParent}>
            <div className={styles.homeAbout}>
              <div className={styles.homeAboutLinks}>
                <div className={styles.home}>Home</div>
                <div className={styles.about}>About</div>
                <div className={styles.servicesLinkContainer}>
                  <div className={styles.services1}>Services</div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.repairLinksContainerParent}>
              <div className={styles.repairLinksContainer}>
                <div className={styles.homeAboutLinks}>
                  <div className={styles.dieselEngineRepair}>
                    Diesel Engine Repair
                  </div>
                  <div className={styles.dieselEngineMaintenance}>
                    Diesel Engine Maintenance
                  </div>
                  <div className={styles.mobileTruckRepair}>
                    Mobile Truck repair
                  </div>
                </div>
              </div>
              <div className={styles.centennialDriveKingstonContainer}>
                <p className={styles.centennialDrive}>
                  3-1525 Centennial Drive
                </p>
                <p className={styles.centennialDrive}>{`Kingston, ON `}</p>
                <p className={styles.centennialDrive}>K7P 0K4</p>
                <p className={styles.centennialDrive}>1(613)548-7949</p>
                <p className={styles.centennialDrive}>&nbsp;</p>
                <p className={styles.centennialDrive}>
                  info@kingstontruckrepair.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles.emergencyRepair}>
            <div className={styles.contactUs1}>Contact Us</div>
            <div className={styles.centennialDriveKingstonContainer}>
              Emergency Truck Repair
            </div>
          </div>
          <div className={styles.fuelFiltersAirFiltersBelWrapper}>
            <div className={styles.centennialDriveKingstonContainer}>
              Fuel Filters, Air Filters, Belts, Hoses
            </div>
          </div>
          <div className={styles.oilChangesWrapper}>
            <div className={styles.oilChanges}>Oil Changes</div>
          </div>
        </div>
      </div>
      <div className={styles.followSubscribe}>
        <div className={styles.followUs}>
          <div className={styles.followUsTitle}>
            <div className={styles.followUs1}>Follow us</div>
            <div className={styles.socials}>
              <img className={styles.socialsChild} alt="" src="/group-52.svg" />
              <img className={styles.socialsChild} alt="" src="/group-53.svg" />
              <img className={styles.socialsChild} alt="" src="/group-54.svg" />
              <img className={styles.socialsChild} alt="" src="/group-55.svg" />
            </div>
          </div>
          <div className={styles.subscribeTitle}>
            <div className={styles.subscribeUs}>Subscribe Us</div>
            <div className={styles.emailInput}>
              <div className={styles.emailField}>
                <div className={styles.emailFieldChild} />
                <div className={styles.email}>Email</div>
              </div>
              <div className={styles.submitIcon}>
                <div className={styles.submitIconChild} />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
