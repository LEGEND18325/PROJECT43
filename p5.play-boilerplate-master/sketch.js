var hr
var mn
var sc

function setup() {
  createCanvas(800,600);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(390,300)
hr=hour();
mn=minute();
sc=second();
angleMode(DEGREES);

scAngle=map(sc,0,60,0,360);
mnAngle=map(mn,0,60,0,360);
hrAngle=map(hr%12,0,60,0,360);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();




push();
rotate(mnAngle);
stroke(144,238,144);

strokeWeight(7);
line(0,0,5,-100);
pop();



push();
rotate(hrAngle);
stroke(0,0,255);

strokeWeight(7);
line(0,0,-60,70);
pop();


push();
noFill();

stroke(255,0,0);
strokeWeight(8);
arc(10, 5, 300, 300, 0,scAngle);
pop();

push();
noFill();
rotate(mnAngle);
stroke(144,238,144);
strokeWeight(7);
arc(10, 5, 280, 280, 0,mnAngle);
pop();

push();
noFill();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
arc(10, -7, 260, 260, 0,hrAngle);
pop();

push();
fill("white");
noStroke();
text(hr+':'+mn+':'+sc,10,200)
pop();
  drawSprites();
}