import "babel-polyfill";
import "aframe";
import "@ar-js-org/ar.js";
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [altitude, setAltitude] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  // watch position
  useEffect(() => {
    const watchId = window.navigator.geolocation.watchPosition(
      (position) => {
        console.log("----- -----");
        console.log("latitude", position.coords.latitude);
        console.log("longitude", position.coords.longitude);
        console.log("altitude", position.coords.altitude);
        console.log("----- -----");
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        if (position.coords.altitude !== null) {
          setAltitude(position.coords.altitude);
        }
      },
      null,
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
    return () => {
      window.navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  // box rotation interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prev) => {
        if (prev === 360) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam;"
      renderer="antialias: true; alpha: true"
    >
      <a-camera
        id="camera1"
        look-controls-enabled="false"
        arjs-look-controls="smoothingFactor: 0.5"
        gps-camera="gpsMinDistance: 10; minDistance:0; maxDistance:100000; gpsTimeInterval: 30000"
        rotation-reader
      ></a-camera>
      {latitude && longitude && (
        <>
          {Array.from(Array(25).keys()).map((i) => {
            return (
              <>
                {
                  //
                  // 東
                  //
                }
                <>
                  <a-box
                    color={`rgb(${Math.floor(
                      Math.random() * (100 + 1) + 1
                    )}, 255, 0)`}
                    opacity={0.5}
                    width={100}
                    height={100}
                    depth={100}
                    scale="1 1 1"
                    position={`${100 * i + 200} ${altitude - 200} ${0}`}
                    rotation="0 0 0"
                    look-at="[gps-camera]"
                    gps-entity-place={`latitude: ${latitude}; longitude: ${longitude};`}
                  ></a-box>
                  <a-box
                    color={`rgb(255, ${Math.floor(
                      Math.random() * (100 + 1) + 1
                    )}, 0)`}
                    opacity={0.5}
                    width={100}
                    height={100}
                    depth={100}
                    scale="1 1 1"
                    position={`${100 * i + 200} ${altitude - 200} ${100}`}
                    rotation="0 0 0"
                    look-at="[gps-camera]"
                    gps-entity-place={`latitude: ${latitude}; longitude: ${longitude};`}
                  ></a-box>
                </>
                {
                  //
                  // 南
                  //
                }
                <>
                  <a-box
                    color={`rgb(${Math.floor(
                      Math.random() * (100 + 1) + 1
                    )}, 0, 255)`}
                    opacity={0.5}
                    width={100}
                    height={100}
                    depth={100}
                    scale="1 1 1"
                    position={`${0} ${altitude - 200} ${100 * i + 300}`}
                    rotation="0 0 0"
                    look-at="[gps-camera]"
                    gps-entity-place={`latitude: ${latitude}; longitude: ${longitude};`}
                  ></a-box>
                  <a-box
                    color={`rgb(255, 0, ${Math.floor(
                      Math.random() * (100 + 1) + 1
                    )})`}
                    opacity={0.5}
                    width={100}
                    height={100}
                    depth={100}
                    scale="1 1 1"
                    position={`${100} ${altitude - 200} ${100 * i + 300}`}
                    rotation="0 0 0"
                    look-at="[gps-camera]"
                    gps-entity-place={`latitude: ${latitude}; longitude: ${longitude};`}
                  ></a-box>
                </>
              </>
            );
          })}
        </>
      )}
      {/*
      <a-text
        color="blue"
        align="center"
        anchor="align"
        baseline="center"
        side="double"
        scale="100 100 100"
        position={`100 ${altitude - 100} 200`}
        rotation={`0 ${rotation} 0`}
        look-at="[gps-camera]"
        gps-entity-place="latitude: 35.71034; longitude: 139.8112;"
        value="Tokyo Sky Tree"
      ></a-text>
      <a-text
        color="blue"
        align="center"
        anchor="align"
        baseline="center"
        side="double"
        scale="100 100 100"
        position={`100 ${altitude - 100} 200`}
        rotation={`0 ${rotation} 0`}
        look-at="[gps-camera]"
        gps-entity-place="latitude: 35.6566376; longitude: 139.7459452;"
        value="Tokyo Tower"
      ></a-text>
        */}
    </a-scene>
  );
}

export default App;
