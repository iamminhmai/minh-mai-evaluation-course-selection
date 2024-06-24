const courseAPI = (() => {
    const BASE_COURSE_API = "http://localhost:4232/courseList";

    const fetchCoursesAPI = async () => {
        return fetch(BASE_COURSE_API).then((res) => res.json());
      };

    return {
        fetchCoursesAPI
    };
})();
