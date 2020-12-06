import React from "react";
import styles from "./Review.module.css";
import Man from "../../Assets/Icons/man.png";
import Female from "../../Assets/Icons/female.png";

export default function Review() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.review}>
          <img src={Female} alt="User" />
          <div className={styles.detail}>
            <div className={styles.title}>Author</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              asperiores reiciendis, maxime voluptate tenetur nulla earum
              consequuntur vitae nobis. Provident!
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <img src={Man} alt="User" />
          <div className={styles.detail}>
            <div className={styles.title}>Author</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              asperiores reiciendis, maxime voluptate tenetur nulla earum
              consequuntur vitae nobis. Provident!
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <img src={Female} alt="User" />
          <div className={styles.detail}>
            <div className={styles.title}>Author</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              asperiores reiciendis, maxime voluptate tenetur nulla earum
              consequuntur vitae nobis. Provident!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
