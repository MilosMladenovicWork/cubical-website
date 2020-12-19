const pageLoadedMinimal = (state = false, action) => {
  switch(action.type){
    case "PAGE_LOADED_MINIMAL":
      return true
    default:
      return state
  }
}

export default pageLoadedMinimal