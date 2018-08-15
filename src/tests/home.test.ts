import {assert} from 'chai'
import { changeVersion, initialState, dataFetched } from './../reducers/home'
import { AppStateInterface } from '../../interfaces/AppStateInterface';

describe('changeVersion', () => {
  it('should update the version of the app in appState with payload', () => {
    const state = initialState()
    const action = {payload: 3, type: 'SOMETHING'}
    const actual = changeVersion(state, action)
    const expected = {
      ...state,
      appVersion: 4
    }
    assert.deepEqual(actual, expected)
  })
})

describe('dataFetched', () => {
  it('should update the appState with response with the given payload', () => {
    const state = initialState()
    const action = {payload: 'RESPONSE', type: 'SOMETHING'}
    const actual = dataFetched(state, action)
    const expected = {
      ...state,
      response: action.payload as any
    }
    assert.deepEqual(actual, expected)
  })
})