import { useState } from "react"
 import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactForm.module.css"
import { selectContact } from "../../redux/selectors";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const ifContactExist = (contacts) => {
    return contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ifContactExist(contacts)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    dispatch(addContact(contact));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.formWrapper}>
        <label htmlFor='nameInputId'>Name</label>
        <input className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required />
        <label htmlFor='numberInputId'>Number</label>
        <input className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">Add contact</button>
      </div>
    </form>
  )
};
