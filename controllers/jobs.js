
const getAllJobs = async (req, res) => {
    res.send('Get all Jobs')
}
const getJob = async (req, res) => {
    res.send('Get a Job')
}
const createJob = async (req, res) => {
    res.send('create Job')
}
const updateJob = async (req, res) => {
    res.send('Update Job')
}
const deleteJob = async (req, res) => {
    res.send('Delete Job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
