import styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";
import LinearProgress from "./LinearProgress";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Sidebar = () => {
  const [progress, setProgress] = useState({
    progress1: {
      begin: 0,
      end: 90,
    },
    progress2: {
      begin: 0,
      end: 70,
    },
    progress3: {
      begin: 0,
      end: 80,
    },
    progress4: {
      begin: 0,
      end: 90,
    },
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setProgress((oldValue) => ({
        ...oldValue,
        progress1: {
          ...oldValue.progress1,
          begin: i,
        },
      }));

      if (i === progress.progress1.end) {
        clearInterval(interval);
      }
    }, 20);
    let n = 0;
    const interval2 = setInterval(() => {
      n++;
      setProgress((oldValue) => ({
        ...oldValue,
        progress2: {
          ...oldValue.progress2,
          begin: n,
        },
      }));

      if (n === progress.progress2.end) {
        clearInterval(interval2);
      }
    }, 20);
    let o = 0;
    const interval3 = setInterval(() => {
      o++;
      setProgress((oldValue) => ({
        ...oldValue,
        progress3: {
          ...oldValue.progress3,
          begin: o,
        },
      }));

      if (o === progress.progress3.end) {
        clearInterval(interval3);
      }
    }, 20);
    let p = 0;
    const interval4 = setInterval(() => {
      p++;
      setProgress((oldValue) => ({
        ...oldValue,
        progress4: {
          ...oldValue.progress4,
          begin: p,
        },
      }));

      if (p === progress.progress4.end) {
        clearInterval(interval4);
      }
    }, 20);
  }, []);

  return (
    <div className={styles.side_bar}>
      <div className={styles.side_bar_header}>
        <div className={styles.header_image}>
          <Image
            className={styles.image}
            src="/face-1.jpg"
            width={70}
            height={70}
          />
        </div>
        <div className={styles.header_person_name}>M Zubair Ul Hassan</div>
        <div className={styles.header_person_desc}>
          Front-end Developer <br /> React js Node js
        </div>
      </div>
      <div className={styles.side_bar_content}>
        <div className={styles.scrollable_container}>
          <div className={styles.header_content_address_info}>
            <div className={styles.header_address_info_row}>
              <label>Residence:</label>
              <p>Pakistan</p>
            </div>
            <div className={styles.header_address_info_row}>
              <label>City:</label>
              <p>Islamabad</p>
            </div>
            <div className={styles.header_address_info_row}>
              <label>Age:</label>
              <p>26</p>
            </div>
          </div>
          <div className={styles.div_divider} />
          <div className={styles.header_language_section}>
            <div className={styles.svg}>
              <div>
                <ProgressProvider valueStart={progress.progress1.begin}>
                  {(value) => (
                    <CircularProgressbar
                      text={`${value}%`}
                      value={value}
                      styles={buildStyles({ pathTransitionDuration: 1.7 })}
                    />
                  )}
                </ProgressProvider>
              </div>
              <label>React js</label>
            </div>
            <div className={styles.svg}>
              <div>
                <ProgressProvider valueStart={progress.progress2.begin}>
                  {(value) => (
                    <CircularProgressbar
                      text={`${value}%`}
                      value={value}
                      styles={buildStyles({ pathTransitionDuration: 1.7 })}
                    />
                  )}
                </ProgressProvider>
              </div>
              <label>Node js</label>
            </div>
            <div className={styles.svg}>
              <div>
                <ProgressProvider valueStart={progress.progress3.begin}>
                  {(value) => (
                    <CircularProgressbar
                      text={`${value}%`}
                      value={value}
                      styles={buildStyles({ pathTransitionDuration: 1 })}
                    />
                  )}
                </ProgressProvider>
              </div>
              <label>Html/Css</label>
            </div>
          </div>
          <div className={styles.div_divider} />
          <div className={styles.sidebar_skill_section}>
            <LinearProgress value={progress.progress1.begin} />
            <LinearProgress value={progress.progress2.begin} />
            <LinearProgress value={progress.progress3.begin} />
            <LinearProgress value={progress.progress4.begin} />
          </div>
          <div className={styles.div_divider} />
          <div className={styles.sidebar_technologies_section}>
            <div className={styles.technology}>
              <AssignmentTurnedInIcon className={styles.check_icon} />
              <label>Bootstrap, Materialize</label>
            </div>
            <div className={styles.technology}>
              <AssignmentTurnedInIcon className={styles.check_icon} />
              <label>Stylus, Sass, Less</label>
            </div>
            <div className={styles.technology}>
              <AssignmentTurnedInIcon className={styles.check_icon} />
              <label>Gulp, Webpack, Grunt</label>
            </div>
            <div className={styles.technology}>
              <AssignmentTurnedInIcon className={styles.check_icon} />
              <label>GIT knowledge</label>
            </div>
            <div className={styles.technology}>
              <AssignmentTurnedInIcon className={styles.check_icon} />
              <label>Jira, SDLC</label>
            </div>
          </div>
          <div className={styles.div_divider} />
          <div className={styles.download_cv}>
            <a href="/mzubair_resume.pdf" download>
              Download CV
              <CloudDownloadIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.side_bar_footer}>
        <div className={styles.social_links}>
          <Link
            href={"https://www.facebook.com/profile.php?id=100004324724793"}
          >
            <a>
              <FacebookIcon className={styles.social_icon} />
            </a>
          </Link>
          <Link href={"https://github.com/mzubairhassan"}>
            <a>
              <GitHubIcon className={styles.social_icon} />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/m-zubair-hassan-1342b9a4/"}>
            <a>
              <LinkedInIcon className={styles.social_icon} />
            </a>
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100004324724793"}
          >
            <a>
              <TwitterIcon className={styles.social_icon} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
