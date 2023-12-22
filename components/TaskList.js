import React from "react";
import styles from "./TaskList.module.css";

function TaskList(props) {
  console.log(props.task);
  return (
    <div className={styles.lists}>
      <section className={styles.tasks}>
        <input type="checkbox" className={styles.checkbox} />
        <p>{props.task.name}</p>
      </section>
      <section>
        <button>Delete</button>
      </section>
    </div>
  );
}

export default TaskList;
