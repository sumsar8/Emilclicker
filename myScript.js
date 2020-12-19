var x, y, emilcoins;
y = 0;


document.getElementById("result").innerHTML = localStorage.clickcount;

function clickCounter() {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}

if (localStorage.knappuppgraderingar == 1) {
    document.getElementById("idforclickcounter").onclick = emilcounter4x;
    document.getElementById("Upgradepic1").src = "/images/checkmark.png"
    document.getElementById("cost10").innerHTML = ("Bought!");
    document.getElementById("f").src = "/images/emil2.jpg"
}

if (localStorage.knappuppgraderingar == 2) {
    document.getElementById("idforclickcounter").onclick = emilcounter10x;
    document.getElementById("Upgradepic1").src = "/images/checkmark.png"
    document.getElementById("cost10").innerHTML = ("Bought!");
    document.getElementById("Upgradepic2").src = "/images/checkmark.png"
    document.getElementById("cost100").innerHTML = ("Bought!");
    document.getElementById("f").src = "/images/emil3.png" 
}

if (localStorage.knappuppgraderingar == 3) {
    document.getElementById("idforclickcounter").onclick = emilcounter16x;
    document.getElementById("Upgradepic1").src = "/images/checkmark.png"
    document.getElementById("cost10").innerHTML = ("Bought!");
    document.getElementById("Upgradepic2").src = "/images/checkmark.png"
    document.getElementById("cost100").innerHTML = ("Bought!");
    document.getElementById("Upgradepic3").src = "/images/checkmark.png"
    document.getElementById("cost1000").innerHTML = ("Bought!");
    document.getElementById("f").src = "/images/emil4.png" 
}

if (localStorage.knappuppgraderingar == 4) {
    document.getElementById("idforclickcounter").onclick = emilcounter50x;
    document.getElementById("Upgradepic1").src = "/images/checkmark.png"
    document.getElementById("cost10").innerHTML = ("Bought!");
    document.getElementById("Upgradepic2").src = "/images/checkmark.png"
    document.getElementById("cost100").innerHTML = ("Bought!");
    document.getElementById("Upgradepic3").src = "/images/checkmark.png"
    document.getElementById("cost1000").innerHTML = ("Bought!");
    document.getElementById("Upgradepic4").src = "/images/checkmark.png"
    document.getElementById("cost10000").innerHTML = ("Bought!");
    document.getElementById("f").src = "/images/emil5.png" 
}

if (localStorage.knappuppgraderingar == 5) {
    document.getElementById("idforclickcounter").onclick = emilcounter100x;
    document.getElementById("Upgradepic1").src = "/images/checkmark.png"
    document.getElementById("cost10").innerHTML = ("Bought!");
    document.getElementById("Upgradepic2").src = "/images/checkmark.png"
    document.getElementById("cost100").innerHTML = ("Bought!");
    document.getElementById("Upgradepic3").src = "/images/checkmark.png"
    document.getElementById("cost1000").innerHTML = ("Bought!");
    document.getElementById("Upgradepic4").src = "/images/checkmark.png"
    document.getElementById("cost10000").innerHTML = ("Bought!");
    document.getElementById("Upgradepic5").src = "/images/checkmark.png"
    document.getElementById("cost100000").innerHTML = ("Bought!");
    document.getElementById("f").src = "/images/Windis.png" 
}
function Upgradebuttona(){
    if (localStorage.clickcount > 9){
        document.getElementById("Upgradepic1").src = "/images/checkmark.png";
        document.getElementById("result").innerHTML = Number(localStorage.clickcount) - 10;
        localStorage.clickcount = Number(localStorage.clickcount) - 10;
        document.getElementById("f").src = "/images/emil2.jpg";
        document.getElementById("cost10").innerHTML = ("Bought!");
        
        if (localStorage.knappuppgraderingar == 0){
            document.getElementById("idforclickcounter").onclick = emilcounter4x;
            localStorage.knappuppgraderingar = 1;
        }
        
    }
}
function emilcounter4x(){
    localStorage.clickcount = Number(localStorage.clickcount) + 4;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}

