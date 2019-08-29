import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {} from '../store/action'

// for looping seat
const OnlySeat = (props) => {
    return (
        <View>
            <Button></Button>
        </View>
    )
}

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {}