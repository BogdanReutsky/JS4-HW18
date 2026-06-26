async function t(){return(await fetch("http://localhost:3000/students")).json()}let e=document.getElementById("get-students-btn"),n=document.querySelector(".tbody"),r=document.getElementById("add-student-form"),a=null;function o(t){n.innerHTML=t.map(({id:t,name:e,age:n,course:r,skills:a,email:o,isEnrolled:l})=>`<tr id="${t}">
             <td>${t}</td>
             <td>${e}</td>
             <td>${n}</td>
             <td>${r}</td>
             <td>${a}</td>
             <td>${o}</td>
             <td>${l}</td>
             <td>
    <button type="button" data-action="edit">Edit</button>
    <button type="button" data-action="delete">Delete</button>
    </td>
        </tr>`).join("")}async function l(t){let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let t=await fetch("http://localhost:3000/students",e);if(!t.ok)throw Error(error.message);return await t.json()}catch(t){throw t}}async function c(t,e){let n={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let e=await fetch(`http://localhost:3000/students/${t}`,n);if(!e.ok)throw Error(error.message);return await e.json()}catch(t){throw t}}async function s(t){console.log(t);try{let e=await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"});if(!e.ok)throw Error(error.message);return await e.json()}catch(t){throw t}}t().then(t=>console.log(t)),e.addEventListener("click",async()=>{let e=await t();await o(e)}),r.addEventListener("submit",async e=>{e.preventDefault();let n={name:e.currentTarget.name.value,age:e.currentTarget.age.value,course:e.currentTarget.course.value,skills:e.currentTarget.skills.value,email:e.currentTarget.email.value,isEnrolled:e.currentTarget.isEnrolled.checked};if(a)try{await c(a,n);let e=await t();o(e),r.reset(),a=null;return}catch(t){console.log(t)}try{await l(n);let e=await t();o(e),r.reset()}catch(t){console.log(t)}}),n.addEventListener("click",async e=>{let n=e.target.closest("td").parentNode,l=n.id;if("delete"===e.target.dataset.action)try{await s(l);let e=await t();await o(e)}catch(t){console.log(t)}"edit"===e.target.dataset.action&&(a=l,r.elements[0].value=n.children[1].textContent,r.elements[1].value=n.children[2].textContent,r.elements[2].value=n.children[3].textContent,r.elements[3].value=n.children[4].textContent,r.elements[4].value=n.children[5].textContent,r.elements[5].checked=n.children[6].textContent)});
//# sourceMappingURL=JS4-HW18.78fff278.js.map
