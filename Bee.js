const imputEl = document.getElementById('myText');
const claimEl = document.getElementById('giveBee');
const yourBee = document.getElementById('add');
const takeAwayBee = document.getElementById('take away');
let count = 0;

var isMetamaskConnected = false;
var accountAddress = null;
var blockActions = true;

document.getElementById("take away").disabled = true;
imputEl.value = 0;

// FUNCTIONS

function addBee() {
    console.log(imputEl);
    count += 1;
    imputEl.value = count;
    document.getElementById("take away").disabled = false;
    if (count > 1){
        document.getElementById("add").disabled = true;
    } 

}

function takeawayBee() {
    console.log(imputEl);
    count -= 1;
    imputEl.value = count;
    document.getElementById("add").disabled = false;
    if (count < 1){
        document.getElementById("take away").disabled = true;
    }  
}

function browserSupportsRPC() {
    return ethereum.isConnectd();
}

function browserSupportsMetamask() {
}

function textBtn (){
    claimEl.textContent = "Give me that bee";
}

// EVENT LISTENERS
yourBee.addEventListener("click", function(){
    addBee()

})

takeAwayBee.addEventListener("click", function(){
    takeawayBee()

})

claimEl.addEventListener("click", async () => {
    if (!isMetamaskConnected) {
        ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => { console.log(accounts[0]); accountAddress = accounts[0] } );
        isMetamaskConnected = true;
    } else {
        console.log(accountAddress);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded");
})

claimEl.addEventListener("click", function(){
    textBtn()
})