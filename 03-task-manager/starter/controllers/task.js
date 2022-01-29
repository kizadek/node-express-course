const Task = require("../db/models/Task");
const asyncWrapper = require("../middleware/async")
const {createCustomError} = require("../errors/custom-errors");

/**get all task
 * METHOD [GET]  /
 */

const getAllTasks =asyncWrapper( async (req, res, next) => {
    const tasks = await Task.find({})
    console.log(tasks)
    if(tasks.length == 0 ) return next(createCustomError ("sorry there are no tasks to show!!",200))
    return res.status(200).json({success: true,tasks})
});

/**create task
 * METHOD [post]  /
 */
// async wrapper working 
const createTask = asyncWrapper( async (req, res, next) => {
    const task = await Task.create(req.body)
    if(!task) return next( createCustomError(" sorry task not created!!",200))
    return res.status(201).json({success:true,msg: `task crated`,task })
});

/**get one task
 * METHOD [GET]  /:id
 */
// working wrapper
const getTask =asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID})
    if(!task) return next (createCustomError(`sorry no task was found with the provided id: ${taskID}`,404))
   return res.json({task});
  // console.log(task)
});

/**update one task
 * METHOD [patch]  /:id
 */
// async wrapper woring
const updateTask = asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params
    const data = req.body
    const task = await Task.findOneAndUpdate({_id: taskID},data,{new:true,runValidators:true})
    if(!task) return next(createCustomError(`no task with id: ${taskID} to update`,404))
 return res.status(200).json({ success: true, task }) 
});

/**delete Tasks task
 * METHOD [DELETE]  /:id
 */
// working wrapper
const deleteTask = asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params
    const deleted = await Task .findOneAndDelete({_id: taskID})
    if(!deleted) return next(createCustomError(`sorry task with id: ${taskID} not found!`,404))
   return res.status(200).json({success: true, msg: `task with id: ${taskID} was deleted successfuly!`,data:deleteTask })
});

module.exports = {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
