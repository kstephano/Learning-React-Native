/**
 * Contact list app
 *
 * @format
 * @flow strict local
 */

import React, { Props } from 'react'
import { Button, SectionList, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
 
import AddContactScreen from './Screens/AddContactScreen'
import ContactListScreen from './Screens/ContactListScreen'
import ContactDetailsScreen from './Screens/ContactDetailsScreen'
import LoginScreen from './Screens/LoginScreen';
import {  MainStackParamList, ContactStackParamList} from './types'
import store from './Redux/store';

interface State {
    isLoggedIn: boolean
}

const Main = createStackNavigator<MainStackParamList>()
const Contacts = createStackNavigator<ContactStackParamList>()

const StackContacts = () => (
    <Contacts.Navigator initialRouteName="ContactList">
        <Contacts.Screen 
            name="ContactList" 
            component={ContactListScreen} 
            options={{
                headerTitle: 'All Contacts',
                headerTitleAlign: 'left',
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
                headerTitleAlign: 'center',
                headerTitleStyle: styles.contactDetailsTitle,
            })}
        />
    </Contacts.Navigator>
)
 
export default class App extends React.Component<State> {
    state = {
        isLoggedIn: true
    }

    render() {
        return (
            <Provider store={store}>
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
                                options={{
                                    headerTitleAlign: 'center',
                                }}
                            />
                        )}
                    </Main.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contactDetailsTitle: {
        textTransform: 'capitalize',
    },
})