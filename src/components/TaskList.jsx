//component impoert
import TaskItem from "./TaskItem";
//styles
import styles from "./Tasklist.module.css";
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className={StyleSheet.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
    </ul>
  );
};
export default TaskList;
