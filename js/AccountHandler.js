function LoginCookie(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;

  document.cookie = "user=" +name+ "; max_age=604800";
  document.cookie = "email=" +email+ "; max_age=604800";

  console.log(document.cookie)
} 
