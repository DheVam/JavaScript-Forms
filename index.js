const peru =  document.getElementById("name");
const email = document.getElementById("mail");
const button = document.getElementById("button");
const errors = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener('submit',(e) => {
   let messages = [];
   if(peru.value === '' || peru.value === null){
      messages.push("Name field cannot be empty");
   }
   if(email.length === 0 || email.value === ''){
      messages.push("Email field cannot be empty");
   }
   if(messages.length > 0){
      e.preventDefault()
      errors.innerText = messages.join(', ')
   }else{
      alert("success");
   }
})
