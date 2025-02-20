document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("student-form");
    const studentList = document.getElementById("student-list")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("student-name").value;
        const email = document.getElementById("student-email").value;

        const li = document.createElement("li");
        li.textContent = `${name} - ${email}`;

        studentList.appendChild(li);

        form.reset();
    });
});