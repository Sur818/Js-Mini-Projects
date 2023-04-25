const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


let notes_container=document.getElementById('notes-cnt');
let modalBox=document.querySelector('#modal_box');
let addBtn = modalBox.querySelector(".Add-note-btn");
let updateBtn=document.querySelector('.modal-footer .update-note-btn');
let isupdated=false;
let count=0;

$('#myModal').on('hidden.bs.modal', function (e) {
  e.preventDefault();
    document.getElementById('title-box').value = '';
    document.getElementById('description-box').value = '';
    document.querySelector(".modal-container  .modal-title").innerHTML = 'Add a new Note';
    addBtn.style.display='block';
    updateBtn.style.display='none';
  });

function createNote(){
  var titleValue=document.getElementById('title-box').value.trim();
  var descriptionValue=document.getElementById('description-box').value.trim();
  var noteBox=document.createElement('div');
  noteBox.setAttribute('class','noteBox');
  notes_container.appendChild(noteBox);
  noteBox.innerHTML+=`<li class="note">
  <div class="details">
    <p>This is a Title</p>
    <span>Lorem ipsum dolor sit, ameit and consectetur adipisicing elit. seds do eiusmod eveats tempoirs incididuntu labore et dolore magna.</span>
  </div>
  <div class="bottom-content">
    <span>date here...</span>
    <div class="settings">
    <i class="fa-solid fa-ellipsis"></i>
      <ul class="menu">
        <li onclick="EditNote(event);"><i class="fa-solid fa-pen"></i>Edit</li>
        <li onclick="DeleteNote(event);"><i class="fa-solid fa-trash"></i>Delete</li>
      </ul>
    </div>
  </div>
</li>`
console.log('hello');
document.querySelectorAll('.note p')[count].innerText=titleValue;
document.querySelectorAll('.note .details span')[count].innerText=descriptionValue;
document.getElementById('title-box').value="";
document.getElementById('description-box').value='';
document.getElementById('closeModal').click();
}




addBtn.addEventListener("click", e=> {
  e.preventDefault();
  let currentDate = new Date(),
  month = months[currentDate.getMonth()],
  day = currentDate.getDate(),
  year = currentDate.getFullYear();
  document.querySelectorAll('.note .bottom-content span')[count].innerHTML=`${month} ${day}, ${year}`;
  noteBox=document.querySelectorAll('.noteBox')[count];
  let getLocalStorageData = localStorage.getItem("New Notes");
  if(getLocalStorageData == null){
    listArray = [];
  }else{  
    listArray = JSON.parse(getLocalStorageData);
  } 
  listArray.push(noteBox.outerHTML);
  localStorage.setItem("New Notes", JSON.stringify(listArray)); 
  count+=1;
  console.log(notes_container);
});




function  EditNote(event){
  var isupdated=false;
  event.preventDefault();
  var element=event.target.parentElement;
  while(element.className!="note"){
   element=element.parentElement;
   } 
  element.setAttribute("id",'tempid');
  let allNotes=document.getElementsByClassName('note');
  for(let i=0;i<allNotes.length;i++){
    if(allNotes[i].id=='tempid'){
      document.querySelector(".modal-container  .modal-title").innerHTML='Update a Note';
      $("#myModal").modal('show');
      var presentTitle= allNotes[i].querySelector('p').innerText;
      var presentDescription=allNotes[i].querySelector('.details span').innerText;
      document.getElementById('title-box').value=presentTitle;
      document.getElementById('description-box').value=presentDescription;
       addBtn.style.display='none';
       updateBtn.style.display='block';
    updateBtn.addEventListener('click',()=>{ 
      var titleValue=document.getElementById('title-box').value.trim();
      var descriptionValue=document.getElementById('description-box').value.trim();
        allNotes[i].querySelector('p').innerText=titleValue;
        allNotes[i].querySelector('.details span').innerText=descriptionValue;
      isupdated=true;
      if(isupdated){
        document.getElementById('title-box').value="";
        document.getElementById('description-box').value='';
        addBtn.innerHTML='Add Note';
        document.querySelector(".modal-container  .modal-title").innerHTML='Add a new Note';
        document.getElementById('closeModal').click();
        addBtn.style.display='block';
        updateBtn.style.display='none';
      }
     },{once:true});
    element.removeAttribute("id");
    }
  }
   }
  


function DeleteNote(event){
  var element=event.target.parentElement;
  while(element.className!="noteBox"){
   element=element.parentElement;
   }
   element=element.parentElement;
   var index=-1;
   noteBox=document.querySelectorAll('.noteBox');
for(var i=0;i<noteBox.length;i++){
  if(noteBox[i]===element){
   index=i;
  }
}
  element.remove();
  count-=1;
  let getLocalStorageData = localStorage.getItem("New Notes");
  noteBoxes = JSON.parse(getLocalStorageData);
   noteBoxes.splice(index,1);
   localStorage.setItem("New Notes", JSON.stringify(noteBoxes));
}



function showNotes(){
  let getLocalStorageData = localStorage.getItem("New Notes");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.forEach((element, index) => {
    var noteBox=document.createElement('div');
    noteBox.innerHTML=element;
    notes_container.appendChild(noteBox);
    count=listArray.length;
  });

}
showNotes();


