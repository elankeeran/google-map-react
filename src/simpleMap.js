import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import "./Marker.css";
const AnyReactComponent = ({ text }) => (
  <div
    className="marker"
    style={{ backgroundColor: "blue", cursor: "pointer" }}
    title={text}
  >
    <h3>{text}</h3>
  </div>
);

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 51.53314,
      lng: -0.057032
    },
    zoom: 19
  };

  const [geo, setGeo] = useState({
    lat: 51.53314,
    lng: -0.057032
  });

  const _onClick = obj => {
    obj.event.persist();
    setGeo({
      lat: obj.lat,
      lng: obj.lng
    });
    console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "you key" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={_onClick}
      >
        <AnyReactComponent
          lat={geo.lat}
          lng={geo.lng}
          text="My Marker sdsd s dsdsdsdsd dsdwdsddd sd dd"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
