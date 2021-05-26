import React from 'react'
import {Button, TextInput, View, KeyboardAvoidingView, StyleSheet} from 'react-native'
import { AddContactFormProps, AddContactFormState } from '../types'

export default class AddContactForm extends React.Component<AddContactFormProps, AddContactFormState> {
    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate (prevProps: AddContactFormProps, prevState: AddContactFormState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    handleNameChange = (name: string) => {
        this.setState({ name })
    }

    handlePhoneChange = (phone: string) => {
        if (+phone >= 0 && phone.length <= 11) {
            this.setState({ phone })
        }
    }

    validateForm = () => {
        const names = this.state.name.split(' ') 
        if (+this.state.phone >= 0 && this.state.phone.length === 11 && this.state.name.length >= 3 && names.length >= 2 && names[0] && names[1]) {
            return this.setState({ isFormValid: true })
        } else {
            return this.setState({ isFormValid: false })
        }
    }

    handleSubmit = () => {
        this.props.onSubmit({ ...this.state })
    }

    render() {
        return (
            <KeyboardAvoidingView 
                behavior='padding'
                style={styles.container}
                keyboardVerticalOffset={-500}
            >
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleNameChange} 
                    value={this.state.name} 
                    placeholder="Name"
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={this.handlePhoneChange} 
                    value={this.state.phone}
                    keyboardType="numeric"
                    placeholder="Phone"
                />
                <View style={styles.button}>
                    <Button
                        title="Submit" onPress={this.handleSubmit} 
                        disabled={!this.state.isFormValid}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    button: {
        marginTop: 20,
        minWidth: 100,
        color: '#fff',
        paddingHorizontal: 150,
    }
})