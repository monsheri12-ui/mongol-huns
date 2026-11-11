import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createShoppingCart, SHOPPING_CART_BOUNDS } from '../src/shopping-cart.js';

const cart = createShoppingCart();
const bbox = new THREE.Box3().setFromObject(cart.group);
assert.ok(bbox.min.x >= -.421 && bbox.max.x <= .421, 'Basket stays inside the previous .84 m visual width');
assert.ok(bbox.min.z >= -.302 && bbox.max.z <= .472, 'Front and handle keep the existing depth envelope');
assert.ok(bbox.min.y >= -.600 && bbox.min.y <= -.590, 'Wheels meet the floor at the .60 m carrier offset');
assert.ok(bbox.max.y <= .761 && bbox.max.y >= .755, 'Rubber handle keeps the existing .76 m height');
assert.equal(cart.contents.parent, cart.group, 'Contents have a dedicated removable anchor');
assert.equal(cart.contents.children.length, 0, 'The asset never invents product placeholders');
const meshes = [];
cart.group.traverse(object => { if (object.isMesh) meshes.push(object); });
assert.ok(meshes.length <= 10, 'Mesh wires, chassis and four wheels use a bounded number of draw calls');
assert.ok(meshes.every(mesh => mesh.isInstancedMesh), 'Repeated metal rods and wheel parts share instanced batches');
assert.ok(meshes.every(mesh => mesh.geometry.userData.owned && mesh.material.userData.owned), 'The existing carrier disposer owns every geometry and material');
assert.ok(meshes.every(mesh => !mesh.material.transparent), 'Groceries are visible through real gaps, without transparent sorting artefacts');
assert.equal(cart.group.getObjectByName('basket mesh and wire floor').geometry.type, 'CylinderGeometry', 'Basket floor consists of wires, not an opaque panel');
assert.ok(SHOPPING_CART_BOUNDS.contents.min.y > SHOPPING_CART_BOUNDS.basket.bottom, 'Content anchor sits above the wire floor');
// Discard the complete carrier, as store-world does during label/order changes.
const geometries = new Set(), materials = new Set();
for (const mesh of meshes) { geometries.add(mesh.geometry); materials.add(mesh.material); mesh.dispose(); }
for (const geometry of geometries) geometry.dispose();
for (const material of materials) material.dispose();
console.log('Shopping cart: 12 geometry, footprint, contents and disposal checks passed.');
