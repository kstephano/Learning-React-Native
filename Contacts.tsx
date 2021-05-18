interface Contact {
    name: string,
    phone: string,
}

const NUM_CONTACTS = 50

const firstNames = ['James', 'Daryl', 'Victorina', 'Nichole', 'Haley', 'Hyon', 'Kasey', 'Venetta', 'Gricelda', 
    'Christine', 'Florida', 'Keturah', 'Lesia', 'Joie', 'Alfredia', 'Vernon', 'Shaina', 'Laura', 'Tomi', 'Laurence', 
    'Tamekia', 'Akiko', 'Leah', 'Marla', 'Jazmine', 'Laurette', 'Magaret', 'Nathalie', 'Vanda', 'Estela', 'Argelia',
    'Zoila', 'Loyd', 'Lorine', 'Tess', 'Brenton', 'Leisa', 'Leopoldo', 'Salina', 'Lulu', 'Carlos', 'Pok', 'Jaqueline', 
    'Sarita', 'Trinity', 'Machelle', 'Kami', 'Jaye', 'Antonio', 'Carry']

const lastNames = ['Carney', 'Floyd', 'Lawson', 'Nguyen', 'Santiago', 'Diaz', 'Bird', 'Bryan', 'Mccall', 'Cross', 
    'Ward', 'Carroll', 'Weeks', 'Meyers', 'Burke', 'Chase', 'Faulkner', 'Love', 'Hurst', 'Velazquez', 'Ortiz', 'Sanford', 
    'Hoffman', 'Wang', 'Trujillo', 'Frye', 'Curtis', 'Duffy', 'Dudley', 'Sherman', 'Lara', 'Brown', 'Key', 'Snow', 'Campos', 
    'Parks', 'Bright', 'Oconnor', 'Archer', 'Jefferson', 'Holloway', 'Sandoval', 'Benjamin', 'Riley', 'Chang', 'Webster',
     'Ryan', 'Frazier', 'Singh', 'Andrews']

const lol = ['drek','thar']

// generate a random number between min and max
const rand = (max: number, min: number = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate a phonne number
const generatePhone = () => `07${rand(999999999)}`

// create a contact
const createContact = () => ({
    name: generateName(),
    phone: generatePhone() })

// compare two names for alphabetizing 
export const compareNames = (contact1: Contact, contact2: Contact) => {
    if (contact1.name > contact2.name) {
        return 1
    }
    if (contact1.name < contact2.name) {
        return -1
    }
    return 0
}

// attach a key to an object
const addKeys = (val: Contact, key: number) => ({key, ...val})

// create contact list array with keys
export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)