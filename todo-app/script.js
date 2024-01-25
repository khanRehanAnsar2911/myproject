var btn1=document.querySelector("#addbtn")
let inp=document.querySelector("#inp")
let editItem=null
btn1.addEventListener("click",(e)=>{
  if(e.target.value=="Edit"){
    editItem.target.parentNode.children[0].textContent=inp.value;
   e.target.value="Add"
    inp.value=""
    return 
  }
  else{
    
  if(inp.value==""){
    alert("Please enter a task")
    return
  }
  let task=inp.value
  document.querySelector(".Tasks").innerHTML+=`<div class="task"><span>${task}</span><button class="btn">Edit</button><button class="btn">Delete</button></div>`
  inp.value=""
  }
})

document.querySelector(".Tasks").addEventListener("click",(e)=>{
  if(e.target.textContent=="Edit"){
    inp.value=e.target.parentNode.children[0].textContent
 btn1.value="Edit"
    editItem=e
  }
  else{
    e.target.parentNode.remove()
  }
})