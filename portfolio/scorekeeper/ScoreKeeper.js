var one = document.querySelectorAll("button")[0];
var pl1 = document.getElementById("pl1");
var score1 = 0;

var condition = false;
var inp = document.getElementsByTagName("input")[0];
var inx = document.getElementById("inx");
var winningScore = 0;

function reset() {
    pl1.textContent = 0;
    pl2.textContent = 0;
    score1 = 0;
    score2 = 0;
    condition = false;
    pl2.style.color = "black";
    pl1.style.color = "black";
}

inp.addEventListener("change", function () {
    inx.textContent = inp.value;
    winningScore = Number(inp.value)
    reset();
})
one.addEventListener("click", function() {
   if (!condition) {
       score1++;
       pl1.textContent = score1;
       if (score1 === winningScore) {
           condition = !condition;
           pl1.style.color = "green";
           pl2.style.color = "red";
       } 
   }
} );
var two = document.querySelectorAll("button")[1];
var pl2 = document.getElementById("pl2");
var score2 = 0;
two.addEventListener("click", function() {
    if (!condition) {
        score2++;
        pl2.textContent = score2;
        if (score2 === winningScore) {
            condition = !condition;
            pl2.style.color = "green";
            pl1.style.color = "red";

        } 
    }
});

var three = document.querySelectorAll("button")[2];
three.addEventListener("click", function() {
    reset();
});





































