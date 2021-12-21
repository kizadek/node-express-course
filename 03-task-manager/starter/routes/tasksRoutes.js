const router = require("express").Router();
const {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("./../controllers/task");
//app.get('/api/v1/tasks')        - get all the tasks
//app.post('/api/v1/tasks')       - create a new task
//app.get('/api/v1/tasks/:id')    - get single task
//app.patch('/api/v1/tasks/:id')  - update task
//app.delete('/api/v1/tasks/:id') - delete task

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
