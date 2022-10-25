import React from 'react'
import styled from 'styled-components'

import { MapContextProvider } from './contexts/Map'
import Map from './components/Map'
import List from './components/List'
import ListItem from './components/ListItem'

const Container = styled.div`
    width: 100%;
    height: 100vw;
    display: flex;
`
const App = () => {
  return (
    <MapContextProvider>
      <Container>
        <List />
        <Map /> 
      </Container>
    </MapContextProvider>
  )
}

export default App
