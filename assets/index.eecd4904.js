import{j as a,a as l,r as d,S as u,E as f,R as m,b as p}from"./vendor.cd1bc678.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};g();const r=a.exports.jsx,h=a.exports.jsxs;l.exports.registerComponent("a-marker",{});function y(){return d.exports.useEffect(()=>{window.navigator.geolocation.getCurrentPosition(o=>{console.log(o)}),window.navigator.geolocation.watchPosition(o=>{console.log(o)})},[]),r("div",{style:{width:"100vw",height:"100vh"},children:r(u,{"vr-mode-ui":"enabled: false",children:h("a-scene",{embedded:!0,"vr-mode-ui":"enabled: false",arjs:"sourceType: webcam; debugUIEnabled: false;",children:[r(f,{primitive:"a-camera","gps-camera":"gpsMinDistance:10; minDistance:30; maxDistance:10000","rotation-reader":!0}),r("a-text",{value:"Sky tree","look-at":"[gps-camera]",scale:"120 120 120","gps-entity-place":"latitude: 35.710063; longitude: 139.8107;"})]})})})}m.render(r(p.StrictMode,{children:r(y,{})}),document.getElementById("root"));