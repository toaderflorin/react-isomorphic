const service = require('./service');
const AddTask = require('./addTask');
const TaskList = require('./taskList');

class App extends React.Component {
  constructor() {
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    update();
  }

  render() {
    return (
      <div className="content">
        <AddTask addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    )
  }

  addTask(text) {
    const index = this.state.taskList.indexOf(text);
    
    if (index === -1) {
      service.addTask(text).then(this.update);
    } else {
      alert('Task already exists.');
    }
  }

  deleteTask(task) {
    if (confirm('Are you sure')) {
      service.deleteTask(task).then(this.update);
    }
  }

  update() {
    service.getTasks().then((results) => {
      this.setState({
        taskList: results
      });
    });
  }
}

module.exports = App;