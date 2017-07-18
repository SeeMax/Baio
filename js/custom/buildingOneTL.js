function BuildingOneTL () {

  // OPEN IMPACT SECTION, ANIMATE CIRCLES, AND MOVE TYPE OUT FROM BEHIND CIRCLE
  var tl = new TimelineMax();

  var buildingL = $('#building-left');

  tl.set(buildingL, {transformStyle: "preserve-3d", transformPerspective:200 })
    .from(buildingL, 6, {height:0, rotationX:-90, transformOrigin: "bottom center", ease: Elastic.easeOut.config(1, .5)});

  return tl;
}

