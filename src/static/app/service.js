const axios = require('axios');

class TaskService {
  getTasks() {
    return new Promise((resolve, reject) => {
      axios.get('/tasks').then((response) => {
        resolve(response.data);        
      });
    });    
  }

  addTask(text) {
    return new Promise((resolve, reject) => {
      axios.post('/tasks', {task: text}).then((response) => {
        resolve();
      });
    });
  }

  deleteTask(task) {
    console.log('Removing task.');
    return new Promise((resolve, reject) => {
      axios.delete('/tasks/' + task).then(() => {
        resolve();
      });
    });
  }
}

module.exports = new TaskService();