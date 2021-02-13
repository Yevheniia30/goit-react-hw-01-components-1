import UserProfile from "./components/UserProfile";
import user from "./user.json";

const user1 = user[1];

function App() {
  return (
    <div className="App">
      <UserProfile
        name={user1.name}
        tag={user1.tag}
        location={user1.location}
        avatar={user1.avatar}
        followers={user1.stats.followers}
        views={user1.stats.views}
        likes={user1.stats.likes}
      />
    </div>
  );
}

export default App;
