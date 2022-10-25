import { useContext } from "react"
import styled from "styled-components"

import { MapContext } from "../contexts/Map"
import ListItem from "./ListItem"

const Container = styled.div`
    width: 33.34%;
    height: 100%;
    overflow-y: scroll;
    padding: 10px;
`
const List = () => {
    const { bars } = useContext(MapContext)

    // console.log(bars)

  return (
    <Container>
        {bars.map(bar => (
            <ListItem 
                key={bar.id} 
                bar={bar}
            />
        ))}
    </Container>

  )
}

export default List