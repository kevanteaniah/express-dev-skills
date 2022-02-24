import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  todoDb.find({}, function(error, skills) {
    res.render('todos/index', {
      skills: skills,
      error: error
    })
  })
}

export {
	index
}