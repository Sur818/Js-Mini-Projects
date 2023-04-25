
function deleteword(item,index)
{
  let text=document.getElementById('input-text').value;
  let delword=document.getElementById('input-box').value;
  console.log(text);
  let words=text.split(' ');

  
  let outputScreen = document.getElementById('output-text');
  for(let i=0;i<words.length;i++){
   
    if (words[i]!=delword)
    {
      outputScreen.innerHTML += words[i] + " ";
    }
  }
  

  }

// function reset(){
//   outputScreen.innerHTML = "";
// }