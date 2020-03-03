function Income_Function() {
    var Income_Output;
    var Income = document.getElementById("Income_Input").value;
    var Income_String1 = " is below average.";
    var Income_String2 = " is average.";
    var Income_String3 = " Is above average.";
    switch(Income) {
        case "$20k-$40k":
            Income_Output = "$20k-$40k" + Income_String1;
        break;
        case "$40k-$60k":
            Income_Output = "$40k-$60k" + Income_String1;
        break;
        case "$60k-$85k":
            Income_Output = "$60k-$85k" + Income_String2;
        break;
        case "$85k+":
            Income_Output = "$85k+" + Income_String3;
        break;
        default:
        Income_Output = "Please enter an amount exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Income_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.shadowBlur = 20;

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

grd.addColorStop(1, "orange");

ctx.fillStyle = grd;
ctx.fillRect(200, 20, 100, 80);
