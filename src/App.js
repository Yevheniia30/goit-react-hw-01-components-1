import UserProfile from "./components/UserProfile";
import UserprofileList from "./components/UserProfileList";
import users from "./users.json";

// const user1 = user[1];

function App() {
  // const isOnline = false;
  return (
    <div className="App">
      {/* <div>{isOnline ? "Online" : "Offline"}</div> */}
      <UserprofileList users={users} />
    </div>
  );
}

export default App;
