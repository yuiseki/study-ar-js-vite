import{j as u,r as s,R as f,a as h}from"./vendor.caea673a.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();const a=u.exports.jsx,g=u.exports.jsxs,p=u.exports.Fragment;function x(){const[l,i]=s.exports.useState(),[n,c]=s.exports.useState(),[e,t]=s.exports.useState(0),[d,m]=s.exports.useState(0);return s.exports.useEffect(()=>{const r=window.navigator.geolocation.watchPosition(o=>{console.log("----- -----"),console.log("latitude",o.coords.latitude),console.log("longitude",o.coords.longitude),console.log("altitude",o.coords.altitude),console.log("----- -----"),i(o.coords.latitude),c(o.coords.longitude),o.coords.altitude!==null&&t(o.coords.altitude)},null,{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3});return()=>{window.navigator.geolocation.clearWatch(r)}},[]),s.exports.useEffect(()=>{const r=setInterval(()=>{m(o=>o===360?0:o+1)},50);return()=>{clearInterval(r)}},[]),g("a-scene",{embedded:!0,"vr-mode-ui":"enabled: false",arjs:"sourceType: webcam;",renderer:"antialias: true; alpha: true",children:[a("a-camera",{id:"camera1","look-controls-enabled":"false","arjs-look-controls":"smoothingFactor: 0.5","gps-camera":"gpsMinDistance: 10; minDistance:0; maxDistance:100000; gpsTimeInterval: 30000","rotation-reader":!0}),l&&n&&a(p,{children:Array.from(Array(25).keys()).map(r=>g(p,{children:[a("a-box",{color:`rgb(${Math.floor(Math.random()*(100+1)+1)}, 255, 255)`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*r+300} ${e-200} ${0}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${l}; longitude: ${n};`}),a("a-box",{color:`rgb(255, ${Math.floor(Math.random()*(100+1)+1)}, 255)`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*r+300} ${e-200} ${100}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${l}; longitude: ${n};`}),a("a-box",{color:`rgb(255, 255, ${Math.floor(Math.random()*(100+1)+1)})`,opacity:.5,width:100,height:100,depth:100,scale:"1 1 1",position:`${100*r+300} ${e-200} ${200}`,rotation:"0 0 0","look-at":"[gps-camera]","gps-entity-place":`latitude: ${l}; longitude: ${n};`})]}))})]})}f.render(a(h.StrictMode,{children:a(x,{})}),document.getElementById("root"));
