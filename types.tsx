import { SectionListData } from 'react-native'
import {  RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Key } from 'react'

// 1. Root folder tsx files types

// App.tsx types
export type ContactStackParamList = {
    ContactList: {
        newContact: {
            name: string,
            phone: string,
        }
    }
    AddContact: undefined,
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

// api.tsx types

export interface RetrievedContact {
    name: {
        title: string,
        first: string,
        last: string,
    },
    phone: string
}

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
    key: string | number[] | Key | null | undefined,
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

// AddContactFormProps.tsx types
export type AddContactFormProps = {
    onSubmit: (formState: AddContactFormState) => void
}

export type AddContactFormState = {
    name: string,
    phone: string,
    isFormValid: boolean,
}

// ContactsList.tsx types
export type ContactsListProps = {
    contacts: ContactsArray,
    onSelectContact: (contact: ContactWithKey) => void
}

export interface ArraysByLetter {
    [letter: string]: Array<ContactWithKey>
}

export interface IHeader {
    section: SectionListData<ContactWithKey, Section>
}

export interface Section {
    title: string,
    data: ContactWithKey[]
}

// Row.tsx types
export interface RowProps {
    name: string,
    phone: string,
    key: string | number[] | Key | null | undefined,
    onSelectContact: (contact: ContactWithKey) => void
}

// 4. Redux folder tsx file types

// actions.tsx types
export interface ContactUpdate {
    name: string,
    phone: string,
}

// reducer.tsx types
export interface Action {
    type: string,
    payload: Payload
}

export type Payload = ContactWithKey | ContactUpdate | {}
