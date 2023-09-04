// // const friends=['fahad','sakil','sakin','yeasin','mamlot','mridul'];
// // console.log(friends.length);
// // console.log(friends);
// // // console.log(...friends);
// // // const friends1=['abdullah',...friends];
// // // console.log(friends1);
// // // console.log(...friends1);
// // console.log(length)
// // const [first,second]=['fahad','sakil','sakin','yeasin','mamlot','mridul'];
// // console.log(first);
// // const friends=['fahad','sakil','sakin','yeasin','mamlot','mridul'];
// // const [king, body,honda,manager]=friends;
// // console.log(king); 

// const friends=["Moushumi","Misha","Manna","mimi","mahiya"];

// // const result=friends[0];
// // const len=result.length;
// var even_len=[];
// for(var i=0;i<friends.length;i++){
//     const val=friends[i];
//     const subSlen=val.length;
//     if(subSlen%2==0){
//       // const arr=[];
//        //console.log(arr);
//        even_len.push(val);
//     }
//     //console.log(subSlen);
//     //console.log(val);
// }
// // for(var i = 0; i < even_len.length; i++) {
// //     console.log(even_len[i]);
// // }
// // console.log(result);
// // console.log(len);
// console.log(even_len);

// calculate average 
// const numbers=[2,3,4];
// const sumOfArraySquare=(arr)=>{
//   const sumof=arr.reduce((sum,element)=>sum+(element*element),0);
//   return average=sumof/arr.length;

// }
// const result=sumOfArraySquare(numbers);
// console.log(result.toFixed(2));

// this is another system 
// const numbers=[2,3,4];
// const sumOfArraySquare=(arr)=>arr.reduce((sum,element)=>sum+(element*element),0)

// const averaOfA=(arr)=>{
//   sumOfArraySquare(numbers);
//   return average=sumOfArraySquare(numbers)/arr.length;
// }
// const result=averaOfA(numbers);
// console.log(result);


// showing elements by using for loop 
const friends=["Moushumi","Misha","Manna","mimi","mahiya"];
for(const friend of friends){
  console.log(friend);
}