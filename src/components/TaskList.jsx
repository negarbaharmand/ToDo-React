//component impoert
import TaskItem from "./TaskItem";
//styles
import styles from "./Tasklist.module.css";
const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={StyleSheet.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};
export default TaskList;
