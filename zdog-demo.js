let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
});
// add shapes to Illustration
// triangle
new Zdog.Shape({
  addTo: illo,
  // ...
});
// circle
new Zdog.Ellipse({
  addTo: illo,
  // ...
});
// animate
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
