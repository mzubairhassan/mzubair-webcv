import styles from "./Sidebar.module.css";
import { useState, useEffect } from "react";
const LinearProgress = ({ value }) => {
  return (
    <div className={styles.skill_row}>
      <div className={styles.skill_text}>
        <label>React js</label>
        <label>{value} %</label>
      </div>

      <progress className={styles.progress} value={value} max="100"></progress>
    </div>
  );
};

export default LinearProgress;
