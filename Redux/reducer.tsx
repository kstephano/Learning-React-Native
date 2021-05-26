import { combineReducers } from 'redux'

import { UPDATE_USER, UPDATE_CONTACT } from './actions'
import { Action, Payload } from '../types'

const merge = (prev: Payload, next: Payload) => Object.assign({}, prev, next)

const contactReducer = (state = [], action: Action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const userReducer = (state = {}, action: Action) => {
    switch (action.type) {
        case UPDATE_USER :
            return merge(state, action.payload)
        case UPDATE_CONTACT :
            return merge(state, {prevContact: action.payload})
        default:
            return state
    }
}

const reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer,
})

export default reducer