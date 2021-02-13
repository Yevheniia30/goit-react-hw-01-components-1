import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";

function UserProfile({ name, tag, location, avatar, followers, views, likes }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="240"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserProfile.defaultProps = {
  avatar: defaultImage,
};

UserProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default UserProfile;
