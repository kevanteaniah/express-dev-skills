import { Router } from 'express'
// import the Todo data
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()


// router.get('/', function(req, res) {
//   console.log("skills")
//   skillsDb.find({}, function(error, skills) {
//     console.log("error", error)
//     console.log("skill", skills)
//     res.render('skills/index', {
//       skills: skills,
//       error: error
//     })
//   })
// })

router.get('/', todosCtrl.index)

export {
  router
}
