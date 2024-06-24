class CourseView {
    constructor() {
        this.availableCoursesContainer = document.getElementById("available-courses-list");
        this.selectedCoursesContainer = document.getElementById("selected-courses-list");
        this.totalCreditsCount = document.getElementById("total-credits-count");
        this.selectButton = document.getElementById("select-btn");
        this.totalCredits = 0; // Initial total credits count


        // Event listener for handling click events on course items
        this.availableCoursesContainer.addEventListener('click', (event) => {
            let courseItem = event.target.closest('.course-item');
            if (courseItem) {
              this.toggleCourseSelection(courseItem);
            }
        });

        // Event listener for handling click events on course items in selected courses
        this.selectedCoursesContainer.addEventListener('click', (event) => {
            let courseItem = event.target.closest('.course-item');
            if (courseItem) {
                this.toggleCourseSelection(courseItem);
            }
        });

        // Event listener for "Select" button click
        this.selectButton.addEventListener('click', () => {
            const totalCredits = parseInt(this.totalCreditsCount.textContent);
            const confirmMessage = `You have chosen ${totalCredits} credits for this semester. You cannot change once you submit. Do you want to confirm?`;

            if (confirm(confirmMessage)) {
                // Trigger controller method to handle confirmation
                courseController.handleSelectConfirmation();
            }
        });
    }
  
    renderCourse(course) {
        // Create elements for each part of the course details
        const li = document.createElement('li');
        const courseName = document.createElement('span');
        const courseType = document.createElement('span');
        const courseCredit = document.createElement('span');

        // Set content and attributes
        courseName.textContent = course.courseName;
        courseType.textContent = `Course Type: ${course.required ? 'Compulsory' : 'Elective'}`;
        courseCredit.textContent = `Course Credit: ${course.credit}`;

        // Add class for styling
        li.classList.add('course-item');

        // Append elements to the list item
        li.appendChild(courseName);
        li.appendChild(document.createElement('br')); // Add line break
        li.appendChild(courseType);
        li.appendChild(document.createElement('br')); // Add line break
        li.appendChild(courseCredit);

        // Append the list item to the available courses container
        this.availableCoursesContainer.appendChild(li);
    }

    toggleCourseSelection(course) {
        // Toggle selection by changing background color and state
        if (course.classList.contains('selected')) {
            course.classList.remove('selected');
            this.totalCredits -= parseInt(course.textContent.match(/\d+/)[0]); // Subtract credits from course text content
        } else {
            // Ensure only one course is selected at a time in available courses
            course.classList.add('selected');
            this.totalCredits += parseInt(course.textContent.match(/\d+/)[0]); // Add credits from course text content
        } 

        this.totalCreditsCount.textContent = parseInt(this.totalCredits); // Convert to integer

        if (this.totalCredits > 18) {
            alert("You can only choose up to 18 credits in one semester");
        }
    }

    disableSelectButton() {
        this.selectButton.disabled = true;
    }

    enableSelectButton() {
        this.selectButton.disabled = false;
    }
}
