var picArray = [];
picArray[0]="pic1.jpg";
picArray[1]="pic2.jpg";
picArray[2]="pic3.jpg";
picArray[3]="pic4.jpg";
picArray[4]="pic5.jpg";

var x = Math.floor(Math.random() * 5);

document.getElementById("picSpace").setAttribute("src", picArray[x]);