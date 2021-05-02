/**
 * Contact list app
 *
 * @format
 * @flow strict local
 */

import React from 'react'
import { Button, SectionList, StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import AddContactScreen from './Screens/AddContactScreen'
import ContactListScreen from './Screens/ContactListScreen'
import ContactDetailsScreen from './Screens/ContactDetailsScreen'
import LoginScreen from './Screens/LoginScreen';

const Main = createStackNavigator()
const Contacts = createStackNavigator()

const StackContacts = () => (
    <Contacts.Navigator initialRouteName="ContactList">
        <Contacts.Screen 
            name="ContactList" 
            component={ContactListScreen} 
            options={{
                headerTitle: 'Contacts',
                headerTitleAlign: 'center',
            }} 
        />
        <Contacts.Screen 
            name="AddContact" 
            component={AddContactScreen} 
            options={{
                title: 'Add Contact',
                headerTitleAlign: 'center',
            }} 
        />
        <Contacts.Screen
            name="ContactDetails"
            component={ContactDetailsScreen}
            options={({ route }) => ({ 
                title: route.params.name,
                headerTitleAlign: 'center'
            })}
        />
    </Contacts.Navigator>
)
 
export default class App extends React.Component {
    state = {
        isLoggedIn: true
    }

    render() {
        return (
            <NavigationContainer>
                <Main.Navigator initialRouteName='Login' >
                    {this.state.isLoggedIn == false ? (
                        <Main.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{
                                headerTitle: 'Login',
                                headerTitleAlign: 'center',
                            }}
                    />
                    ) : (
                        <Main.Screen
                            name='Contacts'
                            component={StackContacts}
                        />
                    )}
                </Main.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})