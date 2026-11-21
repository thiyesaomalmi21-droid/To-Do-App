//console.log("hii");
let todo=[];
const checkBox1=document.getElementById("checkBox");
const label=document.getElementById("lbl")
function openAlert(){
    
}

checkBox1.addEventListener("change", () => {
    label.style.textDecoration = checkBox1.checked ? "line-through" : "none";
  });

  function addigTheCheckList(){
    let titlename=document.getElementById("titleField").value;
    let timelap=document.getElementById("timeField").value;

    arrayB={
        title :titlename,
        timel :timelap
    }
    todo.push(arrayB);
    console.log(todo);

    for(let x of todo){
         body=`
        <tr>
        <td >${x.title}</td>
        <td ><input type="checkbox" name="" id="checkBox" ></td>
        </tr>
    `
    }
   
    
    document.getElementById("checkListtbl").innerHTML+=body;
    


  }