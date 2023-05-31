function popup(){
  const email_entry =document.getElementById("email").value;
  const overlay=document.getElementById("overlay");
  const popup=document.getElementById("popup");
  overlay.style.display="block";
  popup.style.display="block";
  document.getElementById("gmail_output").innerHTML=email_entry+"."; 
}
function validate(){
  const email_entry =document.getElementById("email").value;
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_entry)!=true)
  {    const error=document.getElementById("error");
       console.log(error);
       error.style.display="inline-block";
  return (false);
}
console.log(email_entry);
// console.log((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_entry)));
popup();
return (true);
}

function exit(){
  const overlay=document.getElementById("overlay");
  const popup=document.getElementById("popup");
  error.style.display="none";
  overlay.style.display="none";
  popup.style.display="none";
}
