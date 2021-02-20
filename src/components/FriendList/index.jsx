import defaultImage from "../../images/default.jpg";

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar ?? defaultImage}
        alt="User's avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
