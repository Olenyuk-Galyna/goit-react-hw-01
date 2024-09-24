import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import items from "./transactions.json"

function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.name}
          tag={userData.tag}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={items}/>
      </div>
    </>
  );
}

export default App;
