import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const soilMaterial = new THREE.MeshStandardMaterial({ color: '#392b20', roughness: 1 });
const stemMaterial = new THREE.MeshStandardMaterial({ color: '#4e733c', roughness: .68 });
const leafMaterials = new Map();
let veinTexture;
function veins() {
  if (veinTexture) return veinTexture;
  const c = document.createElement('canvas'); c.width = 128; c.height = 512;
  const ctx = c.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 128, 0);
  gradient.addColorStop(0, '#79906f'); gradient.addColorStop(.48, '#d1dcc0'); gradient.addColorStop(.52, '#cad8b7'); gradient.addColorStop(1, '#74896b');
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, 128, 512);
  ctx.strokeStyle = '#d3ddb9'; ctx.lineWidth = 1.2;
  for (let y = 30; y < 500; y += 32) for (const sign of [-1, 1]) {
    ctx.beginPath(); ctx.moveTo(64, y); ctx.bezierCurveTo(64 + 20 * sign, y + 10, 64 + 39 * sign, y + 45, 64 + 58 * sign, y + 58); ctx.stroke();
  }
  ctx.strokeStyle = '#e8eccb'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(64, 0); ctx.lineTo(64, 512); ctx.stroke();
  veinTexture = new THREE.CanvasTexture(c); veinTexture.colorSpace = THREE.SRGBColorSpace;
  return veinTexture;
}
function leafMaterial(color) {
  if (!leafMaterials.has(color)) leafMaterials.set(color, new THREE.MeshPhysicalMaterial({ map: veins(), color, roughness: .42, clearcoat: .3, clearcoatRoughness: .5, side: THREE.DoubleSide }));
  return leafMaterials.get(color);
}
function blade(curve, width, material, cup = 0) {
  const along = 20, across = 6, vertices = [], uvs = [], indices = [];
  for (let i = 0; i <= along; i++) {
    const t = i / along, center = curve.getPoint(t), tangent = curve.getTangent(t);
    let side = new THREE.Vector3().crossVectors(tangent, UP);
    if (side.lengthSq() < .001) side.set(1, 0, 0); else side.normalize();
    const normal = new THREE.Vector3().crossVectors(side, tangent).normalize();
    const span = Math.pow(Math.sin(Math.PI * t), .78) * width * (.9 + .1 * Math.sin(t * 8));
    for (let j = 0; j <= across; j++) {
      const v = j / across * 2 - 1;
      const point = center.clone().addScaledVector(side, span * v);
      point.addScaledVector(normal, (Math.abs(v) ** 1.8 * cup - .012 * Math.abs(v)) * Math.sin(Math.PI * t));
      vertices.push(point.x, point.y, point.z); uvs.push(j / across, t);
      if (i < along && j < across) { const a = i * (across + 1) + j, b = a + across + 1; indices.push(a, b, a + 1, b, b + 1, a + 1); }
    }
  }
  const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.setIndex(indices); geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, material); mesh.castShadow = true; mesh.receiveShadow = true; return mesh;
}
function tube(curve, radius, material, segments = 18) {
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, segments, radius, 7, false), material); mesh.castShadow = true; return mesh;
}
function ceramicPot(color, height = .42, radius = .28) {
  const group = new THREE.Group();
  const material = new THREE.MeshPhysicalMaterial({ color, roughness: .27, metalness: .03, clearcoat: .65, clearcoatRoughness: .28 });
  const points = [[0, 0], [.73, 0], [.82, .025], [.87, .09], [.96, .65], [1, .91], [.98, 1], [.88, 1], [.87, .92], [.81, .13], [0, .13]].map(([x,y]) => new THREE.Vector2(x * radius, y * height));
  const pot = new THREE.Mesh(new THREE.LatheGeometry(points, 48), material); pot.castShadow = true; pot.receiveShadow = true; group.add(pot);
  const soil = new THREE.Mesh(new THREE.CylinderGeometry(radius * .86, radius * .86, .025, 32), soilMaterial); soil.position.y = height * .88; group.add(soil);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(radius * .955, .012, 8, 48), material); rim.rotation.x = Math.PI / 2; rim.position.y = height * .97; group.add(rim);
  const accent = new THREE.MeshStandardMaterial({ color: '#ad8750', roughness: .35, metalness: .55 });
  for (const y of [.16,.24]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * (.87 + y * .12), .0035, 6, 48), accent); ring.rotation.x = Math.PI / 2; ring.position.y = height * y; group.add(ring); }
  return group;
}

