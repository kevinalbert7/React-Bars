import { useContext, useEffect, useRef } from "react"
import styled from "styled-components"
import { MapContext } from "../contexts/Map"

const Container = styled.div`
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
    margin: 5px 0;
`

const ListItem = ({ bar }) => {
    const { selectedBar } = useContext(MapContext)
    const ref = useRef()

    useEffect(() => {
        if (bar.id === selectedBar) {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [selectedBar])


    
  return (
    <Container ref={ref}>
        <h3>{bar.name}</h3>
        <address>{bar.address}</address>
        <p>La pinte à : {bar.price} €</p>
    </Container>
  )
}

export default ListItem