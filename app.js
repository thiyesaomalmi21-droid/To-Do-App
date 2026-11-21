//console.log("hii");
let todo = [];
// const checkBox1=document.getElementById("checkBox");
// const label=document.getElementById("lbl")
function openAlert() {

}

// checkBox1.addEventListener("change", () => {
//     label.style.textDecoration = checkBox1.checked ? "line-through" : "none";
// });

function addigTheCheckList() {
    let titlename = document.getElementById("titleField").value;
    let timelap = document.getElementById("timeField").value;

    arrayB = {
        title: titlename,
        timel: timelap
    }
    todo.push(arrayB);
    console.log(todo);
    let body = ``
    for (let x of todo) {
        body += `
        <div class="card" style="max-width: 320px;">
                <div class="card-body">
                    <h4 class="card-title">${x.title}</h4>
                    <p class="card-subtitle fg-3">With a card subtitle</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card’s content.</p>
                    <a href="#">Card link</a>
                </div>
            </div>
    `
    }


    document.getElementById("checkListtbl").innerHTML = body;



}
