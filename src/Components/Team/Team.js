import React from "react";
import styles from "./Team.module.css";
// import globalStyles from '../../../globalStyles.module.css';

function Team(props) {
  return (
    <div className={styles.Team}>
      <div>
        <div className={styles.TeamContent}>
          <img
            className={styles.TeamContentImg}
            src={require("../../images/Team/olga.jpg")}
          ></img>
          <div className={styles.TeamContentText}>
            <div>
              <div className={styles.TeamContentTitle}>Ольга Гужаускайте</div>
              <div className={styles.TeamContentSubtitle}>Основатель FHD</div>
            </div>
            <div className={styles.TeamContentDescription}>
              Многолетнее сотрудничество с международными операторами и
              доскональное знание индустрии гостеприимства позволяет Ольге
              Гужаускайте выступать в качестве эксперта в сфере проектирования,
              дизайна и последующего оснащения гостиниц, а также использовать
              лучшее из мирового опыта в условиях российского рынка.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.TeamAnotherContent}>
          <div className={styles.TeamContentText}>
            <div>
              <div className={styles.TeamContentTitle}>Андрей Матков</div>
              <div className={styles.TeamContentSubtitle}>Руководитель FHD</div>
            </div>
            <div className={styles.TeamContentDescription}>
              Обладая большим опытом в проектировании и реализации проектов по
              всей России и за рубежом, Андрей Матков является экспертом в сфере
              дизайна интерьеров. Создавать будущее гостиничного бизнеса и
              развивать индустрию гостеприимства в России – вот основные
              принципы, которыми он и его команда руководствуются в работе.
            </div>
          </div>
          <img
            className={styles.TeamContentImg}
            src={require("../../images/Team/andrey.jpg")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Team;
