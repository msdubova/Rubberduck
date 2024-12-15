import React from "react";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <main className={styles.catalog}>
      <div className={`${styles.cloud} ${styles.cloud1}`}>
        <CloudSVG />
      </div>

      <div className={`${styles.cloud} ${styles.cloud3}`}>
        <CloudSVG />
      </div>

      <div className={`${styles.cloud} ${styles.cloud5}`}>
        <CloudSVG />
      </div>
    </main>
  );
};

const CloudSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 371.62 371.62"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="#ffffff"
        d="M62.513,153.087c-0.009-0.525-0.02-1.049-0.02-1.575c0-50.155,40.659-90.814,90.814-90.814
      c43.222,0,79.388,30.196,88.562,70.643c8.555-4.789,18.409-7.531,28.91-7.531c32.766,0,59.328,26.562,59.328,59.328
      c0,1.339-0.06,2.664-0.148,3.981c24.325,9.03,41.661,32.444,41.661,59.911c0,35.286-28.605,63.892-63.892,63.892H79.865
      C35.757,310.921,0,275.164,0,231.056C0,192.907,26.749,161.011,62.513,153.087z"
      />
    </g>
  </svg>
);

export default Catalog;
