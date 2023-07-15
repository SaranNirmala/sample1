import React from "react";
import styles from "./Cardheader.module.css";
import Content from "./Content";

function Cardheader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div>
            <button className={styles.btnBootstrap}>Bootstrap 5.10</button>
          </div>
        </div>
      </div>
      <div className={styles.item}>
      <div className="row">
        <div className="col-md-8">
          <ul className={styles.weblist}>
            <li className={styles.a}>Result</li>
            <li className={styles.b}>HTML</li>
            <li className={styles.c}>CSS</li>
            <li className={styles.d}>Javascript</li>
            <li className={styles.e}>Resourses</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className={styles.para}><i class="fa-solid fa-cloud"></i>&nbsp;<span className={styles.paraImg}>Edit in JSFiddle</span></h6>
        </div>
        </div>
     </div>
      <Content />
    </div>
  );
}

export default Cardheader;
