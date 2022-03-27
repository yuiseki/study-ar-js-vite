import "babel-polyfill";
import "aframe";
import "@ar-js-org/ar.js";
import { useEffect, useState } from "react";
function App() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      setLatitude(position.coords.latitude);
      console.log(position.coords.longitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords.altitude);
    });
  }, []);

  useEffect(() => {
    const ival = setInterval(() => {
      setRotation((prev) => {
        if (prev === 360) {
          return 0;
        } else {
          return prev + 5;
        }
      });
    }, 50);
    return () => {
      clearInterval(ival);
    };
  }, []);

  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; debugUIEnabled: false"
    >
      <a-camera
        gps-camera="gpsMinDistance: 5; minDistance:10; maxDistance:10000"
        rotation-reader
      ></a-camera>
      {latitude && longitude && (
        <>
          <a-box
            color="yellow"
            look-at="[gps-camera]"
            scale="2 2 2"
            position="0 1 -20"
            rotation={`${rotation} ${rotation} ${rotation}`}
            gps-entity-place={`latitude: ${latitude}; longitude: ${longitude}`}
          ></a-box>
          <a-text
            value="test"
            look-at="[gps-camera]"
            scale="2 2 2"
            position="-0.5 1 -5"
            gps-entity-place={`latitude: ${latitude}; longitude: ${longitude}`}
          ></a-text>
        </>
      )}
      <a-text
        value="Sky tree"
        look-at="[gps-camera]"
        scale="10 10 10"
        position="-5 8 -20"
        gps-entity-place="latitude: 35.710063; longitude: 139.8107;"
      ></a-text>
    </a-scene>
  );
}

export default App;
