const service = require('./service');
const AddTask = require('./addTask');
const TaskList = require('./taskList');

class App extends React.Component {
  constructor() {    
    this.addTaskClick = this.addTaskClick.bind(this);
    this.componentDidMount = this.componentDidMount(this);    

    this.state = {
      taskList: []
    };  
  }

  componentDidMount() {
    service.getTasks().then(results => {
      this.setState({
        taskList: results
      });
    }); 
  }
  
  render() {
    return (
      <div className="content">
        <AddTask addTaskClick={this.addTaskClick} />
        <TaskList taskList={this.state.taskList} />
      </div>
    )
  }

  addTaskClick(text) {  
    service.addTask(text)
      .then(() => service.getTasks())
      .then((results) => {
        this.setState({
          taskList: results
        });
      });  
  }
}

module.exports = App