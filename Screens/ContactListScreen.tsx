import React, { Props } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import uuid from 'react-native-uuid'
import { connect } from 'react-redux'

import { compareNames } from '../Contacts'
import ContactsList from '../Components/ContactsList'
import { addContact } from '../Redux/actions'
import { fetchUsers } from "../api"
import store from '../Redux/store'
import { ContactListScreenProps, ContactWithKey, ContactListScreenState } from '../types'

class ContactListScreen extends React.Component<ContactListScreenProps, ContactListScreenState> {
    constructor(props: ContactListScreenProps) {
        super(props)
        this.state = {
            contacts: this.props.contacts
        }
        this.getUsers()
        debugger
    }
 
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity  
                    style={styles.addContactButton}
                    onPress={() => {this.props.navigation.navigate('AddContact')}} 
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            )
        })
    }

    componentDidUpdate(prevProps: ContactListScreenProps) {
        if (this.props.route.params?.newContact !== prevProps.route.params?.newContact) {
            if (this.props.route.params?.newContact) { 
                this.addContact( {
                    key: uuid.v4(),
                    name: this.props.route.params.newContact.name.toLowerCase(),
                    phone: this.props.route.params.newContact.phone,
                })
            }
        }
    }

    getUsers = async () => {
        const results = await fetchUsers()
        results.map((contact: ContactWithKey) => {
            store.dispatch(addContact(contact))
        })
    }

    addContact = (newContact: ContactWithKey) => {
        store.dispatch(addContact(newContact))
    }

    render() {
        return (
            <View style={styles.container}>
                <ContactsList 
                    contacts={this.props.contacts.sort(compareNames)}
                    onSelectContact={(contact: ContactWithKey) => {
                        this.props.navigation.navigate('ContactDetails', {
                            contacts: this.props.contacts,
                            name: contact.name,
                            phone: contact.phone,
                        })
                    }} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addContactButton: {
        paddingRight: 15,
    },
    buttonText: {
        fontSize: 20,
        color: '#30a5ff',
    }
})

const mapStateToProps = (state: ContactListScreenState) => ({
    contacts: state.contacts,
})

export default connect(mapStateToProps)(ContactListScreen)