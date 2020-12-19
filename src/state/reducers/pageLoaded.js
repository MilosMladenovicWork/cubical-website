const pageLoaded = (state = false, action) => {
  switch(action.type){
    case "PAGE_LOADED":
      return true
    default:
      return state
  }
}

export default pageLoaded