const OneSeat = {
    blockSeat: ['A', 'B', 'C'],
    numberSeat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
const Meeting = {

}
const Auditorium = {

}

const dataStore = {
    datas: [],
    sectionSeat: '',
    bookSeat: {}
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