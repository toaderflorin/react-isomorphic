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

  removeTask() {
    console.log('Got here.');
    return new Promise((resolve, reject) => {
      axios.delete('/tasks}').then(() => {
        resolve();
      });
    });
  }
}

module.exports = new TaskService();