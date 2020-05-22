
var r = [252, 40, 3];
var g = [11, 252, 3];
var b=  [3, 248, 252];

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function setup(){

  createCanvas(1200,600);
}


function draw(){
  background(204);
  let x1 = map(mouseX, 0, width, 0, 1200);
  let x2 = map(mouseY, 0, height, 0, 600);

  fill(252, 202, 3);
  ellipse(x1, x2, 25, 25);
  

  // change the value of Red based on the mouse movement about the X axis
if (mouseX<=400){
  background(r);
  let x1 = map(mouseX, 0, width, 0, 1200);
  let x2 = map(mouseY, 0, height, 0, 600);

  fill(252, 202, 3);
  ellipse(x1, x2, 25, 25);
  

}
// change the value of Green based on the mouse movement about the X axis
else if (mouseX<=800){
  background(g);
  let x1 = map(mouseX, 0, width, 0, 1200);
  let x2 = map(mouseY, 0, height, 0, 600);

  fill(252, 202, 3);
  ellipse(x1, x2, 25, 25);
  
 // change the value of Blue based on the mouse movement about the X axis
}
else if (mouseX<=1200){
  background(b);
  let x1 = map(mouseX, 0, width, 0, 1200);
  let x2 = map(mouseY, 0, height, 0, 600);

  fill(252, 202, 3);
  ellipse(x1, x2, 25, 25);
  

}
 

  
}