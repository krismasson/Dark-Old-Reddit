
// this is my javascript firefox extention making reddit FUCKING DARK.

blah = window.location.href
// Grab URL... check if its reddit....
if (blah.includes("old.reddit.com")) {
document.body.style.background = 'black'
// background is black. done right? well then theres top header...
var header = document.getElementById("header-bottom-left");
header.style.background = '#383b3e'
// right side
var cheddar = document.getElementsByClassName("side");
cheddar[0].style.background = 'black'
//the top bar of links  (have to loop through some elements to dark em all. I used grey)
var meddar = document.getElementsByClassName("choice");
for(i=0; i<meddar.length; i++) {
meddar[i].style.background = '#383b3e'
}
//very top top. tip top if you will.
var anoth = document.getElementsByClassName("dropdown srdrop");
anoth[0].style.background = '#383b3e'
var anoth = document.getElementsByClassName("sr-list");
anoth[0].style.background = '#383b3e'
//added this for r/mma because wtf. I want dark mode there too.

//doesnt work. help.
var meed = document.querySelectorAll("comment");
for(i=0; i<meed.length; i++) {
meed[i].style.background = 'black'
}
var ceed = document.getElementsByClassName(' md ');
for(i=0; i<ceed.length; i++) {
ceed[i].style.color = '#605656'
}
var thing = document.getElementsByClassName("thing");
for(i=0; i<thing.length; i++) {
thing[i].style.background = 'black'
}



}