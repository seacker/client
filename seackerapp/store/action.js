import axios from 'axios'

export function login(value){
    console.log('ini sampe action ', value)
    return (dispatch, state) => {
        console.log("masuk sini test123")
        dispatch({
            type: 'LOADING',
            state: true
        })
        axios.post('http://localhost:3000/users/login', {
            nik : value.nik,
            password : value.password
        })
        .then(({data}) => {
            console.log('ini data success : ', data)
            dispatch({
                type: 'LOGIN',
                state: data
            })
            dispatch({
                type: 'LOADING',
                state: false
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'ERRORLOGIN',
                state: false,
                data: err
            })
        })
    }
}
export function fetchData(){
    return (dispatch, state) => {
        console.log("masuk sini test123")
        dispatch({
            type: 'LOADING',
            state: true
        })
        axios.get('http://localhost:3000/seat')
        .then(({data}) => {
            // console.log('ini data success : ', data)
            dispatch({
                type: 'FETCH',
                state: data
            })
            dispatch({
                type: 'LOADING',
                state: false
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'ERRORLOGIN',
                state: false,
                data: err
            })
        })
    }
}
export function changeSection(value){
    return {
        type: 'SECTIONSEAT',
        state: value
    }
}
export function oneData(id, token){
    console.log("masuk sini oneData action "+ id + ' ' + token)
    return (dispatch, state) => {
        dispatch({
            type: 'LOADING',
            state: true
        })
        axios.patch(`http://localhost:3000/seat/changeState/${id}`, {},{
            headers: {
                token: token
            }
        })
        .then(({data}) => {
            // console.log('ini data success oneData : ', data)
            dispatch({
                type: 'FETCHONEDATA',
                state: data
            })
            dispatch({
                type: 'LOADING',
                state: false
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'ERRORLOGIN',
                state: false,
                data: err
            })
        })
    }
}
export function choosenSeat(value){
    // changeState
    return {
        type: 'BOOKSEAT',
        state: value
    }
}