const wrapper=document.querySelector('.main-container'),
input_box=wrapper.querySelector("#input-box");
let addBtn=document.getElementById("add-btn");
let sortBtn=document.getElementById("sort-btn");
let resetBtn=document.getElementById("reset-btn");
let input_section=document.querySelector(".input-section");
let output_section=document.querySelector(".output-section");
let array=[];
let step_containerNo=0;



function addNumber(){
  let getData=input_box.value;
  getData = parseInt(getData);
  if(!Number.isNaN(getData)) {
     let box=document.createElement("div");
     box.appendChild(document.createTextNode(getData));
     box.setAttribute("class","box");
     document.querySelector(".input-section").appendChild(box); 
     array.push(getData);
   }
console.log(array);
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


sortBtn.addEventListener("click",async()=>{
  show_Array(array);
  for(let i=0;i<array.length-1;i++){
    let box=output_section.querySelectorAll('.step_container')[step_containerNo];
    let array_element=box.getElementsByClassName("box");  
    let min_idx=i;
    array_element[i].classList.add("pointing_element");
    await sleep(500);
    for(let j=i+1;j<array.length;j++){
      array_element[j].classList.add('searching_minElement');
      await sleep(500);
      array_element[j].classList.remove('searching_minElement');
      if(array_element[j].innerHTML<array_element[min_idx].innerHTML) {
      min_idx = j;
}
    }
    if (min_idx!=i){
      array_element[min_idx].classList.add("found_minElement");
      await sleep(1000);
      let temp=array_element[min_idx].innerHTML;
  array_element[min_idx].innerHTML=array_element[i].innerHTML;
  array_element[i].innerHTML=temp;
  await sleep(2000);
  array_element[min_idx].classList.remove("found_minElement");
    swap_Array(array,min_idx,i);
      }
  array_element[i].classList.remove("pointing_element");
  array_element[i].classList.add("green");
  if(i==array.length-2){
   array_element[array.length-1].classList.add("green");

  }
  }

})





function show_Array(array){
    let step_container=document.createElement("div");
    step_container.setAttribute('class',"step_container");
    for(i=0;i<array.length;i++){
      let box=document.createElement("div");
       box.appendChild(document.createTextNode(array[i]));
       box.setAttribute("class","box");
       step_container.appendChild(box);  
    }
    output_section.appendChild(step_container); 
  }
  
  

  
  function swap_Array(array,i,j){
    let temp= array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  



function resetData(){
    input_section.innerHTML="";
    output_section.innerHTML='';
  }












