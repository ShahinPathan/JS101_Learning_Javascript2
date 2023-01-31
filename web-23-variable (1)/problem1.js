// let x="Masai school";
// console.log(x);
// let y="A Transformation In Education"
// console.log(y)



//<============ using queue=========>
// let queue=[];
// let size=queue.length;
// let max=5;
// function enqueue(newval){
//   if(size>=max){
//     alert("queue is already full")
//   }else{
//     queue[size]=newval;
//     size++;
//   }
// }
// function display(){
//   console.log(queue);
// }
// function dequeue(){
//   if(size>0){
//     for(let i=0;i<queue.lenght;i++){
//     queue[i]=queue[i+1];
    
//      }
//     size--;
//     queue.length=size;
//   }else{
//     alert("queue is already empty")
//   }
// }
// enqueue(11);
// enqueue(12);
// enqueue(13);
// enqueue(14);
// enqueue(15);
// // enqueue(16);
// display();
// dequeue();


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
// reverse(23);




// let a=3;
// let b=2;
// console.log("sum is 5",a+b);
// console.log("sub is 1",a-b);
// console.log("multiplecation is 6",a*b);
// console.log("division is 1.5",a/b);


// let a=2;let b=3;
// console.log(a**b);

// ======square root=======
// let a=16;
// console.log(a**(1/2));


// console.log("Masai"+"\n"+"School");


// let number=1;
// while(number<=15){
//   if(number%2!=0){
//   console.log(number);}
//   number++;
// }


let num=0;
let sum=0;
while(num<=10){
  if(num%3==0){
    sum+=num;
  }
  num++;
}
console.log(sum)