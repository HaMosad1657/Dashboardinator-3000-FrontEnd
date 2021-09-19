let widgets = [];
let robotX;
let robotY;
let Xstart = 100;
let Ystart = 100;
let n = -90;
let s = 220;

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
    background(s);
    for (let i in widgets) {
        widgets[i].update();
    }
    //test info
    robotX = Xstart+50*cos(n);
    robotY = Ystart+50*sin(n);
    
    n++;
}