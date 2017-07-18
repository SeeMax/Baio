// CREATE A MASTER TIMELINE
var masterTL = new TimelineMax();


masterTL.add(BuildingOneTL(), "+=.5");





var pauseBtn = document.getElementById("pause");
var reverseBtn = document.getElementById("reverse");

reverseBtn.onclick = function() {
  masterTL.reversed() ? masterTL.play():masterTL.reverse();
  reverseBtn.innerHTML = masterTL.reversed() ? "forward" : "reverse";
}

pauseBtn.onclick = function() {
  masterTL.paused(!masterTL.paused());
  pauseBtn.innerHTML = masterTL.paused() ? "play" : "pause";
}

