// Reference to the form and display area //
const form = document.getElementById(`Resume-form`) as HTMLFormElement
const resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement

// Handle Form Submission //
form.addEventListener('submit' , (event: Event) => {
  event.preventDefault(); // prevent page reload //
  // collect input values //
const Nmailame =(document.getElementById(`Name`) as HTMLInputElement).value
const Email = (document.getElementById(`Email`) as HTMLInputElement).value
const phone = (document.getElementById(`Phone`) as HTMLInputElement).value
const Pducation = (document.getElementById(`Education`) as HTMLInputElement).value
const Experience = (document.getElementById(`Experience`) as HTMLInputElement).value
const Skills = (document.getElementById(`Skills`) as HTMLInputElement).value

// Generate the resume contant dynamicaly //
const resumeHTML = `
<h2><br>Resume</br></h2
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>email:</b>${`email`}</p>
<p><b>phone:</b>${phone}</p>

<h3>Education</h3>
<p>${`education`}</p>

<h3>Experience</h3>
<p>${`experience`}</p>

<h3>Skills</h3>
<p>${`skills`}</p>
`;
// Display Generate Resume //
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error(`The resume display element is missing`)
}
})