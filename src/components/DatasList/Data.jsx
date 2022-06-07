import React from "react";
import styles from "./DatasList.module.scss";
import next from "./../../assets/Icons/next.png";

const Data = ({ date, number }) => {
  return (
    <div className={styles.data}>
      {date} {"("}
      {number}
      {")"}
      <button onClick={() => console.log(1)} className={styles.image}>
        <img alt="" src={next} />
      </button>
    </div>
  );
};

export default Data;
