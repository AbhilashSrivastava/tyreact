import { Dispatch } from 'redux'
import { AppResponse } from "../../interfaces/AppStateInterface";

// Async operation to fetch data on landing page, if success, dispatches DATA_FETCHED, if not, dispatches FOUND_ERROR
export const fetchData = (dispatch: Dispatch) => {
  dispatch({type: 'SENDING_API_CALL'})
  fetch('/home.json')
    .then((res: any) => {
      return res.json()
    })
    .then((data: AppResponse) => {
      dispatch({type: 'DATA_FETCHED', payload: data as AppResponse})
    })
    .catch((err: Error) => {
      throw(err)
      dispatch({type: 'FOUND_ERROR'})
    })
}