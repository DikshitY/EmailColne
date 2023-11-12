import useEmailContext from "../hooks/useEmailContext";
import './Filter.css'

function Filter() {
  const {
    isUnread,
    isRead,
    isFavorite, handleBtnClick
  } = useEmailContext();

  return (
    <div className="btn-container">
      <span>Filter By: </span>
      <button onClick={handleBtnClick} className={isUnread ? "clicked-btn" : "btn"}>Unread</button>
      <button onClick={handleBtnClick} className={isRead ? "clicked-btn" : "btn"}>Read</button>
      <button onClick={handleBtnClick} className={isFavorite ? "clicked-btn" : "btn"}>Favorites</button>
    </div>
  );
}

export default Filter;
