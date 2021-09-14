function gyro(name, x, y, w, h) {
  push();
  angleMode(DEGREES);
  translate(x, y);
  textAlign(CENTER);

  fill(200);
  rect(0, 0, w, h);

  fill(0);
  text(name, w / 2, 11);

  fill(220);
  ellipse(w / 2, (h + 10) / 2, h - 20);

  translate(w / 2, (h + 10) / 2);
  let rotateAngle = 22.5;
  for (let i = 0; i < 360; i += rotateAngle) {
    rotate(rotateAngle);
    line(0, 10 - h / 2, 0, 15 - h / 2);
  }

  rotate(gyroVal % 360 + 90);
  line(0, 0, 0, 25 - h / 2);
  pop();
}