import useEmailContext from "../hooks/useEmailContext";
import EmailShow from "./EmailShow";
import './EmailsList.css'

function EmailsList() {
  const { emails, isRead, isFavorite, isUnread, read, favorite } =
    useEmailContext();

    let renderData;
    if (isUnread){
        renderData = emails
    } else if (isRead){
        renderData = read
    } else if (isFavorite){
        renderData = favorite
    }

  const renderEmails = renderData?.map((email) => {
    return <EmailShow email={email} key={email.id} />;
  });

  return <div className="emails-container">{renderEmails}</div>;
}

export default EmailsList;
