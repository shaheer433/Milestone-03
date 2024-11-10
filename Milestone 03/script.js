// Reference to the form and display area //
var form = document.getElementById("Resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle Form Submission //
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload //
    // collect input values //
    var Nmailame = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var Pducation = document.getElementById("Education").value;
    var Experience = document.getElementById("Experience").value;
    var Skills = document.getElementById("Skills").value;
    // Generate the resume contant dynamicaly //
    var resumeHTML = "\n<h2><br>Resume</br></h2\n<h3>Personal Information</h3>\n<p><b>Name:</b>" + "name" + "</p>\n<p><b>Email:</b>" + "email" + "</p>\n<p><b>Phone:</b>" + "phone" + "</p>\n\n<h3>Education</h3>\n<p>" + "education" + "</p>\n\n<h3>Experience</h3>\n<p>" + "experience" + "</p>\n\n<h3>Skills</h3>\n<p>" + "skills" + "</p>\n";
    // Display Generate Resume //
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
