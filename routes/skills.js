import { Router } from 'express'
// import the Todo data
import * as skillsDb from '../data/skills-db.js'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/skills', function(req, res) {
  skillsDb.find({}, function(error, skill) {
    res.render('skills/index', {
      skill: skill,
      error: error
    })
  })
})

export {
  router
}
