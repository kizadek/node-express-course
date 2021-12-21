/**get all task
 * METHOD [GET]  /
 */

const getAllTasks = async (req, res, next) => {
  try {
    res.send("all tasks");
  } catch (error) {}
};

/**create task
 * METHOD [post]  /
 */

const createTask = async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {}
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
