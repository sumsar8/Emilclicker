var x;
        x = 0;
        function emilcounter(){
            document.getElementById("k").innerHTML = x + 1;
            x = x + 1;
        }
        function emil2(){
            if (x > 9){
                document.getElementById("k").innerHTML = x - 10;
            x = x - 10;   

            document.getElementById("f").src="/images/emil2.jpg";
            document.getElementById("f").onclick=emilcounter4x;
            document.getElementById("Upgradepic").src = "/images/MouseUpgrade3.png";
            document.getElementById("upgradebutton").onclick=emil3;
            }
        }
        function emilcounter4x(){
            document.getElementById("k").innerHTML = x + 3;
            x = x + 3;
        }
            function emil3(){
                if (x > 99){
                    document.getElementById("k").innerHTML = x - 100;
                        x = x - 100;

            document.getElementById("f").src = "/images/emil3.png";
            document.getElementById("f").onclick=emilcounter10x;
            document.getElementById("Upgradepic").src = "/images/MouseUpgrade4.png";
            document.getElementById("upgradebutton").onclick=emil4;
            }
        }
        function emilcounter10x(){
            document.getElementById("k").innerHTML = x + 9;
            x = x + 9;
        }

        function emil4(){
                if (x > 999){
                    document.getElementById("k").innerHTML = x - 1000;
                        x = x - 1000;
                        
            document.getElementById("f").src="/images/emil4.png";
            document.getElementById("f").onclick=emilcounter16x;
            document.getElementById("Upgradepic").src = "/images/MouseUpgrade5.png";
            document.getElementById("upgradebutton").onclick=emil5;
            }
        }
        function emilcounter16x(){
            document.getElementById("k").innerHTML = x + 15;
            x = x + 15;
        }

        function emil5(){
                if (x > 9999){
                    document.getElementById("k").innerHTML = x - 10000;
                        x = x - 10000;
                        
            document.getElementById("f").src="/images/emil5.png";
            document.getElementById("f").onclick=emilcounter50x;
            document.getElementById("Upgradepic").innerHTML = "Upgrade 100 000";
            document.getElementById("upgradebutton").onclick=emil6;
            }
        }
        function emilcounter50x(){
            document.getElementById("k").innerHTML = x + 49;
            x = x + 49;
        }
        function emil6(){
            if (x > 99999){
                document.getElementById("k").innerHTML = x - 100000;
                x = x - 100000;

            document.getElementById("f").src="/images/Windis.png";
            document.getElementById("f").onclick=emilcounter100x;
            document.getElementById("Upgradepic").src = "/images/Checkmark.png";
            document.getElementById("upgradebutton").onclick=emil7;
            }
        }
        function emilcounter100x(){
            document.getElementById("k").innerHTML = x + 99;
            x = x + 99;
        }
        function emil7(){
            if (x > 0){
                document.getElementById("k").innerHTML = x - 0;
                x = x - 0;
            }
        }