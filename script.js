document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            document.getElementById("course-table").innerHTML = "<tr><td colspan='5'>Failed to load courses.</td></tr>";
        });
});

function displayCourses(courses) {
    const tableBody = document.getElementById("course-table");
    tableBody.innerHTML = "";

    courses.forEach(course => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.year_level}</td>
            <td>${course.sem}</td>
            <td>${course.code}</td>
            <td>${course.description}</td>
            <td>${course.credit}</td>
        `;
        row.classList.add("course-row");
        tableBody.appendChild(row);
    });
}

function filterCourses() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const courseRows = document.querySelectorAll(".course-row");

    courseRows.forEach(row => {
        if (row.textContent.toLowerCase().includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
