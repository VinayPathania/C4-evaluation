// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule")) ||[]


function nameSort(){
    var select = document.querySelector("#filterVenue").value;
    var filteredList = matchArr.filter(function(element){
        return element.venue == select;
    })
    displayData(filteredList);
}

displayData(matchArr)



var FavArr = JSON.parse(localStorage.getItem("favourites")) || [];


function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(ele){
        var tr=document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = ele.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = ele.teamA;

        var td3 = document.createElement("td");
        td3.innerText = ele.teamB;

        var td4 = document.createElement("td");
        td4.innerText = ele.date;

        var td5 = document.createElement("td");
        td5.innerText = ele.venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourit";
        td6.addEventListener("click",function(){
            favFun(ele);
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("#tbody").append(tr);
    

    })
}  
    function  favFun(ele){
        FavArr.push(ele)
        //console.log(ele);
        localStorage.setItem("favourites",JSON.stringify(matchArr));
    }

    



