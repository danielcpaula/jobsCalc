module.exports = {
  remainingDays(job) { 
    // Cálculo do tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()    
      
    const createdDate = new Date(job.created_At)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDate = createdDate.setDate(dueDay)
  
    const timeDiffInMs = dueDate - Date.now()
    //Transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
    // restam x dias
    return dayDiff
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}