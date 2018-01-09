  var tour = 0

  function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    textAlign(CENTER);
    text('Test !', (width / 2), 50);
    translate(width / 2, height / 2);
    noFill();
    rectMode(CENTER);
    rect(0, 0, 200, 200);

    line(-100, -100, 100, 100);
    line(100, -100, -100, 100);

    line(0, -100, 0, 100);
    line(-100, 0, 100, 0);

    line(0, -100, 100, 0);
    line(0, -100, -100, 0);
    line(-100, 0, 0, 100);
    line(0, 100, 100, 0);


  }

  function mousePressed() {

    if (mouseX >= width/2 - 100 && mouseX <= width/2 + 100 && mouseY >= height/2 - 100 && mouseY <= height/2 + 100) {
      if (tour === 0) {
        line(mouseX - 10, mouseY - 10, mouseX + 10, mouseY + 10);
        line(mouseX - 10, mouseY + 10, mouseX + 10, mouseY - 10);
        tour++;
      } else {
        ellipse(mouseX, mouseY, 25, 25);
        tour--;
      }
    }
  }
