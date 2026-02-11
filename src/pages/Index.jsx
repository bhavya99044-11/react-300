import React from 'react'
import Home from './Home'
import InfiniteCaraousel from '../components/common/InfiniteCaraousel'
import Caraousel from './Caraousel'
import DevelopmentService from './DevelopmentService'
import DevelopmentWork from './DevelopmentWork'
import HireDeveloper from './HireDeveloper'

const Index = () => {
  return (
    <>
        <Home/>
        {/* <Caraousel/>
        <DevelopmentService/>
        <DevelopmentWork/> */}
        <HireDeveloper/>
    </>
  )
}

export default Index