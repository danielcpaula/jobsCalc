const Database = require('../db/config')


module.exports = {
  async get() {
    const db = await Database()

    const jobs = await db.all(` SELECT * FROM jobs `)

    await db.close()

    return jobs.map(job => ({
      id: job.id,
      name: job.name,
      "daily-hours": daily_hours,
      "total-hours": total_hours,
      created_At: created_At
    }))
  },
  
  update(newJob) {
    data = newJob
  },

  delete(id) {
    data = data.filter(job => Number(job.id) !== Number(id))
  },

  create(newJob) {
    data.push(newJob)
  }
}
