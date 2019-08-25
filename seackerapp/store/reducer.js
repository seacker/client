const Meeting = {

}
const Auditorium = {

}

const dataStore = {
    datas: [],
    sectionSeat: '',
    bookSeat: {},
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
        case 'BOOKSEAT':
            return {
                ...state,
                bookSeat: action.state
            }
        default:
            return state
    }
}