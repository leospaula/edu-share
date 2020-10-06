import cuid from 'cuid'

function resourcesReducer(state = [], action){
  switch(action.type){
    case "ADD_RESOURCE":
      const newResource = {
        ...action.resource,
        id: cuid(),
        rating: 0
      }
      return [...state, newResource]
    default:
      return state
  }
}

export default resourcesReducer