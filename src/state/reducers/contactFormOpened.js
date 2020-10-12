const contactFormOpened = (state = false, action) => {
    switch(action.type){
        case 'toggle_contact_form':
            return !state
        default:
            return state 
    }
}

export default contactFormOpened