const router = require("express").Router();
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAllJobs).patch(updateJob);
router.route("/:id").get(getJob).delete(deleteJob);

module.exports = router;