// A real 3D botanical arrangement: every blade, stem and spathe is geometry.
export function createFlower({ flowers = true, color = '#dfd3b6', seed = 0 } = {}) {
  const group = ceramicPot(color);
  const greens = ['#315d32', '#426b35', '#365f30', '#567a3b'];
  for (let i = 0; i < 13; i++) {
    const angle = i * 2.39996 + seed * .3;
    const inner = i >= 8;
    const reach = inner ? .28 + i % 3 * .04 : .43 + i % 4 * .052, height = .32 + i % 5 * .045;
    const radial = (r, y) => new THREE.Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r);
    const start = radial(.035, .37), join = radial(.12, height + .25);
    group.add(tube(new THREE.QuadraticBezierCurve3(start, radial(.06, height + .12), join), .0075, stemMaterial));
    const curve = new THREE.CubicBezierCurve3(join, radial(reach * .5, height + .68), radial(reach * .9, height + .65), radial(reach, height + (inner ? .62 : .37)));
    group.add(blade(curve, .105 + i % 3 * .017, leafMaterial(greens[i % greens.length]), -.035));
  }
  if (flowers) {
    const petalCanvas=document.createElement('canvas');petalCanvas.width=128;petalCanvas.height=256;const petalCtx=petalCanvas.getContext('2d');const glow=petalCtx.createLinearGradient(0,0,128,0);glow.addColorStop(0,'#d7ddc6');glow.addColorStop(.5,'#fffdf1');glow.addColorStop(1,'#dde1cd');petalCtx.fillStyle=glow;petalCtx.fillRect(0,0,128,256);petalCtx.strokeStyle='#abb98d35';petalCtx.lineWidth=.8;for(let n=0;n<10;n++){petalCtx.beginPath();petalCtx.moveTo(64,15+n*23);petalCtx.bezierCurveTo(49,25+n*23,33,45+n*23,12,56+n*23);petalCtx.moveTo(64,15+n*23);petalCtx.bezierCurveTo(79,25+n*23,95,45+n*23,116,56+n*23);petalCtx.stroke();}const petalTexture=new THREE.CanvasTexture(petalCanvas);petalTexture.colorSpace=THREE.SRGBColorSpace;
    const petalMaterial = new THREE.MeshPhysicalMaterial({ map:petalTexture, color: '#fffcf0', roughness: .4, clearcoat: .15, side: THREE.DoubleSide, emissive: '#685e38', emissiveIntensity: .045 });
    const pollenMaterial = new THREE.MeshStandardMaterial({ color: '#c8b259', roughness: .8 });
    for (let i = 0; i < 3; i++) {
      const bloom = new THREE.Group(); const angle = -.4 + i * 2.12;
      bloom.position.set([-.2,.19,.02][i], [1.18,1.02,1.31][i], [.06,-.12,.12][i]);
      bloom.rotation.y = Math.PI + (i-1)*.34; bloom.rotation.z = (i - 1) * .12;
      const base = new THREE.Vector3(bloom.position.x, bloom.position.y, bloom.position.z);
      group.add(tube(new THREE.CubicBezierCurve3(new THREE.Vector3(.01, .36, 0), new THREE.Vector3(.07, .8, .03), base.clone().add(new THREE.Vector3(-.03,-.18,.02)), base), .0085, stemMaterial));
      const spathe = new THREE.CubicBezierCurve3(new THREE.Vector3(0, -.065, .01), new THREE.Vector3(.015, .10, .02), new THREE.Vector3(-.03, .28, -.09), new THREE.Vector3(.035, .38, -.12));
      bloom.add(blade(spathe, .135, petalMaterial, .095));
      const spadix = new THREE.Mesh(new THREE.CapsuleGeometry(.024, .19, 4, 10), pollenMaterial); spadix.position.set(0, .105, .065); spadix.rotation.x = -.14; bloom.add(spadix);
      const dots = new THREE.InstancedMesh(new THREE.SphereGeometry(.0035, 4, 4), pollenMaterial, 60); const transform = new THREE.Object3D();
      for (let n = 0; n < 60; n++) { const theta = n * 2.4; transform.position.set(Math.cos(theta) * .023, .015 + n / 60 * .18, .065 + Math.sin(theta) * .023); transform.updateMatrix(); dots.setMatrixAt(n, transform.matrix); }
      bloom.add(dots); group.add(bloom);
    }
  }
  return group;
}

export function createHangingPlant() {
  const group = ceramicPot('#b88861', .32, .23);
  const ropeMaterial = new THREE.MeshStandardMaterial({ color: '#bdad7b', roughness: 1 });
  for (let i = 0; i < 3; i++) {
    const angle = i * Math.PI * 2 / 3;
    group.add(tube(new THREE.LineCurve3(new THREE.Vector3(Math.cos(angle) * .21, .16, Math.sin(angle) * .21), new THREE.Vector3(0, 1.15, 0)), .008, ropeMaterial, 1));
  }
  const leafGeometry = new THREE.ShapeGeometry(new THREE.Shape().moveTo(0, 0).bezierCurveTo(-.16,.14,-.09,.25,0,.18).bezierCurveTo(.09,.25,.16,.14,0,0), 10);
  for (let vine = 0; vine < 6; vine++) {
    const angle = vine * 2.4, reach = .32 + vine % 2 * .16, length = .75 + vine % 3 * .18;
    const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(0,.25,0), new THREE.Vector3(Math.cos(angle)*reach,.5,Math.sin(angle)*reach),new THREE.Vector3(Math.cos(angle)*reach,-.45,Math.sin(angle)*reach),new THREE.Vector3(Math.cos(angle)*reach*.7,-length,Math.sin(angle)*reach*.7));
    group.add(tube(curve,.006,stemMaterial));
    for (let n = 1; n < 8; n++) { const t=n/8, leaf=new THREE.Mesh(leafGeometry,leafMaterial(n%2?'#52783c':'#648348'));leaf.position.copy(curve.getPoint(t));leaf.rotation.set(.2,angle + (n%2?.5:-.5), (n%2?1:-1)*.65);leaf.scale.setScalar(.65 + (1-t)*.4);leaf.castShadow=true;group.add(leaf); }
  }
  return group;
}
