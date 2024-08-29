// document.addEventListener('DOMContentLoaded', function() {
// document.getElementById('studentForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         let name = document.getElementById('name').value;
//         let age = document.getElementById('age').value;
//         let email = document.getElementById('email').value;
//         let number = document.getElementById('number').value;
//         let course = document.getElementById('course').value;
//         if (name || age || email || course) {
//             console.log("Student Data:");
//             console.log(`Name: ${name}`);
//             console.log(`Age: ${age}`);
//             console.log(`Email: ${email}`);
//             console.log(`Phone Number: ${number}`);
//             console.log(`Course: ${course}`);
//         }
//         document.getElementById('studentForm').reset();
//     });
// });














var arr = []
var obj = {}

var FullName = document.getElementById("name")
var Age = document.getElementById("age")
var Email = document.getElementById("email")
var Phone = document.getElementById("number")
var Course = document.getElementById("course")

function btnclick(){
obj.FullName = FullName.value
obj.Age = Age.value
obj.Email = Email.value
obj.Phone = Phone.value
obj.Course = Course.value

arr.push({...obj})

FullName.value = "";
Age.value = "";
Email.value = "";
Phone.value = "";
Course.value = "";

console.log(arr);

}