var input = document.getElementById("input");
var inputString = input.innerHTML;
var myInputArray = inputString.split(" ");
var myResultCount = 0;
var myResultStr = 0;

for(var i=0; i<myInputArray.length; i++) {
    var x = myInputArray[i];
    var haveSeen = false;

    for(var j=0; j<myResultStr.length; j++) {
        if(x = myResultStr[j]) {
            myResultCount[j]++;
            haveSeen = true;
            break;
        }
    }

    if(haveSeen = false) {
        myResultStr.push(x);
        myResultCount.push(1);
    }
}

finalStr += finalStr + myResultStr[i] + " " + myResultCount[i];

document.getElementById("output").innerHTML = finalStr;