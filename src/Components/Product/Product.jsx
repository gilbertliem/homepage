import React from "react";
import styles from "./Product.module.css";
import product from "../../Assets/Icons/product.png";

export default function Product() {
  return (
    <>
      <div className={styles.product}>Our Products</div>
      <div className={styles.unlist}>
        <div className={styles.list}>
          <img src={product} alt="Product" />
          <div className={styles.title}>Title</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            asperiores reiciendis, maxime voluptate tenetur nulla earum
            consequuntur vitae nobis. Provident!
          </div>
        </div>
        <div className={styles.list}>
          <img src={product} alt="Product" />
          <div className={styles.title}>Title</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            asperiores reiciendis, maxime voluptate tenetur nulla earum
            consequuntur vitae nobis. Provident!
          </div>
        </div>
        <div className={styles.list}>
          <img src={product} alt="Product" />
          <div className={styles.title}>Title</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            asperiores reiciendis, maxime voluptate tenetur nulla earum
            consequuntur vitae nobis. Provident!
          </div>
        </div>
      </div>
    </>
  );
}
