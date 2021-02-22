import s from "./FriendList.module.css";
import defaultImage from "../../images/default.jpg";

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className={s.item}>
      <span
        // className={s.status + " " + (isOnline ? s.online : s.offline)}
        className={s.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImage}
        alt="User's avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
