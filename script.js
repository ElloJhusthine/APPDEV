document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            document.getElementById("course-list").innerHTML = "<li>Failed to load courses.</li>";
        });
});

function displayCourses(courses) {
    const coursesContainer = document.getElementById("course-list");
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${course.code}</strong>: ${course.description} (${course.credit} credits) - ${course.year_level} Year, ${course.sem} Semester`;
        li.classList.add("course-item");
        coursesContainer.appendChild(li);
    });
}

function filterCourses() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const courseItems = document.querySelectorAll(".course-item");

    courseItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
