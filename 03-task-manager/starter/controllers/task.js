const Task = require("../db/models/Task");


/**get all task
 * METHOD [GET]  /
 */

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({})
    console.log(tasks)
    if(tasks.length == 0 ) return res.status(200).json({success: true, msg: 'sorry it look you have no  task '})
    return res.status(200).json({
      success: true,
      data:tasks
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      msg:'sorry saver problem'
    })
  }
};

/**create task
 * METHOD [post]  /
 */

const createTask = async (req, res, next) => {
  try {
    const {name,completed} = req.body
    const savedTask = Task.create({name,completed})
    console.log(savedTask)
    return res.status(201).json({
      success:true,
      msg: `task ${name} crated`,
      body: savedTask
    })
  } catch (error) {
   // console.log(error)
    res.status(500).json({
      error
    })
  }
};

/**get one task
 * METHOD [GET]  /:id
 */

const getTask = async (req, res, next) => {
  try {
    res.send("single task");
  } catch (error) {}
};

/**update one task
 * METHOD [patch]  /:id
 */

const updateTask = async (req, res, next) => {
  try {
    res.send(req.params.id);
  } catch (error) {}
};

/**delete Tasks task
 * METHOD [DELETE]  /:id
 */

const deleteTask = async (req, res, next) => {
  try {
    res.send("task deleted");
  } catch (error) {}
};

module.exports = {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
