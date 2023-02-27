// Assignment Code
var generateBtn = document.querySelector("#generate");
// var numbers=[0,1,2,3,4,5,6,7,8,9]
function generatePassword(){

  var passwordLength=parseInt(window.prompt("enter desired password length"))
if(passwordLength===null || isNaN(passwordLength)){
  
  alert("must enter a valid password length")
  return "please try again"
}
  console.log(passwordLength)
  
 if (passwordLength < 8){
  return false
 }
 if (passwordLength > 128){
  return false
 }
  var yesLower=confirm("would you like lowercase letters")
  var characterstring=""
  if(yesLower){
    characterstring=characterstring.concat("abcdefghijklmnopqrstuvwxyz")
  }
  if(confirm("would you like uppercase letters")){
   characterstring +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(confirm("would you like numbers")){
    characterstring +="0123456789"
  }
  if(confirm("would you like special characters")){
    characterstring +="!%@*&"
  }
  if(characterstring.length===0){
    alert("must select one character type");
    return "please try again"; 
  }
  var chararray=characterstring.split("")
  var passstring=""
  for(var i=0;i<passwordLength;i++){
    var index=Math.floor(Math.random()*chararray.length)
    var digit=chararray[index]
passstring +=digit
  }
  return passstring
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
