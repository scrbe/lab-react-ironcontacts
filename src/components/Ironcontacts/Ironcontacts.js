import React from 'react'
import contactsJson from '../../contacts.json'

function IronContacts() {
    const [contacts, setContacts] = React.useState(contactsJson.slice(0, 5))

    const randomContact = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const handleRandom = () => setContacts(contacts => contacts.concat(randomContact(contactsJson)))

    const sortByName = (arr) => [...arr].sort((a, b) => b.name.localeCompare(a.name)) // local compare es para strings
    const handleSortByName = () => setContacts(sortByName(contacts)) 
    
    const sortByPopularity = (arr) => [...arr].sort((a, b) => b.popularity - a.popularity)
    const handleSortByPopularity = () => setContacts(sortByPopularity(contacts)) // genera un array nuevo y ordenado y ese es el que le vamos a pasar a contacts

    const handleDelete = (contactId) => setContacts(contacts.filter(contact => contact.id !== contactId)) // filter crea un array nuevo, después recorre el array original, si el resultado de la función es veradaero guarda el elemento en el array nuevo

    return <div>
        <button onClick={handleRandom}>Add Random</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
        <div  style={{width: 500, display: 'flex', flexWrap: 'wrap', margin: '20px auto'}}>
            {contacts.map(contact => <Contact key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} handleClick={() => handleDelete(contact.id) }/>)}
        </div>
    </div>
}

function Contact({ pictureUrl, popularity, name, handleClick }) {
    
    return (
        <div style={{margin: '10px'}}>
            <div>
                <img src style={{ height: 150, width: 150}} src={pictureUrl} alt={name}></img>
            </div>
            <h2>Name: {name}</h2>
            <p>Popularity: {popularity}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default IronContacts