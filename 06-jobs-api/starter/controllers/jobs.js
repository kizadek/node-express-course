/*
METHOD [POST] 
ENDPOINT /api/v1/jobs/create
Status:: Protected
*/
const createJob = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "job created",
  });
};

/*
METHOD [GET] 
ENDPOINT /api/v1/jobs/jobs/
Status:: Protected
*/
const getAllJobs = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "list of jobs",
  });
};

/*
METHOD [GET] 
ENDPOINT /api/v1/jobs/jobs/id
Status:: Protected
*/
const getJob = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "single job",
  });
};

/*
METHOD [PATCH] 
ENDPOINT /api/v1/jobs/
Status:: Protected
*/
const updateJob = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "job Updated",
  });
};

/*
METHOD [DELETE] 
ENDPOINT /api/v1/jobs/id
Status:: Protected
*/
const deleteJob = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "job Deleted",
  });
};

module.exports = {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
};
