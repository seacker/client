export function fetchSeat(value){
    if(value == 'one'){
        return {
            type: 'FETCH',
            state: value
        }
    }
}
export function changeSection(value){
    return {
        type: 'SECTIONSEAT',
        state: value
    }
}
export function choosenSeat(value){
    return {
        type: 'BOOKSEAT',
        state: value
    }
}