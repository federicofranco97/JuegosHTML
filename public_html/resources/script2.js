/*
 * Usefull code:
 *  cambiar icono->
 *  .innerHTML="<i class=\"fas fa-skull\"></i>";   
 */

var selectedboats=0;
var score=0;

function assignAutomaticValues(){
    var aiCells=document.getElementsByClassName("ai");
    var num=Math.trunc(Math.random()*(4));
    var num2=Math.trunc(Math.random()*(4)+4);
    var num3=Math.trunc(Math.random()*(4)+8);
    var num4=Math.trunc(Math.random()*(4)+12);

    aiCells[num].name="boat";
    aiCells[num2].name="boat";
    aiCells[num3].name="boat";
    aiCells[num4].name="boat";   
    selectedboats=0;
}

function selectBoat(sth){
    if(selectedboats !==4){
        sth.name="boat";
        sth.innerHTML="<i class=\"fas fa-ship\"></i>";
        selectedboats++;
        console.log(selectedboats);
    }else{
        alert("No more boats to select!");    
        fillRestUp();
    }   
    
}

function fillRestUp(){
    console.log("entro");
    var usrCells=document.getElementsByClassName("usr");
    for(var i=0;i<usrCells.length;i++){
        if(usrCells[i].name !== "boat"){
            usrCells[i].innerHTML="<i class=\"fas fa-water\"></i>"; 
        }
    }
}

function usrShoot(sth){
    if(sth.name === "boat"){
        sth.innerHTML="<i class=\"fas fa-skull\"></i>";   
        sth.name="";
        score++;
        document.getElementById("scoreL").innerText="Score: "+score;
    }else{
        
    }
    
}

function refresh(){
    location.reload(true);
}