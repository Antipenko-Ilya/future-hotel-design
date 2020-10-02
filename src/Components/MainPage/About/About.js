import React from "react";
import styles from "./About.module.css";

function About(props) {
  return (
    <div className={styles.About}>
      <span className={styles.AboutDescription}>
        <i>Future Hotel Design</i> – это команда профессионалов, занимающихся
        дизайном общественных и жилых помещений. Мы выполняем весь спектр услуг
        – от создания дизайн-проекта, разработки проектной документации до
        авторского надзора и реализации, чтобы наши клиенты получали красивые,
        функциональные и комфортные пространства для жизни и бизнеса.{" "}
      </span>
    </div>
  );
}
export default About;
