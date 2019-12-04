//add a  variable that you want to be consistant throughout js. ex: diameter;
var diameter=50;

function setup() {
  //createCanvas (width, height);
  createCanvas(500, 500);
}

function draw() {
  //background (r,g,b);
  //each parameter is btwn (0-255)
  //000 is black, 255255255 is white,2552550 is yellow
  background(181,230,29);

  //ellipse (x, y, width, height) mouseX/Y makes ellipse follow mouse;
  fill(255,255,0);
  strokeWeight(10);

//fill is color within
//stroke is the outline color
//strokeweight is outline thickness
  fill(0,0,0)
  stroke(0,0,0)
  ellipse(250,250, 250, 250)
  //rectangle=rect (x,y width, height);
  fill(255,255,255);
  strokeWeight(2);
  stroke(0,0,0)
  ellipse(150, 250, 80, 80);

  strokeWeight(2);
  stroke(0,0,0)
  ellipse(310, 250, 80, 80)
  //rectangle=rect (x,y width, height);
  fill(255,255,255);




  if(mouseIsPressed)
background(209,39,163)

fill(255,255,0);
strokeWeight(10);

//fill is color within
//stroke is the outline color
//strokeweight is outline thickness
fill(0,0,0)
stroke(0,0,0)
ellipse(250,250, 250, 250)
//rectangle=rect (x,y width, height);
fill(255,255,255);
strokeWeight(2);
stroke(0,0,0)
ellipse(150, 250, 80, 80);

strokeWeight(2);
stroke(0,0,0)
ellipse(310, 250, 80, 80)
//rectangle=rect (x,y width, height);
fill(255,255,255);
textSize(15)
text("Click for a", 110, 90)
textSize(50)
text("PARTY", 180, 90)


}
