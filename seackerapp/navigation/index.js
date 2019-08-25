import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import LandingPage from '../containers/LandingPage'

const StackNavigator = createStackNavigator({
    LandingPage: {
        screen: LandingPage,
        navigationOptions: () => ({
            title: 'Seacker',
            headerStyle: {
                height: 23
            }
        })
    },

})

const MainNavigator = createBottomTabNavigator({
    Landing: { screen: StackNavigator }
}, { initialRouteName: 'Landing'})

export default createAppContainer(MainNavigator)