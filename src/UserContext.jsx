import { createContext, use, useState , useEffect} from "react";

const UserContext = createContext();

export const useUser = () => use(UserContext);

export const UserProvider = ({ children }) => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ username, setUsername ] = useState(() => {

    const savedData = window.localStorage.getItem("saved-data");

    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
    if (savedData !== '') {
      setIsLoggedIn(true)
      return savedData;
    }
  
    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return "";
  });

  useEffect(() => {
    window.localStorage.setItem("saved-data", username);
  }, [username]);

  const logIn = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    const setName = form.elements.name.value;

    if (setName.trim() === "") {
      alert("Це поле обовязкове!");
      return;
    }

    setIsLoggedIn(true);
    setUsername(setName)

    form.reset();
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <UserContext value={{ isLoggedIn, username, logIn, logOut, setUsername , logIn }}>
      {children}
    </UserContext>
  );
};