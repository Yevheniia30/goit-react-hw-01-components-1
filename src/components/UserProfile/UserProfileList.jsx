import UserProfile from ".";
import PropTypes from "prop-types";

const UserprofileList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserProfile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
};

UserprofileList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default UserprofileList;
