import React from "react";
import styles from "./DataNumber.module.css";
import Established from "../../Assets/Icons/established.png";
import User from "../../Assets/Icons/user.png";
import Partner from "../../Assets/Icons/partner.png";
import Covered from "../../Assets/Icons/covered.png";

export default function DataNumber() {
  return (
    <>
      <div className={styles.product}>Facts</div>
      <div className={styles.unlist}>
        <div className={styles.list}>
          <img src={Established} alt="Product" />
          <div className={styles.title}>Established</div>
          <div className={styles.description}>2005</div>
        </div>
        <div className={styles.list}>
          <img src={User} alt="User" />
          <div className={styles.title}>Our User</div>
          <div className={styles.description}>500.000++</div>
        </div>
        <div className={styles.list}>
          <img src={Partner} alt="Partner" />
          <div className={styles.title}>Business Partner</div>
          <div className={styles.description}>50.000++</div>
        </div>
        <div className={styles.list}>
          <img src={Covered} alt="Product" />
          <div className={styles.title}>Area Covered</div>
          <div className={styles.description}>125 Area</div>
        </div>
      </div>
    </>
  );
}
