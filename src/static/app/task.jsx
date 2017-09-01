const service = require('./service');

class Task extends React.Component {
  constructor() {
    this.deleteTask = this.deleteTask.bind(this);
  }

  render() {
    return (
      <div className="task">
        <button onClick={this.deleteTask}>Delete</button>
        &nbsp;
        {this.props.task}
      </div>
    );
  }

  deleteTask() {
    service.removeTask()
      .then(() => service.getTasks())
      .then((results) => {
        this.setState({
          taskList: results
        });
      });
  }
}

module.exports = Task;