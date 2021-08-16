// main container
let main=document.querySelector("main");
// button
let changeBg=document.getElementById("changeBg");

// array
let arr=[
  {
    first:"#FFC146",
    second:"#D9F368"
  },
  {
    first: "#9AD9E9",
    second: "#B4E555"
  },
  {
    first: "#FA068A",
    second: "#C114F8"
  },
  {
    first: "#A306FA",
    second: "#8AFA06"
  }];

// button click operation 
changeBg.addEventListener("click", ()=>
{
  let random=Math.floor(Math.random() * 5);
  
  //console.log(random);
  main.style.background=`linear-gradient(to right, ${arr[random].first}, ${arr[random].second})`;
});