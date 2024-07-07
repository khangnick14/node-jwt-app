// import * as jobRepository from "../repositories/JobRepository";

// async function getAllJobs(req, res) {
//   try {
//     const jobs = await jobRepository.getAllJobs();
//     res.json(jobs);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function getUserById(req, res) {
//   const { id } = req.params;
//   try {
//     const user = await userRepository.getUserById(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function createUser(req, res) {
//   const userData = req.body;
//   try {
//     const newUser = await userRepository.createUser(userData);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function updateUser(req, res) {
//   const { id } = req.params;
//   const userData = req.body;
//   try {
//     const updatedUser = await userRepository.updateUser(id, userData);
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// async function deleteUser(req, res) {
//   const { id } = req.params;
//   try {
//     await userRepository.deleteUser(id);
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
