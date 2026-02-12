import React from 'react'
import './Index.scss'
import Home from './Home'
import Caraousel from './Caraousel'
import GenresGames from './GenresGames'
import HireDeveloper from './HireDeveloper'
import DevelopmentWork from './DevelopmentWork'
import DevelopmentService from './DevelopmentService'
import InfiniteCaraousel from '../components/common/InfiniteCaraousel'
import GameDesign from './GameDesign'
import Conversation from './Conversation'
import ChooseUs from './ChooseUs'

const Index = () => {
  return (
    <div className='pages'>
        <Home/>
        {/* <Caraousel/>
        <DevelopmentService/>
        <DevelopmentWork/> */}
        {/* <HireDeveloper/> */}
        <GenresGames/>
        <GameDesign/>
        <Conversation/>
        <ChooseUs/>
    </div>
  )
}

export default Index