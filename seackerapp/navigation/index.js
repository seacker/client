import React from 'react'
import { createStackNavigator, createAppContainer} from 'react-navigation'

import LandingPage from '../containers/LandingPage'
import Seat from '../containers/Seat'
import Coordinate from '../components/CoordinatePick'

const StackNavigator = createStackNavigator({
    LandingPage: {
        screen: LandingPage,
    },
    Seat: {
        screen: Seat,
        // navigationOption: () => ({
        //     title: 'Choose Your 😇',
        //     headerStyle: {
        //         height: 23,
        //         backgrounColor: '#2c3c50',
        //     },
        //     headerTitleStyle: {
        //         color: '#f03f39'
        //     },
        // })
    },
    Coordinate: {
        screen: Coordinate
    }
}, {
    initialRouteName: 'LandingPage'
})


export default createAppContainer(StackNavigator)