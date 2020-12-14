var x, y, emilcoins;
x = 0;
y = 0;


function emilcounter(){
    x = x + 1;
    document.getElementById("Gudnummer").innerHTML = x;
}

function Upgradebuttona(){
    if (x > 9){
        document.getElementById("Upgradepic1").src = "/images/checkmark.png";
        x = x - 10;
        document.getElementById("Gudnummer").innerHTML = x;
        document.getElementById("f").src = "/images/emil2.jpg";
        document.getElementById("cost10").innerHTML = ("Bought!");
            if (y == 0){
                document.getElementById("f").onclick = emilcounter4x;
                y = 1;
        }
        
    }
}
function emilcounter4x(){
    x = x + 3;
    document.getElementById("Gudnummer").innerHTML = x;
}

function Upgradebuttonb(){
    if (x > 99){
        document.getElementById("Upgradepic2").src = "/images/checkmark.png";
        x = x - 100;
        document.getElementById("Gudnummer").innerHTML = x;
        document.getElementById("f").src = "/images/emil3.png";
        document.getElementById("cost100").innerHTML = ("Bought!");
            if (y == 0, 1){
                document.getElementById("f").onclick = emilcounter10x;
                y = 2;
        }
    }
}
function emilcounter10x(){
    x = x + 9;
    document.getElementById("Gudnummer").innerHTML = x;
}

function Upgradebuttonc(){
    if (x > 999){
        document.getElementById("Upgradepic3").src = "/images/checkmark.png";
        x = x - 1000;
        document.getElementById("Gudnummer").innerHTML = x;
        document.getElementById("f").src = "/images/emil4.png";
        document.getElementById("cost1000").innerHTML = ("Bought!");
            if (y == 0, 1, 2)
                document.getElementById("f").onclick = emilcounter16x;
                y = 3;
    }
}
function emilcounter16x(){
    x = x + 15;
    document.getElementById("Gudnummer").innerHTML = x + 15;
}

function Upgradebuttond(){
    if (x > 9999){
        document.getElementById("Upgradepic4").src = "/images/checkmark.png";
        x = x - 10000;
        document.getElementById("Gudnummer").innerHTML = x;
        document.getElementById("f").src = "/images/emil5.png";
        document.getElementById("cost10000").innerHTML = ("Bought!");
            if (y == 0, 1, 2, 3)
                document.getElementById("f").onclick = emilcounter50x;
                y = 4;
    }
}
function emilcounter50x(){
    x = x + 49;
    document.getElementById("Gudnummer").innerHTML = x;
}

function Upgradebuttone(){
    if (x > 99999){
        document.getElementById("Upgradepic5").src = "/images/checkmark.png";
        x = x - 100000;
        document.getElementById("Gudnummer").innerHTML = x;
        document.getElementById("f").src = "/images/Windis.png";
        document.getElementById("cost100000").innerHTML = ("Bought!");
            if (y == 0, 1, 2, 3, 4)
                document.getElementById("f").onclick = emilcounter100x;
                y = 5;
    }
}
function emilcounter100x(){
    x = x + 99;
    document.getElementById("Gudnummer").innerHTML = x;
}