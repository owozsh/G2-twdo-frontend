import { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import HeaderBar from "../components/widgets/HeaderBar";
import Task from "../components/widgets/Task";
import TaskView from "../components/widgets/TaskView";
import { task } from "../types";

const exampleTasks: task[] = [
  {
    id: "1",
    description: "task",
    completed: false,
  },
];

export default function Today() {
  return <AppLayout title="today" tasks={exampleTasks} />;
}
