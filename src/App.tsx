import { Entity, Scene } from "aframe-react";
import "babel-polyfill";
import { registerComponent } from "aframe";
import "@ar-js-org/ar.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
    window.navigator.geolocation.watchPosition((position) => {
      console.log(position);
    });
  }, []);

  return (
    <div>
      <a-scene
        embedded
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
      >
        <Entity
          primitive="a-camera"
          gps-camera="gpsMinDistance:10; minDistance:30; maxDistance:10000"
          rotation-reader
        ></Entity>
        <a-text
          value="test"
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 35.727593; longitude: 139.790962;"
        ></a-text>
        <a-text
          value="Sky tree"
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 35.710063; longitude: 139.8107;"
        ></a-text>
      </a-scene>
    </div>
  );
}

export default App;
