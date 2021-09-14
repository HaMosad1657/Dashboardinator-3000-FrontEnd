let fieldImage;
let fieldRatio;
let robot;
let points = [];
let d1 = 10;
let d2 = 30;
let d3 = 140;
let X = Xstart;
let Y = Ystart;
let Xwidget, Ywidget, Wwidget, Hwidget;

function field(name, x, y, w, h) {
  Xwidget = x;
  Ywidget = y;
  Wwidget = w;
  Hwidget = h;
  
  push();
  translate(x, y);
  textAlign(CENTER);

  fill(200);
  rect(0, 0, w, h);

  fill(0);
  text(name, w / 2, 20);

  image(fieldImage, d1, d2, (w+d1)-d3, h-(d1+d2));
  
  for(let i = 1; i < points.length; i++){
    ellipse(points[i][0], points[i][1], 3, 3);
    line(points[i-1][0], points[i-1][1], points[i][0], points[i][1]);
  }
  
  fill(160);
  rect(2*d1+(w+d1)-d3, d2, d3-d2-d1, 40);
  rect(2*d1+(w+d1)-d3, d2 + (40 + d1), d3-d2-d1, 40);
  rect(2*d1+(w+d1)-d3, d2 + 2*(40 + d1), d3-d2-d1, 40);
  
  fill(0);
  text("Reset", 2*d1+(w+d1)-d3+50, d2 + 25);
  text("Delete Last", 2*d1+(w+d1)-d3+50, d2 + (40 + d1) + 25);
  text("Drive", 2*d1+(w+d1)-d3+50, d2 + 2 * (40 + d1) + 25);
  
  pop();
  robot.update(X, Y, gyroVal);
  X = robotX;
  Y = robotY;
}

function mousePressed(){
  if(mouseX > Xwidget+d1 && mouseX < Xwidget+Wwidget-d3+(2*d1) && mouseY > Ywidget+d2 && mouseY < Ywidget+Hwidget-d1){
    points.push([mouseX-Xwidget, mouseY-Ywidget]);
  }
  
  if(mouseX > Xwidget + 2*d1+(Wwidget+d1)-d3 && mouseX < Xwidget + 2*d1+(Wwidget+d1)-d3 + d3-d2-d1){
    if(mouseY > Ywidget + d2 && mouseY < Ywidget + d2+40){
      X = Xstart;
      Y = Ystart;
      points.splice(1, points.length);
    } else if(mouseY > Ywidget + d2 + (40 + d1) && mouseY < Ywidget + d2 + (40 + d1)+40 && points.length > 1){
      points.splice(points.length-1, 1);
    } else if(mouseY > Ywidget + d2 + 2*(40 + d1) && mouseY < Ywidget + d2 + 2*(40 + d1)+40){
      //Drive
    }
  }
}

class Robot{
  constructor(x, y, alfa){
    this.x = x;
    this.y = y;
    this.alfa = alfa;
    
    this.update = function(newX, newY, newAlfa){
      this.x = newX+Xwidget+d1;
      this.y = newY+Ywidget+d2;
      this.alfa = newAlfa;
      
      //map x and y
      
      push();
      translate(this.x, this.y);
      rotate(this.alfa);
      fill("green");
      triangle(-10, -10, 15, 0, -10, 10);
      pop();
    }
  }
}