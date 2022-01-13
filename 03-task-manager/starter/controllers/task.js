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
    const savedTask = await Task.create(req.body)
    if(!savedTask) return res.status(200).json({
      success: false,
    })
    console.log(savedTask)
    return res.status(201).json({
      success:true,
      msg: `task crated`,
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
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID})
    if(!task) return res.status(200).json({success: true, msg:`sorry no task was found with the provided id:${taskID}`})
   res.json(task);
  //  console.log(task)
  } catch (error) {
   console.log(`ERROR::: ${error}`)
  }
};

/**update one task
 * METHOD [patch]  /:id
 */

const updateTask = async (req, res, next) => {
  try {
    const {id: taskID} = req.params
    const data = req.body
    const newTask = await Task.findOneAndUpdate({_id: taskID},data,{new:true})
    if(!newTask) return res.status(200).json({success: true, msg:`no task with id: ${taskID} to update`})
  res.status(200).json({
    success: true,
    newTask
  })
  } catch (error) {
    console.log(`${error}`)
    return res.status(500).json({
      success: false,
      msg: `sorry there was aproblem with the server try agen`
    })
  }
  
};

/**delete Tasks task
 * METHOD [DELETE]  /:id
 */

const deleteTask = async (req, res, next) => {
  try {
    const {id: taskID} = req.params
    const deleted = await Task .findOneAndDelete({_id: taskID})
    if(!deleted) return res.status(200).json({
      success: false,
      msg:`sorry task with id: ${taskID} not found!`
    })
    console.log(deleted)
    res.status(200).json({
      success: true,
      msg: `task with id: ${taskID} was deleted successfuly!`,
      data:deleteTask
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false,
      msg: `sorry there was saver error try agen `
    })
  }
};

module.exports = {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
