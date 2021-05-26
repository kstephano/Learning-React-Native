import { ContactWithKey, ContactUpdate } from '../types'

// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

// action creators
export const updateUser = (update: ContactUpdate) => ({
    type: UPDATE_USER,
    payload: update,
})

export const addContact = (newContact: ContactWithKey) => ({
    type: UPDATE_CONTACT,
    payload: newContact,
})
