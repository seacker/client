import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'

import LandingPage from '../containers/LandingPage'
import Seat from '../containers/Seat'
import Coordinate from '../components/CoordinatePick'
import User from '../containers/User'
import Login from '../containers/Login'

// const NoBackNav = createSwitchNavigator({
//     Login: Login,
//     User: User,
//     LandingPage: StackNavigator
// },{
//     initialRouteName: 'Login'
// })
const StackNavigator = createStackNavigator({
    LandingPage: {
        screen: LandingPage,
    },
    Seat: {
        screen: Seat,
    },
    Login: Login,
    User: User,
    //sementara di createStackNav dulu
    Coordinate: {screen: Coordinate},
}, {
    initialRouteName: 'Login'
})


export default createAppContainer(StackNavigator)