export function fetchSeat(value){
    return {
        type: 'FETCH',
        state: value
    }
}
export function changeSection(value){
    return {
        type: 'SECTIONSEAT',
        state: value
    }
}
export function choSeat(value){
    return {
        type: 'BOOKSEAT',
        state: value
    }
}