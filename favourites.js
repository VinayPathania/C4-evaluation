// write js code here corresponding to favourites.html
//var FavArr = JSON.parse(localStorage.getItem("favourites"))
var favourit = JSON.parse(localStorage.getItem("favourite"))||[] ;

displayData(favourit)


function displayData(data){
    //document.querySelector("tbody").innerHTML="";
    data.forEach(function(ele,index){
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
        td6.innerText = "Delete";
        td6.addEventListener("click",function(){
            delFun(ele,index);
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        tbody.append(tr);
    

    })
}  
    function  delFun(ele,index){
        favourit.splice(index,1);
        //console.log(ele);
        localStorage.setItem("favourite",JSON.stringify(favourit));
        window.location.reload();
    }