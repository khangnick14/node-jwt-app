import * as jobRepository from "../repositories/JobRepository";

async function getAllJobs(req, res) {
  try {
    const jobs = await jobRepository.getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getJobById(req, res) {
  const { id } = req.params;
  try {
    const job = await jobRepository.getJobById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createJob(req, res) {
  const jobData = req.body;
  try {
    const newJob = await jobRepository.createJob(jobData);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateJob(req, res) {
  const { id } = req.params;
  const jobData = req.body;
  try {
    const updatedJob = await jobRepository.updateJob(id, jobData);
    res.json(updateJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteJob(req, res) {
  const { id } = req.params;
  try {
    await jobRepository.deleteJob(id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getAllJobs, getJobById, createJob, updateJob, deleteJob };
