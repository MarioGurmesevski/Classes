import Course from "../models/course.model.js";

export default class CourseServie {
  static async getAllCourses() {
    const courses = await Course.find({});
    return courses;
  }
}
