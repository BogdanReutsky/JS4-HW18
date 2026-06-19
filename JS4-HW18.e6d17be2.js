function t(){return fetch("http://localhost:3000/students").then(t=>t.json())}let e=document.getElementById("get-students-btn"),n=document.querySelector(".tbody"),l=document.getElementById("add-student-form"),d=null;function o(t){n.innerHTML=t.map(({id:t,name:e,age:n,course:l,skills:d,email:o,isEnrolled:a})=>`<tr id="${t}">
             <td>${t}</td>
             <td>${e}</td>
             <td>${n}</td>
             <td>${l}</td>
             <td>${d}</td>
             <td>${o}</td>
             <td>${a}</td>
             <td>
    <button type="button" data-action="edit">Edit</button>
    <button type="button" data-action="delete">Delete</button>
    </td>
        </tr>`).join("")}t().then(t=>console.log(t)),e.addEventListener("click",()=>{t().then(t=>o(t))}),l.addEventListener("submit",e=>{var n;e.preventDefault();let a={name:e.currentTarget.name.value,age:e.currentTarget.age.value,course:e.currentTarget.course.value,skills:e.currentTarget.skills.value,email:e.currentTarget.email.value,isEnrolled:e.currentTarget.isEnrolled.checked};d?(n=d,fetch(`http://localhost:3000/students/${n}`,{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json())).then(t).then(t=>o(t)).finally(()=>{l.reset(),d=null}):(fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(()=>t()).then(t=>o(t)),l.reset())}),n.addEventListener("click",e=>{let n=e.target.closest("td").parentNode,a=n.id;"delete"===e.target.dataset.action&&(console.log(a),fetch(`http://localhost:3000/students/${a}`,{method:"DELETE"}).then(t=>t.json())).then(t).then(t=>o(t)),"edit"===e.target.dataset.action&&(d=a,l.elements[0].value=n.children[1].textContent,l.elements[1].value=n.children[2].textContent,l.elements[2].value=n.children[3].textContent,l.elements[3].value=n.children[4].textContent,l.elements[4].value=n.children[5].textContent,l.elements[5].checked=n.children[6].textContent)});
//# sourceMappingURL=JS4-HW18.e6d17be2.js.map
