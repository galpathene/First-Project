let synth;
let delay
let crusher
let shape1Appear = false;
let shape2Appear = false;
let shape3Appear = false;
let shape4Appear = false;
let shape5Appear = false;
let shape6Appear = false;
let shape7Appear = false;
let shape8Appear = false;
let modifierKeyPresed1 = false
let modifierKeyPresed2 = false

let bG = {
r : 0,
g : 0,
b : 0,
a : 0.1

}





function setup() {
  createCanvas(windowWidth, windowHeight);

  synth = new Tone.PolySynth().toDestination();
  // synth.triggerAttackRelease("C4", "8n");
  // Create the delay effect
  delay = new Tone.FeedbackDelay("16n", 0).toDestination();

  crusher = new Tone.BitCrusher(4).toDestination();
  crusher.wet.vlaue = 0

  // Connect the synth output to the delay, and then to the destination
  synth.connect(delay);
  synth.connect(crusher);

  return Tone.Offline(() => {
    const ampEnv = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.2,
      sustain: 1.0,
      release: 0.3
    }).toDestination();
    // create an oscillator and connect it
    const osc = new Tone.Oscillator().connect(ampEnv).start();
    // trigger the envelopes attack and release "8t" apart
    ampEnv.triggerAttackRelease("8t");
  }, 1.5, 1);
}



function keyPressed() {
  if (key === "a") {
    console.log('pressed')
    synth.triggerAttack("C4"); 
    shape1Appear = true;
    console.log('pressed')
    //drawShape1();
  } else {
  //   value = 0;
  }

  if (key === "s") {
    synth.triggerAttack("D4");
    shape2Appear = true;
  }

  if (key === "d") {
    synth.triggerAttack("E4");
    shape3Appear = true;
  }

  if (key === "f") {
    synth.triggerAttack("F4");
    shape4Appear = true;
  }

  if (key === "g") {
    synth.triggerAttack("G4");
    shape5Appear = true;
  }

  if (key === "h") {
    synth.triggerAttack("A4");
    shape6Appear = true;
  }

  if (key === "j") {
    synth.triggerAttack("B4");
    shape7Appear = true;
  }
  
  if (key === "k") {
    synth.triggerAttack("C5");
    shape8Appear = true;
  }

  if (key === "m") {
    modifierKeyPresed1 = true
    delay.feedback.value = 0.9
    delay.wet.value = 0.7
  }
  if (key === "n") {
    modifierKeyPresed1 = true

    crusher.wet.value = 1
  }
  
  

 

}

function keyReleased() {

if (key === "a") {
shape1Appear = false;
synth.triggerRelease("C4");

}

if (key === "s") {
  shape2Appear = false;
  synth.triggerRelease("D4");
}

if (key === "d") {
  shape3Appear = false;
  synth.triggerRelease("E4");
}

if (key === "f") {
  shape4Appear = false;
  synth.triggerRelease("F4");
}

if (key === "g") {
  shape5Appear = false;
  synth.triggerRelease("G4");
}


if (key === "h") {
  shape6Appear = false;
  synth.triggerRelease("A4");
}

if (key === "j") {
  shape7Appear = false;
  synth.triggerRelease("B4");
}

if (key === "k") {
  shape8Appear = false;
  synth.triggerRelease("C5");
}

if (key === "m") {
   modifierKeyPresed1 = false
   delay.feedback.value = 0
   delay.wet.value = 0
}

if (key === "n") {
  modifierKeyPresed1 = false
  crusher.wet.value = 0
}


}



function draw() {
  if(modifierKeyPresed1) {
    background(0, 0, 0, 0.1);
  } else {
    background(0, 0, 0, 20);
  }
  

  if (shape1Appear) {
    drawShape1();
  }
  //yellow rect

  if (shape2Appear) {
    drawShape2();
  }
  //white circle thing

  if (shape3Appear) {
    drawShape3();
  }
  //blue circle thing

  if (shape4Appear) {
    drawShape4();
  }
 
  if (shape5Appear) {
    drawShape5();
  }

  if (shape6Appear) {
    drawShape6();
  }

  if (shape7Appear) {
    drawShape7();
  }

  if (shape8Appear) {
    drawShape8();
  }
}

function drawShape1() {
  let x = random(200,700)
  let y = random(200,700)
  for(let h = 5; h < 100;h += 8) {

    noFill();
    stroke(255);
    strokeWeight(0.2);
    rectMode(CENTER);
    rect(random(0,2000), random(0,1500) , h, h);
  }

}

function drawShape2 () {

    for(
      let h = 5;
      h < 100;
      h += 100
  ) { 

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      circle(width/2,random(0,1500), h, h);


    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+100,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+200,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+300,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+400,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+500,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+600,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2+700,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-100,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-200,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-300,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-400,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-500,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-600,random(0,1500), h, h);

    noFill();
    stroke(255);
    rectMode(CENTER);
    circle(width/2-700,random(0,1500), h, h);
}
  
}

function drawShape3 () {
    for(
      let h = 5;
      h < 60;
      h += 10
  ) { 

      fill(230, 250, 219);
      stroke(230,250,219);
      circle(random(0,2000),random(0, 1000), h, h);

  }


}

function drawShape4 () {
  for(
  let h = 5;
  h < 1400;
  h += 50
) { 

  noFill();
  strokeWeight(0.5);
  stroke(random(200, 0));
  circle(random(700,900), random(0, 1500), h, h);
}
}


function drawShape5 () {
  for(
    let h = 5;
    h < 20;
    h += 4
  ) {
    noFill();
    stroke(250);
    strokeWeight(0.3);
    circle(random(0,2000), height/2, h, h);

  }
}

function drawShape6 () {
  let x = random(200,700)
  let y = random(200,700)
  for(let h = 2; h < 50;h += 2) {

    noFill();
    stroke(255);
    strokeWeight(5);
    rectMode(CENTER);
    rect(random(0,2000), random(0,1500) , h, h);

    fill(0);
    stroke(0);
    rectMode(CENTER);
    rect(random(0,2000), random(0,1500) , h, h);

  }
}


function drawShape7 () {
  for(
    let h = 25;
    h < 50;
    h += 90
  ) {
    fill(250);
    stroke(250);
    rect(random(width/2-100, width/2+100), random(height/2+100, height/2-100), h, h);

}
}

function drawShape8 () {
  let x = random(200,700)
  let y = random(200,700)
  for(
    let h = 1; 
    h < 10;
    h += 5
    ) {

    noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2+150, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2+300, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2+450, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2-150, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2-300, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(random(0,2000), height/2-450, h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2+150, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2+300, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2+450, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2+600, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2+750, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2-150, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2-300, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2-450, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2-600, random(0,2000), h, h);

      noFill();
      stroke(255);
      strokeWeight(2);
      rectMode(CENTER);
      rect(width/2-750, random(0,2000), h, h);
  }

}