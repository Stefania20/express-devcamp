const express = require('express')

const{getAllCourses,
    getSingleCourse,
    updateCourses,
    deleteCourses,
    createCourses} = require('../controllers/CoursesController')
const router = express.Router()

router.route('/')
      .get(getAllCourses)
      .post(createCourses)

router.route('/:id')
      .get(getSingleCourse)
      .put(updateCourses)
      .delete(deleteCourses)



module.exports = router