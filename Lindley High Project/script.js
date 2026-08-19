function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

const applicationForm = document.querySelector("form");

if (applicationForm) {
    applicationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const learnerId = document.getElementById("learner-id").files[0];
        const schoolReport = document.getElementById("school-report").files[0];
        const motherId = document.getElementById("mother-id").files[0];

        if (!learnerId || !schoolReport || !motherId) {
            alert("Please upload all required documents.");
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png"
        ];

        const documents = [learnerId, schoolReport, motherId];

        for (let document of documents) {
            if (!allowedTypes.includes(document.type)) {
                alert("Please upload documents in PDF, JPG, JPEG, or PNG format.");
                return;
            }
        }

        alert("Application submitted successfully!");

        applicationForm.reset();
    });
}

const viewTopLearners = document.getElementById("viewTopLearners");
const learnerResults = document.getElementById("learnerResults");
const gradeButtons = document.querySelectorAll(".grade-button");

learnerResults.style.display = "none";

viewTopLearners.addEventListener("click", function () {
    if (learnerResults.style.display === "none") {
        learnerResults.style.display = "block";
        viewTopLearners.textContent = "Hide Top Learners";
    } else {
        learnerResults.style.display = "none";
        viewTopLearners.textContent = "View Top Learners";
    }
});

gradeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const section = button.closest("section");
        const content = section.querySelector(".grade-content");

        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

const grade = document.getElementById("grade");
const subjectSection = document.getElementById("subjectSection");

const subjects = [
    document.getElementById("subject1"),
    document.getElementById("subject2"),
    document.getElementById("subject3"),
    document.getElementById("subject4"),
    document.getElementById("subject5")
];

grade.addEventListener("change", function () {

    if (grade.value === "10" || grade.value === "11" || grade.value === "12") {
        subjectSection.style.display = "block";

        subjects.forEach(function(subject) {
            subject.required = true;
        });

    } else {
        subjectSection.style.display = "none";

        subjects.forEach(function(subject) {
            subject.required = false;
            subject.value = "";
        });
    }

});