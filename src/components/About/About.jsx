import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>MCA (Master of Computer Application)</h3>
              <p>
              2022 - 2024
              </p>
              <p> Siddhant Institute of Computer Application, Pune</p>
              <p>
              2nd Sem (CGPA)- 8.84 
              </p>
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>BCA (Bachelor of Computer Application)</h3>
              <p> 2019 - 2022</p>
              <p> North Maharashtra Univerity, Jalgaon</p>
              <p>
                CGPA - 9.23 
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};