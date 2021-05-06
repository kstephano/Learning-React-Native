import { createStore } from 'redux'
import { addContact } from './actions'
import uuid from 'react-native-uuid'

import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(addContact({key: uuid.v4(), name: 'jordan h', phone: '323232323'}))
store.dispatch(addContact({key: uuid.v4(), name: 'jordan a', phone: '5454545454'}))
store.dispatch(addContact({key: uuid.v4(), name: 'david m', phone: '5050505050'}))

export default store