import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { MapContext } from "../contexts/Map";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 5px 0;
  background: ${(props) => (props.isSelected ? "teal" : "white")};
`;

const ListItem = ({ bar }) => {
  const { selectedBar, setSelectedBar, setPosition } = useContext(MapContext);
  const ref = useRef();
  const isSelected = bar.id === selectedBar.id;

  useEffect(() => {
    if (isSelected && selectedBar.from === "marker") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBar]);

  const handleMouseEnter = () => {
    setSelectedBar({
      id: bar.id,
      from: "list",
    });

    setPosition({
      lat: bar.latitude,
      lng: bar.longitude,
    });
  };

  return (
    <Container
      ref={ref}
      isSelected={isSelected}
      onMouseEnter={() => setSelectedBar({ id: bar.id })}
      onMouseLeave={() => setSelectedBar({ id: null })}
    >
      <h3>{bar.name}</h3>
      <address>{bar.address}</address>
      <p>La pinte à : {bar.price} €</p>
    </Container>
  );
};

export default ListItem;
