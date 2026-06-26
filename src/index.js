import { getStudents } from "./getStudents";

const buttonEl = document.getElementById("get-students-btn");
const tbodyEl = document.querySelector(".tbody");
const formEl = document.getElementById("add-student-form");

let currentId = null

getStudents().then((res) => console.log(res));

buttonEl.addEventListener("click", async () => {
const res = await getStudents()
await renderStudents(res)
});

// .then((res) => renderStudents(res));


function renderStudents(students) {
  const item = students
    .map(({ id, name, age, course, skills, email, isEnrolled }) => {
      return `<tr id="${id}">
             <td>${id}</td>
             <td>${name}</td>
             <td>${age}</td>
             <td>${course}</td>
             <td>${skills}</td>
             <td>${email}</td>
             <td>${isEnrolled}</td>
             <td>
    <button type="button" data-action="edit">Edit</button>
    <button type="button" data-action="delete">Delete</button>
    </td>
        </tr>`;
    })
    .join("");

  tbodyEl.innerHTML = item;
}



formEl.addEventListener("submit",async (e) => {
  e.preventDefault();
  const data = {
    name: e.currentTarget.name.value,
    age: e.currentTarget.age.value,
    course: e.currentTarget.course.value,
    skills: e.currentTarget.skills.value,
    email: e.currentTarget.email.value,
    isEnrolled: e.currentTarget.isEnrolled.checked,
  };
  if(currentId){
try {
   await updateStudent(currentId, data)
 const res = await getStudents()
renderStudents(res) 
formEl.reset()
currentId = null
return
} catch (error) {
  console.log(error);
}
  }

    //   .then(getStudents).then(res => renderStudents(res)).finally(()=>{
    //     formEl.reset()
    //     currentId = null
    // })

try {
  await addStudent(data)
const res = await getStudents()
  renderStudents(res)
  formEl.reset();
} catch (error) {
  console.log(error);
}
});

    // .then(() => getStudents())
    // .then((res) => renderStudents(res));

async function addStudent(e) {
  const options = {
    method: "POST",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }; 
try {
  const res = await fetch("http://localhost:3000/students", options)
  if(!res.ok){
    throw new Error(error.message)
  }
  const info = await res.json()
  return info
} catch (error) {
  throw error
}
}

// .then((res) =>
//     res.json(),
//   );


async function updateStudent(id, data) {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
try {
  const res = await fetch(`http://localhost:3000/students/${id}`, options)
if(!res.ok){
  throw new Error(error.message)
}
  const response = await res.json()
  return response
} catch (error) {
  throw error
}
}

// .then(
//     (response) => response.json(),
//   );

async function deleteStudent(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  })
     if(!res.ok){
      throw new Error(error.message)
     }
    const info = await res.json()
     return info
  } catch (error) {
    throw error
  }
}

// .then((res) => res.json());

tbodyEl.addEventListener("click",async (e) => {
  const td = e.target.closest("td");
  const currentTd = td.parentNode;
  const id = currentTd.id;
  if (e.target.dataset.action === "delete") {
    try {
    await deleteStudent(id)
    const res = await getStudents()
    await renderStudents(res)
    } catch (error) {
      console.log(error);
    }
      // .then(getStudents)
      // .then((res) => renderStudents(res));
  }
  if (e.target.dataset.action === "edit") {
    currentId = id
   formEl.elements[0].value = currentTd.children[1].textContent
   formEl.elements[1].value = currentTd.children[2].textContent
   formEl.elements[2].value = currentTd.children[3].textContent
   formEl.elements[3].value = currentTd.children[4].textContent
   formEl.elements[4].value = currentTd.children[5].textContent
   formEl.elements[5].checked = currentTd.children[6].textContent
  }
});