const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
  name: "Daniel",
  avatar: "https://avatars.githubusercontent.com/u/9807253?v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75,
}

const Job = {
  data: [
    {
      id: 1,
      name: "OneTwo", 
      "daily-hours": 2, 
      "total-hours": 1,
      "created_At" : Date.now(), //Atribuindo a data de hoje
    },
    {
      id: 2,
      name: "Pizzaria guloso", 
      "daily-hours": 3, 
      "total-hours": 47,
      "created_At" : Date.now(), //Atribuindo a data de hoje,
    }
  ],

  controllers: {
    index(req, res) {
  
        const updatedJobs = Job.data.map((job) => {
          const remaining = Job.services.remainingDays(job)
          const status = remaining <= 0 ? 'done' : 'progress'
          return {
            ... job,
            remaining,
            status,
            budget: profile["value-hour"] * job["total-hours"]
          }
         })
         
      
        return res.render(views + "index", {jobs: updatedJobs})
    },

    create(req, res) {
      const lastId = Job.data[Job.data.length - 1]?.id || 1;
  
      jobs.push({
        id: lastId + 1,
        name: req.body.name, 
        "daily-hours": req.body["daily-hours"], 
        "total-hours": req.body["total-hours"],
        "created_At" : Date.now() //Atribuindo a data de hoje
      })
      return res.redirect('/')
    }
  },

  services: {
    remainingDays(job) { 
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()    
        
      const createdDate = new Date(job.created_At)
      const dueDay = createdDate.getDate() + Number(remainingDays)
      const dueDate = createdDate.setDate(dueDay)
    
      const timeDiffInMs = dueDate - Date.now()
      //Transformar milli em dias
      const dayInMs = 1000 * 60 * 60 * 24
      const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
      return dayDiff
    }
  }
}


routes.get('/',Job.controllers.index)

routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', Job.controllers.create)
  
routes.get('/job', (req, res) => res.render(views + "job-edit"))

routes.get('/profile', (req, res) => res.render(views + "profile", { profile: profile}))


module.exports = routes