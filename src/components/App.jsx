
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operation";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm/>
       <h2>Contacts</h2>
       <Filter />
       {isLoading && !error && <b>Loading...</b>}
      <ContactList/>
    </div>
  );
};
