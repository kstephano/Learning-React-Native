import { Route, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

// 1. Root folder tsx files types
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

// 2. Screens folder tsx files types
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

// ContactDetailsScreen.tsx types
export type ContactDetailsScreenProps = {
    contacts: ContactsArray,
    route: ContactDetailsScreenRouteProp,
    navigation: ContactDetailsScreenNavigationProp,
}

type ContactDetailsScreenRouteProp = RouteProp<ContactStackParamList, 'ContactDetails'>

type ContactDetailsScreenNavigationProp = StackNavigationProp<ContactStackParamList, 'ContactDetails'>

// AddContactScreen.tsx types
export type AddContactScreenProps = {
    route: AddContactScreenRouteProp,
    navigation: AddContactScreenNavigationProp,
}

type AddContactScreenRouteProp = RouteProp<ContactStackParamList, 'AddContact'>

type AddContactScreenNavigationProp = StackNavigationProp<ContactStackParamList, 'AddContact'>

// 3. Components folder tsx file types 
export type AddContactFormProps = {
    name: string,
    phone: string,
    isFormValid: boolean,
}