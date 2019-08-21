// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  zoom: 4,
});

let timer = 0;

let body = new Zdog.Shape({
  addTo: illo,
  stroke: 12,
  color: '#932',
  path: [ {}, { y: -7 } ],
  translate: {},
});

let headAnchor = new Zdog.Anchor({
  addTo: body,                                
  translate: { y:-13 },
});

let head = new Zdog.Shape({
  addTo: headAnchor,
  stroke: 12,
  color: '#C20',
  translate: {y:-5, z:4},
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
  addTo: illo,
  stroke: 4.5,
  color: '#932',
  path: [ {x:3}, { x:-10, y: -6 }, { x:-8, y: -18 } ],
  translate: {x:-5, y:-7},
  closed: false,
});




function animate() {
  timer+=0.025;
  illo.rotate.z = Math.sin(timer*4)/2;
  headAnchor.rotate.z = Math.sin(timer*4)/2;
  

  leftArm.rotate.z = Math.sin(timer*8)/3;
  
  illo.rotate.x = Math.sin(timer*6.15325)/-3;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
