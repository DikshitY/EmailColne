import useEmailContext from "../hooks/useEmailContext";
import './EmailShow.css'

function EmailShow({ email }) {
    const {setIsSelected, openMail, readMail, read} = useEmailContext();
  const date = new Date(email.date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const time = `${date.getHours() % 12}:${date.getMinutes()}`;

  const handleClick = () => {
    setIsSelected(true)
    openMail(email)
    if(!read.includes(email)){
        readMail(email.id, email)
    }
  }

  return (
    <div className="email" onClick={handleClick}>
      <div className="email-img">{email.from.name[0].toUpperCase()}</div>
      <div className="email-data-container">
        <p>
          From: <span className="bold">{email.from.email}</span>
        </p>
        <p>
          Suject: <span className="bold">{email.subject}</span>
        </p>
        <p>{email.short_description}</p>
        <p>
          {formattedDate} <span>{time}pm</span>
        </p>
      </div>
    </div>
  );
}

export default EmailShow;
