const API_URL = "http://localhost:4232/courseList";

const courseView = new CourseView();
const courseModel = new CourseModel();
const courseController = new CourseController(courseModel, courseView);