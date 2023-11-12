import useEmailContext from "../hooks/useEmailContext";
import "./ShowBody.css";

function ShowBody({ email, body }) {
  const { addFavoriteMail, removeFavoriteMail, setIsSelected, favorite } =
    useEmailContext();
  const date = new Date(email?.date);
  const regex = /(<([^>]+)>)/gi;
  const result = body?.replace(regex, "");
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const time = `${date.getHours() % 12}:${date.getMinutes()}`;

  const handleClick = () => {
    if (favorite.includes(email)) {
      removeFavoriteMail(email.id);
    } else {
      addFavoriteMail(email);
    }
  };

  const handleBack = () => {
    setIsSelected(false);
  };

  return (
    <div className="email-body">
      <div className="body-profile">
        <button onClick={handleBack} className="body-btn">
          Back
        </button>
        <button onClick={handleClick} className="body-btn">
          {favorite.includes(email)
            ? "Remove from Favorite"
            : "Mark as Favorite"}
        </button>
      </div>
      <div className="body-content">
        <div className="email-img">{email?.from?.name[0].toUpperCase()}</div>
        <div className="body-title">
          <h2>
            {email?.from?.name?.slice(0, 1)?.toUpperCase() +
              email?.from?.name?.slice(1)}
          </h2>
          <p>
            {formattedDate} <span>{time}pm</span>
          </p>
          <p className="main-body-content">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowBody;
