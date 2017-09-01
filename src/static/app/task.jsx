const service = require('./service');

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <button onClick={deleteTask.bind(this, task)}>Delete</button>
      &nbsp;
      {task}
    </div>
  );
}

module.exports = Task;