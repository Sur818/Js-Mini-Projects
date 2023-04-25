let checkBtn=document.getElementById('check-btn');
let result=document.querySelector(".output-section span");
let check;
checkBtn.addEventListener('click', (e)=>{
e.preventDefault();
var inputValue=document.getElementById('input-data').value;         
inputValue=inputValue.split(' ');
showPalindrome(inputValue);
document.getElementById('input-data').value='';
})



function showPalindrome(inputValue){
    result.innerHTML='&nbsp;';
for(var word=0;word<inputValue.length;word++){
   let len=inputValue[word].length;
   check=true;
   for(var j=0;j<len;j++){ 
    if(inputValue[word][j]!==inputValue[word][len-1-j]){
        check=false;
    }
   }
   if(check){
    result.innerHTML+=inputValue[word]+" ";
   }
}
if(check==false){
    result.innerHTML="No palidrome words are present in sentence";
}
}