import PropTypes from "prop-types";
// import defaultImage from "../../images/default.jpg";

const UserProfile = ({
  user: {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar ?? defaultImage}
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
};

UserProfile.defaultProps = {
  avatar: defaultImage,
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default UserProfile;
