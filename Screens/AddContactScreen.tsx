import React from 'react'

import AddContactForm from '../Components/AddContactForm'
import { AddContactFormProps, AddContactScreenProps } from '../types'

export default class AddContactScreen extends React.Component<AddContactScreenProps> {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }

    handleSubmit = (formState: AddContactFormProps) => {
        this.props.navigation.navigate('ContactList', { newContact: formState })
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />
    }
}