function Upgradebuttonb(){
    if (localStorage.clickcount > 99){
        document.getElementById("Upgradepic2").src = "/images/checkmark.png";
        document.getElementById("result").innerHTML = Number(localStorage.clickcount) - 100;
        localStorage.clickcount = Number(localStorage.clickcount) - 100;
        document.getElementById("f").src = "/images/emil3.png";
        document.getElementById("cost100").innerHTML = ("Bought!");
        
        if (localStorage.knappuppgraderingar == 0, 1){
            document.getElementById("idforclickcounter").onclick = emilcounter10x;
            localStorage.knappuppgraderingar = 2;
        }
    }
}
function emilcounter10x(){
    localStorage.clickcount = Number(localStorage.clickcount) + 10;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}

function Upgradebuttonc(){
    if (localStorage.clickcount > 999){
        document.getElementById("Upgradepic3").src = "/images/checkmark.png";
        document.getElementById("result").innerHTML = Number(localStorage.clickcount) - 1000;
        localStorage.clickcount = Number(localStorage.clickcount) - 1000;
        document.getElementById("f").src = "/images/emil4.png";
        document.getElementById("cost1000").innerHTML = ("Bought!");
        
        if (localStorage.knappuppgraderingar == 0, 1, 2){
            document.getElementById("idforclickcounter").onclick = emilcounter16x;
            localStorage.knappuppgraderingar = 3;
        }
    }
}
function emilcounter16x(){
    localStorage.clickcount = Number(localStorage.clickcount) + 16;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}

function Upgradebuttond(){
    if (localStorage.clickcount > 9999){
        document.getElementById("Upgradepic4").src = "/images/checkmark.png";
        document.getElementById("result").innerHTML = Number(localStorage.clickcount) - 10000;
        localStorage.clickcount = Number(localStorage.clickcount) - 10000;
        document.getElementById("f").src = "/images/emil5.png";
        document.getElementById("cost10000").innerHTML = ("Bought!");
        
        if (localStorage.knappuppgraderingar == 0, 1, 2, 3){
            document.getElementById("idforclickcounter").onclick = emilcounter50x;
            localStorage.knappuppgraderingar = 4;
        }
    }
}
function emilcounter50x(){
    localStorage.clickcount = Number(localStorage.clickcount) + 50;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}

function Upgradebuttone(){
    if (localStorage.clickcount > 99999){
        document.getElementById("Upgradepic5").src = "/images/checkmark.png";
        document.getElementById("result").innerHTML = Number(localStorage.clickcount) - 100000;
        localStorage.clickcount = Number(localStorage.clickcount) - 100000;
        document.getElementById("f").src = "/images/Windis.png";
        document.getElementById("cost100000").innerHTML = ("Bought!");
        
        if (localStorage.knappuppgraderingar == 0, 1, 2, 3, 4){
            document.getElementById("idforclickcounter").onclick = emilcounter100x;
            localStorage.knappuppgraderingar = 5;
        }
    }
}
function emilcounter100x(){
    localStorage.clickcount = Number(localStorage.clickcount) + 100;
    document.getElementById("result").innerHTML = localStorage.clickcount;
}
function resetlocalstorage(){
    localStorage.clickcount = 0;
    document.getElementById("result").innerHTML = localStorage.clickcount;
    document.getElementById("idforclickcounter").onclick = clickCounter;
    document.getElementById("f").src = "/images/emil1.jpg";
    localStorage.knappuppgraderingar = 0;
    document.getElementById("Upgradepic1").src = "/images/MouseUpgrade2.png";
    document.getElementById("cost10").innerHTML = ("Cost: 10");
    document.getElementById("Upgradepic2").src = "/images/MouseUpgrade3.png";
    document.getElementById("cost100").innerHTML = ("Cost: 100");
    document.getElementById("Upgradepic3").src = "/images/MouseUpgrade4.png";
    document.getElementById("cost1000").innerHTML = ("Cost: 1000");
    document.getElementById("Upgradepic4").src = "/images/MouseUpgrade5.png";
    document.getElementById("cost10000").innerHTML = ("Cost: 10 000");
    document.getElementById("Upgradepic5").src = "/images/MouseUpgrade6.png";
    document.getElementById("cost100000").innerHTML = ("Cost: 100 000");
}