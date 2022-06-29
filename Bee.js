let countEl =document.getElementById('counter');
let claimEl = document.getElementById('giveBee');
let yourBee = document.getElementById('add');
let takeAwayBee = document.getElementById('take away');
document.getElementById("take away").disabled = true;
let count =0;
countEl.textContent= 0;
function addBee() {
    console.log(countEl);
    count += 1;
    countEl.textContent = count;
    document.getElementById("take away").disabled = false;
    if (count > 1){
        document.getElementById("add").disabled = true;
    } 

}

function takeawayBee() {
    console.log(countEl);
    count -= 1;
    countEl.textContent = count;
    document.getElementById("add").disabled = false;
    if (count < 1){
        document.getElementById("take away").disabled = true;
    }  
        
    

}

yourBee.addEventListener("click", function(){
    addBee()

})

takeAwayBee.addEventListener("click", function(){
    takeawayBee()

})



function textBtn (){
    claimEl.textContent = "Give me that bee";
}

claimEl.addEventListener("click", function(){
    textBtn()

})
