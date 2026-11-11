// Presentation size is independent from the physical carrier collision envelope.
export function carrierLayout(kind,width,height,count){
  const portrait=width<=900&&height>=width;
  const cols=count>6?4:3,rows=Math.max(1,Math.ceil(count/cols));
  const innerWidth=kind==='cart'?.58:.58,innerDepth=kind==='cart'?.35:.38;
  const maxHeight=kind==='cart'?.40:portrait?.30:.33;
  return {portrait,baseY:kind==='cart'?.60:portrait?.79:.90,slots:Array.from({length:count},(_,i)=>({x:((i%cols)-(Math.min(cols,count)-1)/2)*(innerWidth/cols),y:kind==='cart'?.037:.025,z:(Math.floor(i/cols)-(rows-1)/2)*(innerDepth/rows),width:innerWidth/cols*.9,height:maxHeight,depth:innerDepth/rows*.88}))};
}
