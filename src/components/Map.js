import { useContext } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

import { MapContext } from "../contexts/Map";
import Marker from "./Marker";

const Container = styled.div`
  width: 66.66%;
  height: 100%;
  background: teal;
`;

const Map = () => {
  const { position, bars } = useContext(MapContext);

  if (!position) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKey={{ key: "" }}
        defaultZoom={12}
        center={position}
      >
        {bars.map((bar) => {
          <Marker lat={bar.latitutde} lng={bar.longitude} bar={bar} />;
        })}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
