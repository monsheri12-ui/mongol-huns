(function () {
  'use strict';
  const source = 'assets/produce/produce-atlas.png';
  // The single-file export embeds the atlas once. A short blob URL keeps each
  // thumbnail from repeating several megabytes of base64 in its SVG markup.
  let path = source;
  if (source.startsWith('data:')) {
    const raw = atob(source.slice(source.indexOf(',') + 1));
    const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));
    path = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
  }
  const ids = ['red-apple', 'green-apple', 'banana', 'orange', 'carrot', 'potato', 'tomato', 'cucumber', 'onion', 'cabbage'];
  const cells = ids.flatMap(id => [`${id}-fresh`, `${id}-spoiled`]).concat(['chocolate-box-bulk', 'curd-candy-bulk', 'red-apple-net', 'orange-net']);
  window.ProducePhotos = Object.fromEntries(cells.map((id, index) => {
    const column = index % 6, row = Math.floor(index / 6);
    return [id, { id, path, sprite: { column, row, columns: 6, rows: 4 }, render_crop: [column / 6, row / 4, (column + 1) / 6, (row + 1) / 4], netted: id.endsWith('-net') }];
  }));
})();
