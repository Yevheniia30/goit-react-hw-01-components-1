import PropTypes from "prop-types";
import Container from "../Container/Container";
import defaultImage from "../../images/default.jpg";
import s from "./UserProfile.module.css";

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
    <Container>
      <h2 className="taskTitle">Task 1 "UserProfile"</h2>
      <div className={s.description}>
        <img
          src={avatar ?? defaultImage}
          alt="Аватар пользователя"
          className={s.avatar}
          width="240"
        />

        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>

        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers: </span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li>
            <span className={s.label}>Views: </span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li>
            <span className={s.label}>Likes: </span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </Container>
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
