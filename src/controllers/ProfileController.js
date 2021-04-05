const Profile = require('../model/Profile')

module.exports = {
  index(req, res) {
    return res.render("profile", { profile: Profile.get() })
  },
  
  update(req, res) {
    // req.body para pegar os dados
    const data = req.body
    
    // definir quantas semanas tem num ano: 52
    const weeksPerYear = 52
    
    // remover as semanas de férias do ano, para pegar quantas semanas tem em 1 Mês
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
    
    // Quantidades de horas trabalhadas na semana
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
    
    // total de horas trabalhadas no mes
    const monthTotalHours = weekTotalHours * weeksPerMonth
    
    //qual será o valor da minha horas
    const valueHour = data["monthly-budget"] / monthTotalHours

    Profile.update({
      ...Profile.get(),
      ...req.body,
      "value-hour": valueHour,
    }) 

    return res.redirect('/profile')
  }
}