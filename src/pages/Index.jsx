import React from 'react'
import Home from './Home'
import InfiniteCaraousel from '../components/common/InfiniteCaraousel'
import Caraousel from './Caraousel'
import DevelopmentService from './DevelopmentService'
import DevelopmentWork from './DevelopmentWork'

const Index = () => {
  return (
    <>
        <Home/>
        <Caraousel/>
        <DevelopmentService/>
        <DevelopmentWork/>
    </>
  )
}

export default Index