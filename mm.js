"use strict"
let me = function(){
  console.log("Hello , can i get your full name :");
  const resulteva=document.getElementById('first_input')
  let resulte =resulteva.value;
  let str='lotfi';
  if( typeof Number(resulte) ===typeof str ||resulte =='true'|| resulte=='false'){
    document.getElementById('titleH3').innerHTML="<p class='js-addButton'><font color ='rgba(200,0,0,0.7)'>error </font> Enter available name </p> <button onclick='me()' class='FirstButton'> Try again </button>";
    console.error(' typeof input is not string ');
  }
  else{
    console.log('the name ' + resulte );
  document.getElementById('titleH3').innerHTML="<p class='js-addButton'> You are welcome :<font color ='rgb(200,5,6)'> "+ resulte +"</font> </p> <button onclick='me()' class='FirstButton'> Change your name</button>";
  }
 
  return resulte;
}
console.log();
var user= function(){
  const inputnme= document.getElementById('texU');
  const inputnmeva= inputnme.value;

  const inputdateb= document.getElementById('birthU');
  const inputdatebva= inputdateb.value;

  const inputage= document.getElementById('ageU');
  const inputageva= inputage.value;
  
  const inputmajor= document.getElementById('majorU');
  const inputmajorva= inputmajor.value;

let infoUSER ={
  name:inputnmeva,
  deteB:inputdatebva,
  age:inputageva,
  majore:inputmajorva,
}
console.log('**************');
 console.log(infoUSER.name);
 console.log(infoUSER.age);
 console.log(infoUSER.deteB);
 console.log(infoUSER.majore);
 console.log('**************');
 return infoUSER;
}
