import { createContext, useState, useCallback } from "react";
import axios from "axios";

const EmailsContext = createContext();

function Provider({ children }) {
  const [emails, setEmails] = useState([]);
  const [read, setRead] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [isUnread, setIsUnread] = useState(true);
  const [isRead, setIsRead] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mailBody, setMailBody] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const fetchEmails = useCallback(async () => {
    const response = await axios.get(
      `https://flipkart-email-mock.vercel.app/?page=1`
    );

    setEmails(response.data.list);
  }, []);

  const openMail = async (mail) => {
    const response = await axios.get(
      `https://flipkart-email-mock.now.sh/?id=${mail.id}`
    );
    setMailBody([mail, response.data.body]);
  };

  const readMail = (id, mail) => {
    const updatedEmail = emails.filter((email) => {
      return email.id !== id;
    });
    setEmails(updatedEmail);
    setRead([...read, mail]);
  };

  const addFavoriteMail = (mail) => {
    setFavorite([...favorite, mail]);
  };

  const removeFavoriteMail = (id) => {
    const updatedEmail = favorite.filter((mail) => {
      return mail.id !== id;
    });
    setFavorite(updatedEmail);
  };

  const handleBtnClick = (e) => {
    if (e.target.textContent === "Unread") {
      setIsUnread(true);
      setIsRead(false);
      setIsFavorite(false);
    } else if (e.target.textContent === "Read") {
      setIsRead(true);
      setIsUnread(false);
      setIsFavorite(false);
    }else {
      setIsFavorite(true);
      setIsRead(false);
      setIsUnread(false);
    }
  };

  console.log(read);
  console.log(favorite);

  return (
    <EmailsContext.Provider
      value={{
        emails,
        isSelected,
        setIsSelected,
        fetchEmails,
        openMail,
        mailBody,
        readMail,
        addFavoriteMail,
        removeFavoriteMail,
        isUnread,
        isRead,
        isFavorite,
        handleBtnClick,
        read,
        favorite
      }}
    >
      {children}
    </EmailsContext.Provider>
  );
}

export default EmailsContext;
export { Provider };
