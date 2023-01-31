
// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let name="shaheen";
let pass="pathan@00";
let candidates_name="shaheen";
let her_password="pathan@00";
if(name==candidates_name){
  if(pass==her_password){
    console.log("login successfully")
  }else{
    console.log("wrong password")
  }
}else{
  console.log("Wrong credential")
}