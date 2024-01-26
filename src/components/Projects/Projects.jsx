import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })
     
      }
      <div className={styles.ProjectExperience}>
      <h2 className={styles.heading}>College project Experience</h2>
      <p>My college Project experience was a bit different from others. Starting from 1st semester,
      we were assign to work on Java Project and it was to be done individually. So I learnt from various 
      Platforms on how to develop a Java project and successfully build a Ecommerce Shooping Cart Project.
      But Honestly saying our college mentors didn't helped us in teaching basics of project and That's why 
      many students faced a lot of problems.</p>
      <p>In 2nd semester, We were assigned to work on Frontend Project. So, that was a domain 
      I am proficient in. So, I created Iphone Inventory System which includes skills PHP, HTML5, CSS,
      Javascript, MySQL.
      Github Link - https://github.com/puja923
      /IphoneInventorySystem</p>
      <p>In 3rd semester, We were assigned to work on Andriod development. Andriod is one of the language 
      in which I don't have much experience and our college mentors didn't guide us well 
      on Android Programming Language. My Project was Garage System, It was a basic project taken online
      which includes functionality like Login, Signup, Vechicles updation etc.</p>
      </div>
      <div className={styles.Interests}>
      <h2 className={styles.heading}>Interests</h2>
      <p>1) Reading - I have a profound interest in literature that not only entertains but also inspires personal growth and development. One author who has significantly influenced my perspective is Gaur Gopal Das. His insightful and spiritually enriching books provide a unique blend of ancient wisdom and contemporary insights.</p>
      <p>2) Proffessional Development - I like to attend conferences, participating in online courses, or joining industry-related forums.</p>
      </div>
<div className={styles.hireme}>
<h2 className={styles.heading}>Why should someone Hire me?</h2>
      <p> 1) Relevant Skills and Expertise </p>
      <p> 2) Team Collaboration </p>
      <p> 3) Adaptability and willigness to learn</p>
      </div>
      </div>
    </section>
  );
};