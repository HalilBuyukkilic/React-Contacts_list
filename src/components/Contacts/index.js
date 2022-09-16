import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import "./styles.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Niyazi", phone_number: "4543353534" },
    { fullname: "Kazım", phone_number: "546577675" },
    { fullname: "Rahmi", phone_number: "67575765" },
    { fullname: "Rüştü", phone_number: "23534353" }
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;