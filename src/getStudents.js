export async function getStudents (){
const res = await fetch("http://localhost:3000/students")
const info = res.json()
return info
}

// .then(res => res.json())