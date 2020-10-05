const scrollFromTopChange = (state = false, action) => {
    switch(action.type){
        case 'SCROLL_FROM_TOP_CHANGE':
            return action.payload
        default:
            return state
    }
}

export default scrollFromTopChange