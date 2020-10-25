import React from 'react'

function Contacts (props)  {
    var toFilter = props.names
    var search = props.keyWords
    /**
     * Muuttaa hakusanan ja yhteystietokokoelman lowerCaseksi. Filtter etsii yhteystiedoista includes()-metodilla osumia.
     */
    const result = toFilter.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            {result.map(filtteredContacts => <p key={filtteredContacts.id}>{filtteredContacts.name} {filtteredContacts.number}</p>)}
        </div>
    )
}

export default Contacts