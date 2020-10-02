import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Preview.module.css";

function PreviewElem(props) {
  const [layer, setlayer] = useState("none");
  return (
    <div
      className={styles.PreviewElem}
      onMouseEnter={() => setlayer("flex")}
      onMouseLeave={() => setlayer("none")}
    >
      <Link to={props.url}>
        <img
          className={styles.PreviewImage}
          src={require(`../../../images/Preview/Preview-${props.image}.jpg`)}
        ></img>
        <div style={{ display: layer }} className={styles.PreviewLayer}>
          <span className={styles.PreviewLayerTitle}> {props.name} </span>
        </div>
      </Link>
    </div>
  );
}
export default PreviewElem;
