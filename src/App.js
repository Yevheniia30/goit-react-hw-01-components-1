import user from "./data/user.json";
import stats from "./data/stats.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

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
