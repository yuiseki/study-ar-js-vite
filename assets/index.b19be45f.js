import{j as u,r as l,R as f,a as h}from"./vendor.caea673a.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();const r=u.exports.jsx,g=u.exports.jsxs,p=u.exports.Fragment;function x(){const[s,i]=l.exports.useState(),[n,d]=l.exports.useState(),[e,t]=l.exports.useState(0),[c,m]=l.exports.useState(0);return l.exports.useEffect(()=>{const a=window.navigator.geolocation.watchPosition(o=>{console.log("----- -----"),console.log("latitude",o.coords.latitude),console.log("longitude",o.coords.longitude),console.log("altitude",o.coords.altitude),console.log("----- -----"),i(o.coords.latitude),d(o.coords.longitude),o.coords.altitude!==null&&t(o.coords.altitude)},null,{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3});return()=>{window.navigator.geolocation.clearWatch(a)}},[]),l.exports.useEffect(()=>{const a=setInterval(()=>{m(o=>o===360?0:o+1)},50);return()=>{clearInterval(a)}},[]),g("a-scene",{embedded:!0,"vr-mode-ui":"enabled: false",arjs:"sourceType: webcam;",renderer:"antialias: true; alpha: true",children:[r("a-camera",{id:"camera1","look-controls-enabled":"false","arjs-look-controls":"smoothingFactor: 0.5","gps-camera":"gpsMinDistance: 10; minDistance:0; maxDistance:100000; gpsTimeInterval: 30000","rotation-reader":!0}),s&&n&&r(p,{children:Array.from(Array(25).keys()).map(a=>g(p,{children:[r("a-box",{color:`rgb(${Math.floor(Math.random()*(100+1)+1)}, 255, 255)`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*a+300} ${e-200} ${0}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${s}; longitude: ${n};`}),r("a-box",{color:`rgb(255, ${Math.floor(Math.random()*(100+1)+1)}, 255)`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*a+300} ${e-200} ${100}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${s}; longitude: ${n};`}),r("a-box",{color:`rgb(255, 255, ${Math.floor(Math.random()*(100+1)+1)})`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*a+300} ${e-200} ${200}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${s}; longitude: ${n};`})]}))}),r("a-text",{value:"Sky tree",color:"blue",align:"center",anchor:"align",baseline:"center",side:"double",scale:"1000 1000 1000",position:`0 ${e-20} 300`,rotation:`0 ${c} 0`,"look-at":"[gps-camera]","gps-entity-place":"latitude: 35.710063; longitude: 139.8107;"})]})}f.render(r(h.StrictMode,{children:r(x,{})}),document.getElementById("root"));
