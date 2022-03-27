import { Entity, Scene } from "aframe-react";
import "babel-polyfill";
import { registerComponent } from "aframe";
import "@ar-js-org/ar.js";

registerComponent("a-marker", {});

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene vr-mode-ui="enabled: false">
        <a-scene embedded vr-mode-ui="enabled: false" arjs>
          <Entity primitive="a-camera" gps-camera rotation-reader></Entity>
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
