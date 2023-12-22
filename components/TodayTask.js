import React, { useState } from "react";
import TaskList from "./TaskList";

function TodayTask(props) {
  const { tasks } = props;
  console.log(tasks);
  console.log("k");
  return (
    <div>
      <h3>Today</h3>
      {tasks.map((task) => (
        <TaskList task={task} />
      ))}
    </div>
  );
}

export default TodayTask;
