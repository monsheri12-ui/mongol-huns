'use strict';
const fs=require('node:fs');const vm=require('node:vm');const assert=require('node:assert/strict');
const file=__dirname+'/../dist/phone.js';const sandbox={window:{},console};vm.runInNewContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
const Phone=sandbox.window.PhoneOrders;let checks=0;
function equal(actual,expected){checks++;assert.equal(actual,expected);}
equal(typeof Phone,'function');
for(const method of ['setOrder','open','close','stop','destroy'])equal(typeof Phone.prototype[method],'function');
for(const [seconds,text]of [[0,'0:00'],[4,'0:04'],[59.9,'0:59'],[60,'1:00'],[89,'1:29'],[3600,'60:00'],[NaN,'0:00'],[Infinity,'0:00'],[-5,'0:00']])equal(Phone.formatTime(seconds),text);
for(const peaks of [undefined,null,[],[0,0],[NaN,Infinity],['bad',null]])equal(Phone.waveform(peaks),null);
const actual=Phone.waveform([0,.5,1]);equal(actual.length,32);equal(actual[0],0);equal(actual[16],.5);equal(actual[31],1);
const normalized=Phone.waveform(new Float32Array([0,5,10]));equal(normalized[0],0);equal(normalized[16],.5);equal(normalized[31],1);
const long=Phone.waveform(new Float32Array(300000).fill(.25));equal(long.length,32);equal(long.every(n=>n===.25),true);
console.log(`PASS: ${checks} helper/API checks. Native DOM/media playback still requires browser QA with a real MP3.`);
