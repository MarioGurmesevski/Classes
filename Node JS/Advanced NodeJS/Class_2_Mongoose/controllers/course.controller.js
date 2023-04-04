import CourseServie from "../services/course.service.js";

export default class CourseController {
  static async getAllCoutses(req, res) {
    try {
      const courses = await CourseServie.getAllCourses();
      res.status(200).send(courses);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
