import { Route, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

// App.tsx types
export type ContactStackParamList = {
    ContactList: {
        newContact: {
            name: string,
            phone: string,
        }
    }
    AddContact: undefined
    ContactDetails: {
        name: string,
        phone: string,
        contacts: ContactsArray,
    }
}

export type MainStackParamList = {
    Login: undefined
    Contacts: undefined
}

// Contacts.tsx types
export type ContactsArray = Array<ContactWithKey>

// ContactsListScreen.tsx types
export type ContactListScreenProps = {
    contacts: ContactsArray,
    route: ContactListScreenRouteProp,
    navigation: ContactListScreenNavigationProp,
}

type ContactListScreenRouteProp = RouteProp<ContactStackParamList, 'ContactList'>

type ContactListScreenNavigationProp = StackNavigationProp<ContactStackParamList, 'ContactList'>

export type ContactWithKey = {
    key: string | number[],
    name: string,
    phone: string,
}

export type ContactListScreenState = {
    contacts: ContactsArray
}
