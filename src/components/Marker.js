import { useContext, useState } from 'react'
import styled from 'styled-components'

import { FaMapMarker } from 'react-icons/fa'
import { MapContext } from '../contexts/Map'

const Container = styled.div`
    position: relative;
`

const InfoWindow = styled.div`
    width: 200px;
    position: absolute;
    bottom: calc(100% + 10px);
    left: calc(50% - 100px);
    padding: 20px;
    background: white;
    border: 1px solid #aaa;
    border-radisu: 5px;
`

const Marker = ({ bar }) => {
    const [infoWindowVisible, setInfoWindowVisible] = useState(false)
    const { setSelectedBar } = useContext(MapContext)

    const handleMouseEnter = () => {
        setInfoWindowVisible(true)
        setSelectedBar(bar.id)
    }

    const handleMouseLeave = () => {
        setInfoWindowVisible(false)
        setSelectedBar(null)
    }

  return (
    <Container>
        {infoWindowVisible &&
            <InfoWindow>
                <h3>{bar.name}</h3>
                <address>{bar.address}</address>
                <p>La pinte à : {bar.price} €</p>
            </InfoWindow>
        }
        <FaMapMarker
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: '40px', height: '40px', color: "red" }}
        />
    </Container>
  )
}

export default Marker