//console.log("hii");
let todo = [];
// const checkBox1=document.getElementById("checkBox");
// const label=document.getElementById("lbl")
function openAlert() {

}

// checkBox1.addEventListener("change", () => {
//     label.style.textDecoration = checkBox1.checked ? "line-through" : "none";
// });
function deleteFunction(index) {

    console.log(index);
    todo.splice(index, 1);
    rePaintCards();

}

function rePaintCards() {
    let body = ``;
    todo.forEach((x, index) => {

        body += `
       
        <div class="card" style="max-width: 320px;" >
                <div class="card-body">
                    <h4 class="card-title">${x.title}</h4>
                    <p class="card-subtitle fg-3">With a card subtitle</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card’s content.</p>
                        
                    <input type="button" value="Delete" onclick="deleteFunction(${index})">
                </div>
            </div>
    `
    });
    document.getElementById("checkListtbl").innerHTML = body;
}

function addigTheCheckList() {
    let titlename = document.getElementById("titleField").value;
    let timelap = document.getElementById("timeField").value;
    let discription = document.getElementById("DiscriptionField").value;

    arrayB = {
        title: titlename,
        timel: timelap,
        descrip: discription
    }
    todo.push(arrayB);
    console.log(todo);
    let body = ``

    todo.forEach((x, index) => {

        body += `
       
        <div class="card" style="max-width: 320px;" >
                <div class="card-body">
                    <h4 class="card-title">${x.title}</h4>
                    <p class="card-subtitle fg-3">${x.timel}</p>
                    <p class="card-text">${x.descrip}</p>
                    
                    <table>
                         <tr>
                            <td><input type="button" value="Delete" class="btn-solid" onclick="deleteFunction(${index})"></td>
                             <td><input type="button" value="Done" class="btn-solid" onclick=""></td>
                        </tr>
                    </table>
                        
                    
                    
                </div>
            </div>
    `

    });


    document.getElementById("checkListtbl").innerHTML = body;



}

