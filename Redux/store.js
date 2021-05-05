import { createStore } from 'redux'
import { addContact } from './actions'

import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(addContact({name: 'jordan h', phone: '323232323'}))
store.dispatch(addContact({name: 'jordan h', phone: '323232323'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))

export default store