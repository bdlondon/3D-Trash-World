// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  zoom: 8,
});

let timer = 0;
let rootIllust = new Zdog.Anchor({
  addTo: illo,
  translate: {y:14, x:9},
});
let body = new Zdog.Shape({
  addTo: rootIllust,
  stroke: 12,
  color: 'goldenrod',
  path: [ {}, { y: -7 } ],
  translate: {},
});

new Zdog.Shape({
  addTo: body,
  stroke: 7,
  color: 'gold',
  path: [ {x:0, z:4}, { x:0, y: -7, z:4 } ],
  translate: {},
});

let headAnchor = new Zdog.Anchor({
  addTo: body,                                
  translate: { y:-13 },
});

let head = new Zdog.Shape({
  addTo: headAnchor,
  stroke: 12,
  color: 'goldenrod',
  translate: {y:-5, z:4},
});
new Zdog.Shape({
  addTo: head,
  stroke: 11,
  color: 'gold',
  translate: {},
});

new Zdog.Ellipse({
  addTo: head,
  diameter: 4,
  quarters: 2,
  translate: { y: 2.5, z:5 },
  rotate: {z: Zdog.TAU/4, x: Zdog.TAU/-9},
  closed: true,
  color: '#000',
  stroke: 0,
  fill: true,
  backface: false,
});

let leftEye = new Zdog.Shape({
  addTo: head,
  stroke: 3,
  color: '#000',
  translate: { x:-3 , y:-2, z:6 },
});

let rightEye = new Zdog.Shape({
  addTo: head,
  stroke: 3,
  color: '#000',
  translate: { x:3 , y:-2, z:6},
});

new Zdog.Shape({
  addTo: leftEye,
  stroke: 2.5,
  color: '#FFF',
});
new Zdog.Shape({
  addTo: rightEye,
  stroke: 2.5,
  color: '#FFF',
});


new Zdog.Shape({
  addTo: leftEye,
  stroke: 1,
  color: '#000',
});
new Zdog.Shape({
  addTo: rightEye,
  stroke: 1.4,
  color: '#000',
});

let leftArm = new Zdog.Shape({
  addTo: rootIllust,
  stroke: 4.5,
  color: 'goldenrod',
  path: [ {}, { x:-10, y: -6 }, { x:-8, y: -18 } ],
  translate: {x:-3, y:-7, z:-3},
  closed: false,
});




function animate() {
  timer+=0.025;
  rootIllust.rotate.z = Math.sin(timer*4)/2;
  headAnchor.rotate.z = Math.sin(timer*4)/2;
  

  leftArm.rotate.z = Math.sin(timer*8)/3;
  
  illo.rotate.x = Math.sin(timer*6.15325)/-3;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
