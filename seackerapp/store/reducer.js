const dataStore = {
    datas: []
}

export default function reducer( state = dataStore, action) {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state
            }
    
        default:
            return state
    }
}