import * as THREE from 'three';

// The carrier origin is the basket floor, 0.60 m above the shop floor.
// Negative Z is the front of the trolley; the player and handle are at +Z.
// Keep these bounds aligned with world-movement.js and the existing carrier pose.
export const SHOPPING_CART_BOUNDS = Object.freeze({
  basket: Object.freeze({ width: .84, depth: .60, bottom: .015, top: .50 }),
  handle: Object.freeze({ y: .738, z: .447, width: .738 }),
  floor: -.60,
  contents: Object.freeze({
    min: Object.freeze({ x: -.302, y: .034, z: -.183 }),
    max: Object.freeze({ x: .302, y: .485, z: .203 })
  })
});

function owned(resource) { resource.userData.owned = true; return resource; }

function steelMaterial(name, color, roughness, metalness) {
  const material = owned(new THREE.MeshStandardMaterial({ color, roughness, metalness }));
  material.name = name;
  return material;
}

// Every straight or curved rod in a family shares one instanced draw call.
// Curves are short tangent cylinders, so there are no platform-specific line widths.
function rods(parent, name, segments, material, sides = 8) {
  const geometry = owned(new THREE.CylinderGeometry(1, 1, 1, sides));
  const mesh = new THREE.InstancedMesh(geometry, material, segments.length);
  mesh.name = name;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const dummy = new THREE.Object3D(), direction = new THREE.Vector3();
  const a = new THREE.Vector3(), b = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  segments.forEach(([start, end, radius], index) => {
    a.set(...start); b.set(...end); direction.subVectors(b, a);
    const length = direction.length();
    dummy.position.copy(a).add(b).multiplyScalar(.5);
    dummy.quaternion.setFromUnitVectors(up, direction.normalize());
    dummy.scale.set(radius, length + radius * .14, radius);
    dummy.updateMatrix();
    mesh.setMatrixAt(index, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingBox(); mesh.computeBoundingSphere();
  parent.add(mesh);
  return mesh;
}

function addSegment(segments, a, b, radius) { segments.push([a, b, radius]); }

function ring(segments, y, halfWidth, front, back, corner, radius) {
  // Rounded rim, with six segments in each quarter arc instead of square corners.
  const corners = [
    [halfWidth - corner, back - corner, 0],
    [-halfWidth + corner, back - corner, Math.PI / 2],
    [-halfWidth + corner, front + corner, Math.PI],
    [halfWidth - corner, front + corner, Math.PI * 1.5]
  ];
  const points = [];
  for (const [x, z, angle] of corners) {
    for (let step = 0; step <= 6; step++) {
      const theta = angle + step / 6 * Math.PI / 2;
      points.push([x + Math.cos(theta) * corner, y, z + Math.sin(theta) * corner]);
    }
  }
  points.forEach((p, i) => addSegment(segments, p, points[(i + 1) % points.length], radius));
}

function instances(parent, name, geometry, material, transforms) {
  const mesh = new THREE.InstancedMesh(owned(geometry), material, transforms.length);
  mesh.name = name; mesh.castShadow = true; mesh.receiveShadow = true;
  const dummy = new THREE.Object3D();
  transforms.forEach(({ position, rotation = [0, 0, 0], scale = [1, 1, 1] }, i) => {
    dummy.position.set(...position); dummy.rotation.set(...rotation); dummy.scale.set(...scale);
    dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true; mesh.computeBoundingBox(); mesh.computeBoundingSphere();
  parent.add(mesh); return mesh;
}

export function createShoppingCart() {
  const group = new THREE.Group(); group.name = 'shopping-cart';
  group.userData.asset = 'wire-shopping-cart';
  group.userData.bounds = SHOPPING_CART_BOUNDS;
  const wire = steelMaterial('zinc-plated basket wire', '#c7d1d1', .32, .72);
  const frame = steelMaterial('polished tubular steel', '#d4dddd', .23, .82);
  const rubber = steelMaterial('dark rubber tyres', '#303b39', .87, .02);
  const green = steelMaterial('green rubber handle', '#315e4d', .72, .02);
  const caster = steelMaterial('caster fork steel', '#aebbbb', .39, .65);
  const body = [], rim = [], chassis = [], handle = [];

  const bottomY = .023, topY = .488;
  const bottom = { x: .330, front: -.205, back: .225 };
  const top = { x: .410, front: -.290, back: .290 };

  // Six airy horizontal courses follow the flared basket walls. The thick top
  // rim gives the silver mesh an immediately readable silhouette in the shop.
  for (let row = 0; row < 7; row++) {
    const t = row / 6, y = THREE.MathUtils.lerp(bottomY, topY, t);
    ring(body, y, THREE.MathUtils.lerp(bottom.x, top.x, t),
      THREE.MathUtils.lerp(bottom.front, top.front, t),
      THREE.MathUtils.lerp(bottom.back, top.back, t), .025, .0026);
  }
  ring(rim, topY, top.x, top.front, top.back, .035, .010);
  ring(rim, bottomY, bottom.x, bottom.front, bottom.back, .025, .005);

  // Sloped front and back wires, with an open centre and no opaque base panel.
  // Their 5 mm diameter stays delicate after the carrier's .78 X scale.
  for (let col = 0; col <= 12; col++) {
    const t = col / 12 * 2 - 1;
    for (const edge of ['front', 'back']) addSegment(body,
      [t * (bottom.x - .025), bottomY, bottom[edge]],
      [t * (top.x - .035), topY, top[edge]], .0025);
  }
  for (const side of [-1, 1]) {
    for (let col = 0; col <= 9; col++) {
      const t = col / 9;
      addSegment(body,
        [side * bottom.x, bottomY, THREE.MathUtils.lerp(bottom.front + .025, bottom.back - .025, t)],
        [side * top.x, topY, THREE.MathUtils.lerp(top.front + .035, top.back - .035, t)], .0025);
    }
    // A second front rim rail and the corner uprights explain the basket's
    // volume without doubling every grid line or hiding the groceries.
    addSegment(rim, [side * .325, bottomY, .212], [side * .404, topY, .279], .005);
    addSegment(rim, [side * .325, bottomY, -.192], [side * .404, topY, -.279], .005);
  }
  // The products stand on an actual crossed wire floor, not a solid slab.
  for (let col = 0; col <= 10; col++) {
    const x = -.302 + col * .0604;
    addSegment(body, [x, .024, bottom.front + .025], [x, .024, bottom.back - .025], .0027);
  }
  for (let row = 0; row <= 7; row++) {
    const z = -.180 + row * .0542;
    addSegment(body, [-.305, .024, z], [.305, .024, z], .0027);
  }

  // Bent steel undercarriage, sloping rear posts, and a modest lower luggage
  // grid. All supports stay underneath the basket rather than through products.
  for (const side of [-1, 1]) {
    const x = side * .308;
    addSegment(chassis, [side * .362, .733, .447], [side * .357, .451, .282], .0115);
    addSegment(chassis, [side * .357, .451, .282], [x, -.403, .23], .012);
    addSegment(chassis, [x, -.403, .23], [x, -.435, -.23], .013);
    addSegment(chassis, [x, -.435, -.23], [side * .313, .011, -.183], .010);
    addSegment(chassis, [x, -.435, -.23], [side * .313, .011, .210], .008);
    addSegment(chassis, [side * .325, -.010, -.185], [side * .325, -.010, .205], .008);
  }
  addSegment(chassis, [-.308, -.403, .23], [.308, -.403, .23], .011);
  addSegment(chassis, [-.308, -.435, -.23], [.308, -.435, -.23], .011);
  for (const x of [-.20, 0, .20]) addSegment(chassis, [x, -.396, -.207], [x, -.373, .215], .004);
  addSegment(chassis, [-.285, -.385, -.085], [.285, -.385, -.085], .004);

  // A broad, soft green grip is the only coloured part of the wire basket.
  // Its rounded ends and continuous silver mounts read as a real trolley handle.
  addSegment(handle, [-.345, .738, .447], [.345, .738, .447], .022);
  addSegment(chassis, [-.367, .738, .447], [.367, .738, .447], .012);
  rods(group, 'basket mesh and wire floor', body, wire, 6);
  rods(group, 'rounded basket rims', rim, frame, 10);
  rods(group, 'tubular undercarriage', chassis, frame, 10);
  rods(group, 'green handle grip', handle, green, 14);
  instances(group, 'handle rounded end caps', new THREE.SphereGeometry(.022, 12, 8), green,
    [-1, 1].map(side => ({ position: [side * .345, .738, .447] })));

  const wheels = [], hubs = [], forks = [], stems = [];
  for (const side of [-1, 1]) for (const z of [-.23, .23]) {
    const x = side * .308;
    wheels.push({ position: [x, -.527, z], rotation: [0, 0, Math.PI / 2] });
    hubs.push({ position: [x, -.527, z], rotation: [0, 0, Math.PI / 2] });
    // Paired fork plates plus the swivel bearing above each wheel.
    for (const offset of [-.029, .029]) forks.push({ position: [x + offset, -.481, z + .012], rotation: [.13, 0, 0] });
    stems.push({ position: [x, -.436, z + .010] });
  }
  instances(group, 'four rubber caster wheels', new THREE.CylinderGeometry(.068, .068, .044, 18), rubber, wheels);
  instances(group, 'wheel axle hubs', new THREE.CylinderGeometry(.026, .026, .048, 12), caster, hubs);
  instances(group, 'paired caster forks', new THREE.BoxGeometry(.008, .082, .036), caster, forks);
  instances(group, 'caster swivel bearings', new THREE.CylinderGeometry(.018, .018, .025, 10), frame, stems);

  const contents = new THREE.Group(); contents.name = 'cart-contents'; group.add(contents);
  group.updateMatrixWorld(true);
  return { group, contents, contentsBounds: SHOPPING_CART_BOUNDS.contents, bounds: SHOPPING_CART_BOUNDS };
}
