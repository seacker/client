const dataStore = {
    datas: [],
    sectionSeat: '',
    bookSeat: {},
    user: {},
    error: {},
    data: {}
}

export default function reducer( state = dataStore, action) {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                datas: action.state
            }
        case 'SECTIONSEAT':
            return {
                ...state,
                sectionSeat: action.state
            }
        case 'FETCHONEDATA':
            return {
                ...state,
                data: action.state
            }
        case 'BOOKSEAT':
            return {
                ...state,
                bookSeat: action.state
            }
        case 'LOGIN':
            return {
                ...state,
                user: action.state,
                error: {
                    status: false, 
                    data: null
                }
            }
        case 'ERRORLOGIN':
            return {
                ...state,
                error: {
                    status: action.state, 
                    data: action.data
                }
            }
        default:
            return state
    }
}