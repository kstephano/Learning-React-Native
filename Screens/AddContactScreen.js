import React from 'react'

import AddContactForm from '../Components/AddContactForm'

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }

    handleSubmit = formState => {
        this.props.navigation.navigate('ContactList', { newContact: formState })
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />
    }
}

