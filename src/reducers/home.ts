import {AppStateInterface} from '../../interfaces/AppStateInterface'
import {ActionTypeInterface} from '../../interfaces/ActionTypeInterface'


// Home Page initial state
export const initialState =  (): AppStateInterface => ({
  appVersion: 1
})

// Home Page Reducers
export const homeReducers = (state = initialState(), action: ActionTypeInterface<any>): AppStateInterface => {
  switch (action.type) {
    case 'CHANGE_VERSION':
      return changeVersion(state, action)
    case 'DATA_FETCHED':
      return dataFetched(state, action)
    default:
      return state
  }
}

export const changeVersion = (state: AppStateInterface, action: ActionTypeInterface<any>): AppStateInterface => {
  return Object.assign({}, state,  {
    appVersion: action.payload + state.appVersion
  } as AppStateInterface)
}
export const dataFetched = (state: AppStateInterface, action: ActionTypeInterface<any>): AppStateInterface => {
  return Object.assign({}, state, {
    response: action.payload
  } as AppStateInterface)
}