import React from "react";
import Instagram from "../../Assets/Icons/instagram.png";
import Twitter from "../../Assets/Icons/twitter.png";
import Linkedin from "../../Assets/Icons/linked.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.social}>
          <img src={Instagram} alt="Instagram" className={styles.image} />
          <img src={Twitter} alt="Twitter" className={styles.image} />
          <img src={Linkedin} alt="Linkedin" className={styles.image} />
        </div>
        <div>© 2020 Insurance All Rights Reserved.</div>
      </footer>
    </>
  );
}
