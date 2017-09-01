const axios = require('axios');

class AddTask extends React.Component {
  constructor() {
    this.state = {
      taskText: ''
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="top">
        <span className="spaced-out">Add a task</span>
        <input className="spaced-out" type="text" value={this.state.taskText} onChange={this.handleChange} />
        <button className="spaced-out" onClick={this.props.addTask.bind(this, this.state.taskText)}>Add</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      taskText: event.target.value
    });
  }
}

module.exports = AddTask;