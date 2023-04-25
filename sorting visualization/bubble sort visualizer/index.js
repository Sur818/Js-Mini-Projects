const wrapper=document.querySelector('.main-container'),
input_box=wrapper.querySelector("#input-box");
let addBtn=document.getElementById("add-btn");
let sortBtn=document.getElementById("sort-btn");
let resetBtn=document.getElementById("reset-btn");
let input_section=document.querySelector(".input-section");
let output_section=document.querySelector(".output-section");
let array=[];
let timeout=1000;
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

sortBtn.addEventListener('click',async()=>{
  for(let i=0;i<(array.length>1?array.length-1:array.length);i++){
    show_Array(array);
    await sleep(500);
    let box=output_section.querySelectorAll('.step_container')[step_containerNo];
    let array_element=box.getElementsByClassName("box");
     for(let j=0;j<array.length-i-1;j++){
      array_element[j].classList.add("traverse-data");
      array_element[j+1].classList.add("traverse-data");
      await sleep(1000);
      if(parseInt(array_element[j].innerHTML)>parseInt(array_element[j+1].innerHTML)){
              swap_Array(array,j,j+1);
              let temp=array_element[j].innerHTML;
              array_element[j].innerHTML=array_element[j+1].innerHTML;
              array_element[j+1].innerHTML=temp;
              await sleep(2000);
             }
  array_element[j].classList.remove("traverse-data"); 
  array_element[j+1].classList.remove("traverse-data");
  await sleep(50);
     }
  array_element[array.length-i-1].classList.remove("traverse-data");    
 print_sortedstep(i,array_element);
     step_containerNo+=1;
  }
  console.log(array);  
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


function print_sortedstep(row,array_element){
  for(let i=0;i<array.length;i++){
    if (i >= array.length-row-1 || row == array.length - 2)  {
array_element[i].classList.add("blue-color");
    }
  }
}


function resetData(){
  input_section.innerHTML="";
  output_section.innerHTML='';
}

