class CourseController {
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.initApp();
      }

    initApp() {
        this.fetchCourses();
    }

    fetchCourses() {
        courseAPI.fetchCoursesAPI().then((courses) => {
            // this.#model.setCourses(courses);
            courses.forEach((course) => {
                this.#view.renderCourse(course)
            });
        });
    }

}
