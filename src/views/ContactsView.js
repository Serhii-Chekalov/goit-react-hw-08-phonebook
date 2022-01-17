import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactsAction } from "../redux/PhoneBook/PhonebookOperations";
import ContactList from "../components/ContactsList/ContactList.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Filter from "../components/Filter/Filter";

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
