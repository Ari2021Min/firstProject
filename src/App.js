
import './App.css';
import Login from './Components/Login';
import LoginForm from './Components/LoginForm';
import AddUserForm from './Components/AddUserForm';


const App = () => {
  return (
    <div>
      <LoginForm />
      {/* Weitere Inhalte der Anwendung */}
      <AddUserForm />
    </div>
  );
}

export default App;
