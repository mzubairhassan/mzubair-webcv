import styles from "./Content.module.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import CountUp from "react-countup";
import IncrementNumber from "../IncrementNumber";
const Content = () => {
  return (
    <div className={styles.site_content}>
      <div className={styles.background_overlay}>
        <div className={styles.background_image_overlay}></div>
        <div className={styles.background_dark_overlay}></div>
      </div>
      <div className={styles.content_container}>
        <div className={styles.content_header}>
          <div className={styles.top_bar}></div>
          <div className={styles.content_header_gradient}></div>
          <div className={styles.header_content}>
            <h1>
              Discover my Amazing <br /> Art Space!
            </h1>
            <div className={styles.type_writer_string}>
              <div className={styles.type_writer_code}>
                <span className={styles.color_span_code}>
                  {"<"}code{">"}
                </span>
                I Build
              </div>
              <div className={styles.type_writer}>
                <Typewriter
                  options={{
                    strings: [
                      "Web applications.",
                      "React Applications.",
                      "React Native Apps.",
                    ],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: false,
                    wrapperClassName: "wrapper_typwriter",
                  }}
                />{" "}
              </div>
              <div className={styles.type_writer_code}>
                <span className={styles.color_span_code}>
                  {"</"}code{">"}
                </span>
              </div>
            </div>
            <div className={styles.header_button_explore}>
              <Link href="/">
                <a className={styles.explore_link}>Explore Now</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.experience_list}>
          <div className={styles.experience_list_column}>
            <div className={styles.experience_list_column_numbers}>
              <IncrementNumber endNumber={7} /> +
            </div>
            <div className={styles.experience_list_column_text}>
              Years Experince
            </div>
          </div>
          <div className={styles.experience_list_column}>
            <div className={styles.experience_list_column_numbers}>
              <IncrementNumber endNumber={88} />
            </div>
            <div className={styles.experience_list_column_text}>
              Completed Projects
            </div>
          </div>
          <div className={styles.experience_list_column}>
            <div className={styles.experience_list_column_numbers}>
              <IncrementNumber endNumber={87} />
            </div>
            <div className={styles.experience_list_column_text}>
              Honors and Awards
            </div>
          </div>
          <div className={styles.experience_list_column}>
            <div className={styles.experience_list_column_numbers}>
              <IncrementNumber endNumber={85} />
            </div>
            <div className={styles.experience_list_column_text}>
              Happy Customers
            </div>
          </div>
        </div>

        <div className={styles.my_services_section}>
          <div className={styles.my_services_row}>
            <h2 className={styles.my_services_heading}>My Services</h2>
          </div>
          <div className={styles.my_services_row_content}>
            <div className={styles.box_container}>
              <div className={styles.my_service_box_label}>
                <h5>Web Development</h5>
              </div>
              <div className={styles.my_service_box_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
              </div>
              <div className={styles.my_service_box_action}>
                <a className={styles.my_service_box_action}>
                  Order Now{" "}
                  <span className={styles.my_service_box_action_arrow}>
                    {">"}
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.box_container}>
              <div className={styles.my_service_box_label}>
                <h5>Web Development</h5>
              </div>
              <div className={styles.my_service_box_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
              </div>
              <div className={styles.my_service_box_action}>
                <a className={styles.my_service_box_action}>
                  Order Now{" "}
                  <span className={styles.my_service_box_action_arrow}>
                    {">"}
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.box_container}>
              <div className={styles.my_service_box_label}>
                <h5>Web Development</h5>
              </div>
              <div className={styles.my_service_box_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
              </div>
              <div className={styles.my_service_box_action}>
                <a className={styles.my_service_box_action}>
                  Order Now{" "}
                  <span className={styles.my_service_box_action_arrow}>
                    {">"}
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.box_container}>
              <div className={styles.my_service_box_label}>
                <h5>Web Development</h5>
              </div>
              <div className={styles.my_service_box_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
              </div>
              <div className={styles.my_service_box_action}>
                <a className={styles.my_service_box_action}>
                  Order Now{" "}
                  <span className={styles.my_service_box_action_arrow}>
                    {">"}
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.box_container}>
              <div className={styles.my_service_box_label}>
                <h5>Web Development</h5>
              </div>
              <div className={styles.my_service_box_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
              </div>
              <div className={styles.my_service_box_action}>
                <a className={styles.my_service_box_action}>
                  Order Now{" "}
                  <span className={styles.my_service_box_action_arrow}>
                    {">"}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer_container}>
            <div className={styles.footer_left_msg}>
              M Zubair Ul hassan @ 2021
            </div>
            <div className={styles.footer_right_msg}>
              Implemented in Next.js (Inspired By{" "}
              <a
                className={styles.footer_inspiration}
                href={"https://elanta.app/nazar/arter-demo/home.html"}
              >
                this
              </a>
              )
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
