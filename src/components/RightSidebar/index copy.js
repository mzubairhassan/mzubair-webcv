import MenuIcon from "@material-ui/icons/Menu";
import styles from "./RightSidebar.module.css";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const RightSidebar = ({ setNav, nav }) => {
  const transition = useTransition(nav, {
    
  })
  return (
    <div className={styles.right_sidebar_container}>
      <div
        className={`${styles.menu_icon} ${
          nav ? styles.menu_icon_nav : styles.menu_icon_return
        }`}
      >
        <button
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={`${styles.navbar} ${
          nav ? styles.navbar_open : styles.navbar_closed
        }`}
      >
        {!nav ? (
          <div className={styles.home_text}>
            <span>Home</span>
          </div>
        ) : (
          <animated.div
            style={{
              transform: props.x.to((x) => `scale(${x})`),
            }}
          >
            <div className={styles.right_navlist_container}>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>History</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </animated.div>
        )}
      </div>
      <div className={styles.right_sidebar_footer}>
        <div>footer</div>
        <div>SomeThing Else</div>
      </div>
    </div>
  );
};

export default RightSidebar;
