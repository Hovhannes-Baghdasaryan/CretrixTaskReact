import React, { useState } from "react";
import styles from "./Box.module.scss";
import DatesList from "./../DatasList/DatasList";
import { useForm } from "react-hook-form";

function InputBox({ addDate, dates }) {
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });
  const [value, setValue] = useState("2020-01-02");

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.box}
        onSubmit={handleSubmit((data) => {
          addDate(data.date);
        })}
      >
        <p>To do list</p>
        <div className={styles.Input}>
          <p>New Task</p>
          <div className={styles.MainInput}>
            <input
              className={styles.text}
              {...register("name", { required: true })}
              placeholder={"Type here"}
              type="text"
            />
            <input
              className={styles.data}
              {...register("date", { required: true })}
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button>Add</button>
          </div>
        </div>
      </form>
      <div className={styles.list}>
        <DatesList Datas={dates} />
      </div>
    </div>
  );
}

export default InputBox;
