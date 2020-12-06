import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Icons/loading.gif";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.right}>
          <div className={styles.detail}>About Us</div>
          <div className={styles.detail}>Contact Us</div>
        </div>
      </nav>
    </>
  );
}
