import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../src/redux/contactsOps";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  {
    if (isLoading) return "Loading...";
  }
  {
    if (error) return "Erorr...  " + error;
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
