  var tour = 0

  function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    textAlign(CENTER);
    text('SuperMorpion !', (width / 2), 50);
    translate(width / 2, height / 2);
    noFill();
    rectMode(CENTER);
    rect(0, 0, 100, 100);

    line(-50, -50, 50, 50);
    line(50, -50, -50, 50);

    line(0, -50, 0, 50);
    line(-50, 0, 50, 0);

    line(0, -50, 50, 0);
    line(0, -50, -50, 0);
    line(-50, 0, 0, 50);
    line(0, 50, 50, 0);


  }

  function mousePressed() {

    if (mouseX >= width/2 - 50 && mouseX <= width/2 + 50 && mouseY >= height/2 - 50 && mouseY <= height/2 + 50) {
      if (tour === 0) {
        line(mouseX - 5, mouseY - 5, mouseX + 5, mouseY + 5);
        line(mouseX - 5, mouseY + 5, mouseX + 5, mouseY - 5);
        tour++;
      } else {
        ellipse(mouseX, mouseY, 15, 15);
        tour--;
      }
    }
  }
