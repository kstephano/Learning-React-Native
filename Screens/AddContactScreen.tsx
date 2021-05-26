import React from 'react'

import AddContactForm from '../Components/AddContactForm'
import { AddContactFormState, AddContactScreenProps } from '../types'

export default class AddContactScreen extends React.Component<AddContactScreenProps> {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }

    handleSubmit = (formState: AddContactFormState) => {
        this.props.navigation.navigate('ContactList', { newContact: formState })
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />
    }
}

