import React from "react";

import ApproachTable from "./ApproachTable";

import styles from "./Approach.module.css";
const project1 = [
  {
    id: "01",
    text: "Планировачное решение с расстановкой мебели",
  },
  {
    id: "02",
    text: "Mood board: стилевое и цветовое решение",
  },
  {
    id: "03",
    text: "Визуализации помещений",
  },
];
const project2 = [
  {
    id: "01",
    text: "Демонтажные/монтажный план",
  },
  {
    id: "02",
    text: "План расстановки мебели",
  },
  {
    id: "03",
    text: "План напольных покрытий",
  },
  {
    id: "04",
    text: "План потолков",
  },
  {
    id: "05",
    text: "План осветительных приборов",
  },
  {
    id: "06",
    text: "План групп света",
  },
  {
    id: "07",
    text: "План розеток и силовых выводов",
  },
  {
    id: "08",
    text: "План отделки стен",
  },
  {
    id: "09",
    text: "Разведка стен",
  },
  {
    id: "10",
    text: "Узлы и соединения",
  },
];
const project3 = [
  {
    id: "01",
    text: "Отделочные материалы",
  },
  {
    id: "02",
    text: "Сантехнические приборы и аксессуары",
  },
  {
    id: "03",
    text: "Осветительные приборы(технические, декоративные)",
  },
  {
    id: "04",
    text: "Электрофурнитура(розетки, выключатели)",
  },
  {
    id: "05",
    text: "Двери",
  },
  {
    id: "06",
    text: "Текстиль",
  },
  {
    id: "07",
    text: "Мебель(корпусная, мягкая)",
  },
  {
    id: "08",
    text: "Техника",
  },
  {
    id: "09",
    text: "Декор",
  },
];
function Approach(props) {
  return (
    <div className={styles.Approach}>
      <div className={styles.ApproachElem}>
        <img
          className={styles.ApproachElemImg}
          src={require("../../images/Approach/project-1.jpg")}
        ></img>
        <ApproachTable
          flag={false}
          name={"Эскизный проект"}
          content={project1}
        />
      </div>
      <div className={styles.ApproachElem}>
        <ApproachTable flag={true} name={"Рабочий проект"} content={project2} />
        <img
          className={styles.ApproachElemImg}
          src={require("../../images/Approach/project-2.jpg")}
        ></img>
      </div>
      <div className={styles.ApproachElem}>
        <img
          className={styles.ApproachElemImg}
          src={require("../../images/Approach/project-3.png")}
        ></img>
        <ApproachTable flag={false} name={"Спецификация"} content={project3} />
      </div>
    </div>
  );
}

export default Approach;
