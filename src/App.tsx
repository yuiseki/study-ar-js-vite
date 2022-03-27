import "babel-polyfill";
import "@ar-js-org/ar.js";
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      setLatitude(position.coords.latitude);
      console.log(position.coords.longitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords.altitude);
    });
  }, []);

  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-camera
        gps-camera="gpsMinDistance:10; minDistance:10; maxDistance:10000;"
        rotation-reader
      ></a-camera>
      {latitude && longitude && (
        <a-box
          material="color: yellow"
          position="0 30 0"
          gps-projected-entity-place={`latitude: ${latitude}; longitude: ${longitude};`}
        ></a-box>
      )}
      <a-text
        value="test"
        look-at="[gps-camera]"
        scale="200 200 200"
        gps-entity-place="latitude: 35.727593; longitude: 139.790962;"
      ></a-text>
      <a-text
        value="Sky tree"
        look-at="[gps-camera]"
        scale="300 300 300"
        gps-entity-place="latitude: 35.710063; longitude: 139.8107;"
      ></a-text>
    </a-scene>
  );
}

export default App;
