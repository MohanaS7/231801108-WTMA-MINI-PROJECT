// Save student details in localStorage
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studentForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let students = JSON.parse(localStorage.getItem("students")) || [];
            let newStudent = {
                id: students.length + 1,
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                grade: document.getElementById("grade").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                phone: document.getElementById("phone").value
            };

            students.push(newStudent);
            localStorage.setItem("students", JSON.stringify(students));
            alert("Student Added Successfully!");
            window.location.href = "index.html"; // Redirect back
        });
    }

    // Fetch student details and display in table
    const fetchDataBtn = document.getElementById("fetchData");
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener("click", function () {
            let students = JSON.parse(localStorage.getItem("students")) || [];
            let tableBody = document.getElementById("students");
            tableBody.innerHTML = "";

            students.forEach(student => {
                let row = `<tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>${student.email}</td>
                    <td>${student.address}</td>
                    <td>${student.phone}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });

            if (students.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='7'>No student data available</td></tr>";
            }
        });
    }

    // Clear student data
    const clearTableBtn = document.getElementById("clearTableBtn");
    if (clearTableBtn) {
        clearTableBtn.addEventListener("click", function () {
            localStorage.removeItem("students");
            document.getElementById("students").innerHTML = "<tr><td colspan='7'>No student data available</td></tr>";
        });
    }
});
