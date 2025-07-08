import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>React Context Demo</h1>
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
