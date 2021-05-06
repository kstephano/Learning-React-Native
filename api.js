import uuid from 'react-native-uuid'

const processContact = (contact, index) => ({
    key: uuid.v4(),
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
})

export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?inc=name,phone&results=100')
    const {results} = await response.json()
    const final = results.map(contact => processContact(contact))
    return final
}