import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import RightSidebar from "../components/RightSidebar";
import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);

  return (
    <div className={nav ? styles.site_container_nav : styles.site_container}>
      <div className={styles.side_bar_container}>
        <Sidebar />
      </div>
      <div
        className={
          ` ${styles.content_container_initial}
          ${nav ? styles.content_container_nav : styles.content_container }`
        }
      >
        <Content />
      </div>
      <div
        className={` ${styles.right_sidebar_initial} ${
          nav ? styles.right_sidebar_open : styles.right_sidebar
        }`}
      >
        <RightSidebar setNav={setNav} nav={nav} />
      </div>
    </div>
  );
}
