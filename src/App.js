// import UserProfile from "./components/UserProfile";
import UserprofileList from "./components/UserProfile/UserProfileList";
import users from "./users.json";
import StatisticsList from "./components/Statistics/StatisticsList";
// import Statistics from "./components/Statistics";
import stats from "./stats.json";
// import StatisticsList from "./components/Statistics/StatisticsList";

// const user1 = user[1];

function App() {
  // const isOnline = false;
  return (
    <div className="App">
      {/* <div>{isOnline ? "Online" : "Offline"}</div> */}
      <UserprofileList users={users} />
      {/* <Statistics title="Upload stats" /> */}
      <StatisticsList
        title="Upload stats"
        stats={stats}
        // id={statisticalData.id}
        // label={statisticalData.label}
        // percentage={statisticalData.percentage}
      />
    </div>
  );
}

export default App;
