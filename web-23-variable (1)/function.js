// let arr=[3,"alu","batata","potato",]
// function sabji(value,items, index){
//   console.log(`${value*2}`)
//   console.log("index of alu")
//   console.log("items are",arr[3])
// }
// sabji(arr[0],1,arr[3])
// let num=[1,2,3,4]
// function multiplyByTwo(number,index){
//   console.log(index,"is index")
//   console.log(`${number}*2=${number*2}`)
  
// }
// num.forEach(multiplyByTwo)
// let obj=[
//   {name:"shahin",roll_no:455,marks:100},
//   {name:"shahin",roll_no:455,marks:100},
//   {name:"shahin",roll_no:455,marks:100},
// ]
// obj.forEach(function(obj){
//   console.log(obj.name)
//   console.log(obj)
// })
// let bag=[];
// let obj=["abcdefghijklmnopqrstuvwxyz"]
// obj.forEach(function(obj){
//   console.log(obj.toUpperCase())
//   bag+=obj
// })
// console.log(bag);
// let obj=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"
//          ,"o","p","q","r","s","t","u","v","w","x","y","z"]
// obj.forEach((obj,index)=>{
//   console.log(obj,index)
// })
// let arr=[1,2,3,4,4,5]
// let sh=arr.map((arr)=>{
//   return arr
// })
// console.log(sh)
// or


// let arr=[1,2,3,4,5]
// let sh=arr.map((arr)=>{
//   return arr*arr
// })
// console.log(sh)



// <============find method========>\\


// const users=[
//   {userId:1, userName:"shahin"},
//   {userId:2, userName:"shaheen"},
//   {userId:3, userName:"Israel"},
//   {userId:4, userName:"pathan"},
//   {userId:5, userName:"rahil"}
// ]
// const family=users.find((users)=>{
//  return users.userId===3
// })
// console.log(family)





//<============= EVERY METHOD===========>
// it's gives us output in {boolean}
// like a callback method
// means it gives us output in true or false


// const arr=[2,4,6,8,10]
// const arr2=arr.every((number)=>{
//   return number%2===0
// })
// console.log(arr2)
// const usercart=[
//   {userId:1,userName:"shaheen",birthdate:1999},
//   {userId:1,userName:"Israel",birthdate:1993},
//   {userId:1,userName:"Pathan",birthdate:2023}
// ]
// const marriage=usercart.every((num)=>{usercart.birthdate>2050})
// console.log(marriage)




// <==========iterable=========>


// objects are not literable
// arrays are literable

// const name="shaheen"
// for(let nam of name){
//   console.log(nam)
// }
// 


// <===============array like objects==============>

// jnke pass length aur index property hoti hai
// for example:-String
