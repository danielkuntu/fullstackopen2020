import React from 'react'

const ContactForm = (props) => {
    return(
      <div>
        <form onSubmit = {props.addName}>
          <div><input value = {props.newName} onChange = {props.handleNameChange} /></div>
          <div><input value = {props.newNumber} onChange = {props.handleNumberChange} /></div>
          <button type = "submit">add</button>
        </form>
      </div>
    )
  }

  export default ContactForm