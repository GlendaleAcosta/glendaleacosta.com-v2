export default function pageReducer(state={
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    
    case 'FETCHING_PAGE': {         
      return {...state,
        fetching: true,
        fetched: false
      }
    }
    
    case 'PAGE_LOADED': {
      return {...state,
        fetching: false,
        fetched: true
      }
    }
    default:
      return state
  }
}