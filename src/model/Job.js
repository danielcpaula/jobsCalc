let data = [
  {
    id: 1,
    name: "Pizzaria guloso",
    "daily-hours": 2,
    "total-hours": 1,
    created_At: Date.now(), //Atribuindo a data de hoje,
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    created_At: Date.now(), //Atribuindo a data de hoje
  },
];

module.exports = {
  get() {
    return data
  },
  
  update(newJob) {
    data = newJob
  },

  delete(id) {
    data = data.filter(job => Number(job.id) !== Number(id))
  }
}
