var getCol = [];
var cl;
var mode = "easy";
document.querySelector(".jumbotron").style.background = "rgb(17, 103, 201)";
function randColorGen() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
   
    return "rgb(" + x + ", " + y + ", " + z + ")";
   
}

//Easy mode
getEasy = document.querySelector(".btn-outline-success");

getEasy.addEventListener('click', function () {
    if (mode == 'hard') {
        myId1 = ["one", "two", "three"];
        myId2 = ["four", "five", "six"];
        for (var j = 0; j < 3; j++) {
            y = randColorGen();
            if (y === "rgb(40, 40, 40)") {
                document.querySelector("#" + myId1[j]).style.background = randColorGen();
            }
            else {
                document.querySelector("#" + myId1[j]).style.background = y;
            }

            for (var n = 0; n < 3; n++) {
                document.querySelector("#" + myId2[n]).style.background = "rgb(40, 40, 40)";
            }


        }
        getCol = [];
        for (var c = 0; c < 3; c++) {
            x = document.querySelector("#" + myId1[c]).style.background;
            getCol.push(x);
        }
        cl = setInnerRand();
    }
    mode = "easy";
    document.querySelector(".jumbotron").style.background = "rgb(17, 103, 201)";

    
})
//hard mode
getHard = document.querySelector(".btn-outline-warning");

getHard.addEventListener('click', function() {
    if (mode == 'easy') {
        myId = ["one", "two", "three", "four", "five", "six"];
        for (var a = 0; a < 6; a++) {
            y = randColorGen();
            if (y === "rgb(40, 40, 40)") {
                document.querySelector("#" + myId[a]).style.background = randColorGen();

            }
            else {
                document.querySelector("#" + myId[a]).style.background = y;

            }
        }
        getCol = [];
        for (var c = 0; c < 6; c++) {
            x = document.querySelector("#" + myId[c]).style.background;
            getCol.push(x);
        }
        cl = setInnerRand();
    }
    
    mode = "hard";
    document.querySelector(".jumbotron").style.background = "rgb(17, 103, 201)";
    
} )

newColor = document.querySelector(".btn-outline-primary");
newColor.addEventListener("click", function () {

    
    if (mode == "easy") {
        myId1 = ["one", "two", "three"];
        myId2 = ["four", "five", "six"];
        for (var j = 0; j < 3; j++) {
            y = randColorGen();
            if (y === "rgb(40, 40, 40)") {
                document.querySelector("#" + myId1[j]).style.background = randColorGen();
            }
            else {
                document.querySelector("#" + myId1[j]).style.background = y;
            }

            for (var n = 0; n < 3; n++) {
                document.querySelector("#" + myId2[n]).style.background = "rgb(40, 40, 40)";
            }
        

        }
        getCol = [];
        for (var c = 0; c < 3; c++) {
            x = document.querySelector("#" + myId1[c]).style.background;
            getCol.push(x);
        }
        cl = setInnerRand();

        }
    if (mode == "hard") {
        myId = ["one", "two", "three", "four", "five", "six"];
        for (var a = 0; a < 6; a++) {
            y = randColorGen();
            if (y === "rgb(40, 40, 40)") {
                document.querySelector("#" + myId[a]).style.background = randColorGen();
                                                                               
            }                                                                   
            else {                                          
                document.querySelector("#" + myId[a]).style.background = y;

            }
        }
        getCol = [];
        for (var c = 0; c < 6; c++) {
            x = document.querySelector("#" + myId[c]).style.background;
            getCol.push(x);
        }
        cl = setInnerRand();
    }
    document.querySelector(".jumbotron").style.background = "rgb(17, 103, 201)";
    

})


//choose and set the random color to the innerHTML
function randInt(min, max) {
    return Math.floor(Math.random()*max + min);
}

function setInnerRand() {
    x = randInt(0, getCol.length);
    innerRgb = document.querySelector(".rgb");
    y = getCol[x];
    innerRgb.innerHTML = y;
    return y;
}

checkCol = document.querySelectorAll(".border");
for (var t = 0; t < checkCol.length; t++) {
    checkCol[t].addEventListener("click", function() {
        if (this.style.background != cl) {
            this.style.background = "rgb(40, 40, 40)";
        }
        else if (this.style.background == cl) {
            for (var j = 0; j < getCol.length; j++) {
                document.querySelectorAll(".border")[j].style.background = cl;
                
            }
            document.querySelector(".jumbotron").style.background = cl;
            

        }
    })
}







































