import React, { useState } from "react";
import styles from "./TaskForm.module.css";
import TodayTask from "./TodayTask";

function TaskForm() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let task = {
      name,
      description,
    };
    setTasks((prevState) => {
      return [...prevState, task];
    });
    setName("");
    setDescription("");
  };

  return (
    <div className={styles.form_container}>
      <TodayTask tasks={tasks} />
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <input type="text" placeholder="Task Name" onChange={nameHandler} />
        </div>
        <div className={styles.control}>
          <input
            type="text"
            placeholder="Description"
            onChange={descriptionHandler}
          />
        </div>
        <div className={styles.action}>
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
