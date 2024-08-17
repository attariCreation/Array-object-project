const stds = [
    {
        name: "john doe",
        semester: 3,
        fatherName: "doe",
        isFeePaid:true,
        courses: ["maths", "science", "computer", "physics"]
    },
    {
        name: "jane watson",
        semester: 4,
        fatherName: "watson",
        isFeePaid:true,
        courses: ["biology", "english", "history", "chemistry"]
    },
    {
        name: "Emily johnson",
        semester: 2,
        fatherName: "johnson",
        isFeePaid:false,
        courses: ["biology", "physics", "english", "chemistry"]
    }
];
const studentInfo = document.getElementById("body");

for (let i = 0; i < stds.length; i++ ){
    const heading = document.createElement("H3");

    heading.innerHTML = `
    name: ${stds[i].name} <br />
     father Name: ${stds[i].fatherName} <br />
      semester: ${stds[i].semester} <br />
       Is fees paid ?: ${stds[i].isFeePaid} `;

    studentInfo.appendChild(heading);

    const courseList = document.createElement("ul");
    
    for(let j = 0; j < stds[i].courses.length; j++){
        const list = document.createElement("li");
        list.innerHTML = stds[i].courses[j];
        
        courseList.appendChild(list);
        }
    studentInfo.appendChild(courseList);
}
