// write js code here corresponding to index.html
// You should add submit event on the form


var form = document.querySelector("#masaiForm");

form.addEventListener("submit", addData)
var inputArr=JSON.parse(localStorage.getItem("schedule") )||[];

function addData(){
    event.preventDefault();

    var data = {
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    inputArr.push(data);
    console.log(inputArr);
    localStorage.setItem("schedule", JSON.stringify(inputArr));
}