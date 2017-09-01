const Task = require('./task');

const TaskList = ({ taskList, deleteTask }) => {
  const els = taskList.map((task) => {
    return <Task task={task} deleteTask={deleteTask} />;
  });

  return (
    <div>
      {els}
    </div>
  );
};

module.exports = TaskList;