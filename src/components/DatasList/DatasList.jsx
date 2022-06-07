import React from "react";
import Data from "./Data";
import styles from "./DatasList.module.scss";

function DatasList({ Datas }) {
  let data1 = Datas;
  for (let i = 0; i < data1.length; i++) {
    let date = data1[i]?.date;
    for (let j = i + 1; j < data1.length; j++) {
      if (date === data1[j]?.date) {
        data1.splice(i, 1);
      }
    }
  }

  let data2 = data1.map((item, index) => (
    <Data key={index} date={item.date} number={item.number} />
  ));

  return (
    <div className={styles.list}>
      <p>Dates</p>
      {data2}
    </div>
  );
}
export default DatasList;
