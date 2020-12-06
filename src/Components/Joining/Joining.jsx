import React from "react";
import styles from "./Joining.module.css";
import Logo from "../../Assets/Icons/loading.gif";

export default function Joining() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.row}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.title}>Company Name</div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quibusdam, perferendis rem adipisci porro mollitia odio voluptatibus
            ex beatae commodi.
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.subs}>
            Join our team and get our latest update every week!
          </div>
          <div className={styles.email}>
            <input
              type="text"
              placeholder="Email"
              className={styles.emailInput}
            />
            <input type="submit" value="SUBSCRIBE" className={styles.outline} />
          </div>
        </div>
      </div>
    </>
  );
}
