//component impoert
import TaskItem from "./TaskItem";
//styles
import styles from "./Tasklist.module.css";
const TaskList = ({ tasks }) => {
  return (
    <ul className={StyleSheet.tasks}>
      {tasks.map((task) => {
        <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
};
export default TaskList;
