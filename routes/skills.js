import { Router } from 'express'
// import the skill data
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

router.get('/', skillsCtrl.index)

router.get("/:id", skillsCtrl.show)

export {
  router
}
