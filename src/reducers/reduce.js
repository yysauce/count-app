export default (state = 0, action) => {
    switch (action.type) {
        case 'incr':
            return state + 1
        case 'decr':
            return state - 1
        default:
            return state
    }
}