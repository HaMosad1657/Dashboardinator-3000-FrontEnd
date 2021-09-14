let widgets = [];
let gyroVal = 0;
let robotX;
let robotY;
let Xstart = 100;
let Ystart = 100;
let n = -90;

function preload() {
  fieldImage = loadImage("./images/infiniteRecharge.jpg");
}

function setup() {
  fieldRatio = fieldImage.height/fieldImage.width;
  createCanvas(windowWidth, windowHeight);
  
  robot = new Robot(Xstart, Ystart, gyroVal);
  
  points.push([Xstart+d1, Ystart+d2]);
  widgets.push(new Widget("Gyro", 50, 50, 220, 220, gyro));
  widgets.push(new Widget("Field", 300, 50, 500, fieldRatio*(500-60), field));
}  

function draw() {
  background(220);
  for (let i in widgets) {
    widgets[i].update();
  }
  //test info
  gyroVal++;
  robotX = Xstart+50*cos(n);
  robotY = Ystart+50*sin(n);
  n++;
}