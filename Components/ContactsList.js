import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'
/*
ContactsList.propTypes = {
    contacts: PropTypes.array,
}*/

const renderItem = obj => <Row {...obj.item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

// create contacts list sorted by letter, whereby each object is a letter
// e.g. 'A' paired with the array of contacts belonging to that letter.
const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    
    // split the contactsByLetter array into objects containing a title
    // (letter) and data (contacts for that letter). 
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

export default ContactsList