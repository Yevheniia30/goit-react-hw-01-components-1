import user from "./user.json";
import stats from "./stats.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import UserProfile from "./components/UserProfile";
import StatisticsList from "./components/Statistics/StatisticsList";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <UserProfile user={user} />
        <StatisticsList title="Upload stats" stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
