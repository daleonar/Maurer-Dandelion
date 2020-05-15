let n = Math.random() * 100;
let d = Math.random() * 100;
let nInc = 0.00001;
let dInc = 0.00001;
let slider;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  slider = createSlider(0,255,255,1);
}

function draw() {
  // scale(2);
  background(0);
  translate(width / 2, height / 2);
  graph();
  path();

  n += nInc
  d += dInc

 txt();

}
function txt(){
  noStroke();
  fill(255);
  textAlign(LEFT);
  textFont('Helvetica', 14);
  text("n inc = " + nInc.toFixed(10), -(width / 2) + 10, (height / 2) - 30);
  text("n = " + n.toFixed(10), -(width / 2) + 10, (height / 2) - 10);
  text("d inc = " + dInc.toFixed(10), 0, (height / 2) - 30);
  text("d = " + d.toFixed(10), 0, (height / 2) - 10);
  textAlign(CENTER);
  textFont('Georgia', 24);
  text("M a u r e r   D a n d e l i o n", 0, -height / 2 + 30);
}

var gshow = 1;


function graph() {
  var opacity = slider.value();
  if (gshow == 0) {} else if (gshow == 1) {
    stroke(255,opacity);

    noFill();
    beginShape();
    for (i = 0; i < 361; i++) {
      let k = i * d;
      let r = 150 * sin(n * k);
      let x = r * cos(k);
      let y = r * sin(k);

      vertex(x, y);
    }
    endShape();
  }
}

function showG() {
  var label = document.getElementById('graphToggle');
  if (gshow == 0) {
    gshow++;
    label.textContent = 'Graph OFF';
  } else if (gshow == 1) {
    gshow--;
    label.textContent = 'Graph ON';
  }
}

var pshow = 0;

function path() {
  if (pshow == 0) {} else if (pshow == 1) {
    strokeWeight(2);
    stroke(50, 100, 255);
    noFill();
    beginShape();
    for (i = 0; i < 361; i++) {
      let k = i;
      let r = 150 * sin(n * k);
      let x = r * cos(k);
      let y = r * sin(k);

      vertex(x, y);
    }
    endShape();
    strokeWeight(1);
    stroke(0);
  }
}

function showP() {
  var label = document.getElementById('pathToggle');
  if (pshow == 0) {
    pshow++;
    label.textContent = 'Rose Curve OFF';
  } else if (pshow == 1) {
    pshow--;
    label.textContent = 'Rose Curve ON';
  }
}


var ss = 0;

function startStop() {
  var label = document.getElementById('s/s');
  if (ss == 0) {
    noLoop();
    ss++;
    label.textContent = 'Start';

  } else {
    loop();
    ss--;
    label.textContent = 'Stop';
  }
}

var nss = 0;

function nStartStop() {
  var label = document.getElementById('ns/s');
  if (nss == 0) {
    nInc *= 0;
    nss++;
    label.textContent = 'n Start';

  } else {
    nInc += 0.00001;
    nss--;
    label.textContent = 'n Stop';
  }
}

var dss = 0;

function dStartStop() {
  var label = document.getElementById('ds/s');
  if (dss == 0) {
    dInc *= 0;
    dss++;
    label.textContent = 'd Start';

  } else {
    dInc += 0.00001;
    dss--;
    label.textContent = 'd Stop';
  }
}

function swap() {
  nInc *= -1;
  dInc *= -1;
}

function slow() {
  nInc /= 10;
  dInc /= 10;
}

function fast() {
  nInc *= 10;
  dInc *= 10;
}

function nslow() {
  nInc /= 10;
}

function nfast() {
  nInc *= 10;
}

function dslow() {
  dInc /= 10;
}

function dfast() {
  dInc *= 10;
}

function step() {
  background(0);
  graph();
  txt();
  path();
  n += nInc
  d += dInc
}

function nset() {
  n = float(document.getElementById('nset').value);
  background(0);
  graph();
  txt();
  path();
}

function dset() {
  d = float(document.getElementById('dset').value);
  background(0);
  graph();
  txt();
  path();
}

function nInverse() {
  nInc *= -1;
}

function dInverse() {
  dInc *= -1;
}
