var img=document.getElementById('hello');
img.style.width="600px";
var img_repeated = img.cloneNode(true);
console.log(img_repeated);
document.body.append(img_repeated);
img.style.position="absolute";
img.style.top='0';
img.style.left='0';
img_repeated.style.position="absolute";
img_repeated.style.bottom='0';
img_repeated.style.right='0';
var nav=document.getElementById("navigation");
var list=document.getElementById('nav');
list.style="list-style:circle;";
nav.style.position="absolute";
nav.style.top="50%";
nav.style.left="50%";

// nav.style.textAlign="center";