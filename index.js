//Audio files linked to buttons. play/pause triggered by the same button
var drums1 = new Audio("sounds/120_TrapDrums.wav");
$(".drums1").click(function () {
  if (drums1.paused == true) {
    drums1.play();
  } else {
    drums1.pause();
  }
  drums1.loop = true;
});

var drums2 = new Audio("sounds/anthem drums_71bpm.wav");
$(".drums2").click(function () {
  if (drums2.paused == true) {
    drums2.play();
  } else {
    drums2.pause();
  }
  drums2.loop = true;
});

var drums3 = new Audio("sounds/089_RockYo.wav");
$(".drums3").click(function () {
  if (drums3.paused == true) {
    drums3.play();
  } else {
    drums3.pause();
  }
  drums3.loop = true;
});

var synth1 = new Audio("sounds/7b9_keyAmin_120bpm.wav");
$(".synth1").click(function () {
  if (synth1.paused == true) {
    synth1.play();
  } else {
    synth1.pause();
  }
  synth1.loop = true;
});

var synth2 = new Audio("sounds/130_Ghostly.wav");
$(".synth2").click(function () {
  if (synth2.paused == true) {
    synth2.play();
  } else {
    synth2.pause();
  }
  synth2.loop = true;
});

var bass = new Audio("sounds/pb_tc_06.wav");
$(".bass").click(function () {
  if (bass.paused == true) {
    bass.play();
  } else {
    bass.pause();
  }
  bass.loop = true;
});

var melody1 = new Audio("sounds/120_Astronomical.wav");
$(".melody1").click(function () {
  if (melody1.paused == true) {
    melody1.play();
  } else {
    melody1.pause();
  }
  melody1.loop = true;
});

var melody2 = new Audio("sounds/luxury vehicle piano_77bpm.wav");
$(".melody2").click(function () {
  if (melody2.paused == true) {
    melody2.play();
  } else {
    melody2.pause();
  }
  melody2.loop = true;
});

var electronic1 = new Audio("sounds/computer arp_65bpm.wav");
$(".electronic1").click(function () {
  if (electronic1.paused == true) {
    electronic1.play();
  } else {
    electronic1.pause();
  }
  electronic1.loop = true;
});
