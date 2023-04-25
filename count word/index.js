let result=document.getElementById('output-data');
let resetBtn=document.getElementById("reset-btn");
function countWord(id){
let inputValue=document.getElementById('input-data').value;
inputValue=inputValue.split(' ');
var word=0;
for(var i=0;i<inputValue.length;i++){
    if(inputValue[i]!=''){
        word+=1;
    }
}
showResult(word);
}

function showResult(words){
result.innerHTML="No of words are :-"+words;
}

resetBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('input-data').value='';
    document.getElementById('output-data').innerHTML='&nbsp;';



})