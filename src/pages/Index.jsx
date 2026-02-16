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
import ClientSay from './ClientSay'
import Awards from './Awards'

const Index = () => {
  return (
    <div className='pages hide-scrollbar'>
        <Home/>
        <Caraousel/>
        <DevelopmentService/>
        <DevelopmentWork/>
        <HireDeveloper/>
        <GenresGames/>
        <GameDesign/>
        <Conversation/>
        <ChooseUs/>
        <ClientSay/>
        <Awards/>
    </div>
  )
}

export default Index