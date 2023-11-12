import { useEffect } from "react";
import useEmailContext from "./hooks/useEmailContext";
import EmailsList from "./components/EmailsList";
import Filter from "./components/Filter";
import ShowBody from "./components/ShowBody";

function App() {
  const { fetchEmails, isSelected, mailBody } = useEmailContext();

  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  return (
    <div className="main">
      <Filter />
      <div className="all-container">
        <EmailsList />
        {isSelected && (<ShowBody email={mailBody[0]} body={mailBody[1]} />)}
      </div>
    </div>
  );
}

export default App;
