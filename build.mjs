import { build } from 'esbuild';
await build({ entryPoints: ['src/store-world.js'], outfile: 'dist/world.js', bundle: true, format: 'iife', minify: true, target: ['es2022'], legalComments: 'eof' });
console.log('Built 3D shop.');
