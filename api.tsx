import uuid from 'react-native-uuid'

import { RetrievedContact } from './types'

const processContact = (contact: RetrievedContact) => ({
    key: uuid.v4(),
    name: `${contact.name.first.toLowerCase()} ${contact.name.last.toLowerCase()}`,
    phone: contact.phone,
})

export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?inc=name,phone&results=100')
    const {results} = await response.json()
    const final = results.map((contact: RetrievedContact) => processContact(contact))
    return final
}