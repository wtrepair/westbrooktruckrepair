import type { NextPage } from "next";
import styles from "./work-items.module.css";

export type WorkItemsType = {
  className?: string;
};

const WorkItems: NextPage<WorkItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.workItems, className].join(" ")}>
      <div className={styles.workItem}>
        <div className={styles.ourWork}>
          <img
            className={styles.workImageGrid}
            loading="lazy"
            alt=""
            src="/rectangle-1469@2x.png"
          />
          <img
            className={styles.workImageGrid}
            loading="lazy"
            alt=""
            src="/rectangle-1470@2x.png"
          />
          <img
            className={styles.workImageGrid}
            loading="lazy"
            alt=""
            src="/rectangle-1471@2x.png"
          />
          <img
            className={styles.workImageGrid}
            loading="lazy"
            alt=""
            src="/rectangle-1472@2x.png"
          />
          <div className={styles.seeWork}>
            <div className={styles.seeWorkChild} />
            <h1 className={styles.seeOurWork}>See Our Work</h1>
          </div>
        </div>
      </div>
      <div className={styles.workItemDescription}>
        <div className={styles.bg} />
        <div className={styles.itemTitleWrapper}>
          <div className={styles.itemTitle}>
            <div className={styles.description}>Our Services</div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>WHATEVER YOU NEED DONE</h1>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.serviceItemsParent}>
            <div className={styles.serviceItems}>
              <div className={styles.serviceItemsChild} />
              <div className={styles.plugService}>
                <img
                  className={styles.plug11}
                  loading="lazy"
                  alt=""
                  src="/plug-1-1@2x.png"
                />
              </div>
              <h2 className={styles.dieselEngineRepair}>
                Diesel Engine Repair Service
              </h2>
            </div>
            <div className={styles.serviceItems1}>
              <div className={styles.serviceItemsItem} />
              <div className={styles.naturalGas1Wrapper}>
                <img
                  className={styles.naturalGas1Icon}
                  loading="lazy"
                  alt=""
                  src="/naturalgas-1@2x.png"
                />
              </div>
              <h2 className={styles.dieselEngineMaintenance}>
                Diesel Engine Maintenance
              </h2>
            </div>
          </div>
          <div className={styles.mobileTruckRepair}>
            <div className={styles.repairItems}>
              <div className={styles.serviceItemsItem} />
              <div className={styles.airConditioner1Wrapper}>
                <img
                  className={styles.airConditioner1Icon}
                  loading="lazy"
                  alt=""
                  src="/airconditioner-1@2x.png"
                />
              </div>
              <h2 className={styles.mobileTruckRepair1}>Mobile Truck Repair</h2>
            </div>
            <div className={styles.filterServices}>
              <div className={styles.filterTitleParent}>
                <div className={styles.filterTitle}>
                  <div className={styles.serviceItemsChild} />
                  <div className={styles.solarPanel1Wrapper}>
                    <img
                      className={styles.solarPanel1Icon}
                      loading="lazy"
                      alt=""
                      src="/solarpanel-1@2x.png"
                    />
                  </div>
                  <h2
                    className={styles.fuelFiltersAir}
                  >{`Fuel Filters, Air Filters, Belts & hoses`}</h2>
                </div>
                <div className={styles.viewServices}>
                  <button className={styles.viewServicesButton}>
                    <b className={styles.viewAllServices}>View All Services</b>
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
          <div className={styles.emergencyRepair}>
            <div className={styles.emergencyTitle}>
              <div className={styles.serviceItemsChild} />
              <div className={styles.fridge1Wrapper}>
                <img
                  className={styles.fridge1Icon}
                  loading="lazy"
                  alt=""
                  src="/fridge-1@2x.png"
                />
              </div>
              <h2 className={styles.fuelFiltersAir}>Enmergency Truck Repair</h2>
            </div>
            <div className={styles.oilChanges}>
              <div className={styles.oilTitle}>
                <div className={styles.valve1Wrapper}>
                  <img
                    className={styles.valve1Icon}
                    alt=""
                    src="/valve-1@2x.png"
                  />
                </div>
                <h2 className={styles.oilChanges1}>Oil Changes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
