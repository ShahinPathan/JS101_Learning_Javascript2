// let arr=[1,3,5,8];
// let sum=0;
// for(let i=0;i<=arr.length-1;i++){
//   if(i==1||i==3){
//     continue;
//   }sum=sum+arr[i];
// }console.log(sum);

// const sh=[1,2,3,34,]
// function sha(num,index)  
//   {
//     console.log (num*num)
//   }
// for(let i=0;i<sh.length;i++){
//   console.log(i)
//   sha(sh[i],i)
// }



// function user(firstname,age,id,email){
//   this.firstname=firstname;
//   this.id=id;
//   this.age=age;
//   this.email=email;
  
// }
// user.prototype.about=function(){
//   return `my name is ${this.firstname} and mu age is ${this.age}.`
// }
// const user1=new user("shahin",23,"Isha","shahinpatel@gmail.com");
// console.log(user1);
// console.log(user1.about())


// function user(firstname,age,id,email){
//   this.firstname=firstname;
//   this.age=age;
//   this.id=id;
//   this.email=email;
// }
// user.prototype.about=function(){
//   return `my name is ${this.firstname} and my age is ${this.age}`
// }
// const user1=new user("shahin",23,"Isha","shahin@gamil.com");
// console.log(user1);
// console.log(user1.about())
// for(let key in user1){
//   console.log(key)
//   console.log(user1.hasOwnProperty(key))
// }


// class user{
//   constructor(firstname,id,age){
//   this.firstname=firstname;
//     this.id=id;
//     this.age=age;
    
//   }
//   get about(){
//    return `${this.firstname} is ${this.age} years old.`
//   }
// }
// const sh=new user("shahin","isha",23,"shahn@gmail.com")
// console.log(sh.about)
// console.log(sh)


// let bag=" ";
// let string="abcd";
// for(let i=string.length-1;i>=0;i--){
//   bag+=string[i];
// }
// console.log(bag)

// let bag=[];
// let arr=[1,2,3,4,5,];
// for(let i=arr.length-1;i>=0;i--){
//   bag+=arr[i]
// }
// console.log(bag)


// var reverse = function(x) {
//   var INT_MAX = 2147483647;
//   var INT_MIN = - INT_MAX - 1;
//   var res = 0;
//   var num = x;
//   while (num !== 0) {
//     res = (res * 10) + (num % 10);
//     num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
//     if (res > INT_MAX || res < INT_MIN) return 0;
//   }
//   return res;
// };
// reverse(345);

// let a=10;
// let b=20;
// console.log(((a+b)>(b-a)<=(a/b)>(a%b)))

// let a=15;
// let b=15;
// let c="15";
// console.log(a+b+c)

// console.log("one"<7)

let x=3;
let y=1;
console.log(((x+y)**(x-y)) *((y**2)+(x**3)))



let price=1000;
let budget=500;
if(price<=budget){
  console.log("I can buy")
}else{
  console.log("I can't buy")
}