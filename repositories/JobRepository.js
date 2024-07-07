import Job from "../model/Job";

async function getAllJobs() {
  const jobs = await Job.findAll();
  return jobs;
}

async function getJobById(id) {
  const job = await Job.findByPk(id);
  return job;
}

async function createJob(title, description, userId) {
  const newJob = await Job.create({ title, description, user_id: userId });
  return newJob;
}

async function updateJob(id, newData) {
  const job = await Job.findByPk(id);
  if (!job) {
    throw new Error(`Job with ${id} is not found`);
  }
  await job.update(newData);
  return job;
}

async function deleteJob(id) {
  const job = await Job.findByPk(id);
  if (!job) {
    throw new Error(`Job with ${id} is not found`);
  }
  await job.destroy();
  return true;
}

export { getAllJobs, getJobById, createJob, updateJob, deleteJob };
