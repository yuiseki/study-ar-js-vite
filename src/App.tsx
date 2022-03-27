import { Entity, Scene } from "aframe-react";
import "babel-polyfill";
import { registerComponent } from "aframe";
import "@ar-js-org/ar.js";
import { useEffect } from "react";

registerComponent("a-marker", {});

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
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene vr-mode-ui="enabled: false">
        <a-scene
          embedded
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <Entity
            primitive="a-camera"
            gps-camera="gpsMinDistance:10; minDistance:30; maxDistance:10000"
            rotation-reader
          ></Entity>
          <a-text
            value="Sky tree"
            look-at="[gps-camera]"
            scale="120 120 120"
            gps-entity-place="latitude: 35.710063; longitude: 139.8107;"
          ></a-text>
        </a-scene>
      </Scene>
    </div>
  );
}

export default App;
