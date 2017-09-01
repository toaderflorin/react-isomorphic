const axios = require('axios');

class AddTask extends React.Component {
  constructor() {
    this.state = {
      taskText: ''
    };

    this.addTaskClick = this.addTaskClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="top">
        <span className="spaced-out">Add a task</span>
        <input className="spaced-out" type="text" value={this.state.taskText} onChange={this.handleChange} />
        <button className="spaced-out" onClick={this.addTaskClick}>Add</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      taskText: event.target.value
    });
  }

  addTaskClick() {
    this.props.addTaskClick(this.state.taskText);
  }
}

module.exports = AddTask;