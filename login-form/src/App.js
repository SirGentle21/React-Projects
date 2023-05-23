import './App.css';
import LoginForm from './components/Login';
import TodoList from './components/Todo-list';
import Advice from './components/Motivate';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <TodoList />
      <Advice />
    </div>
  );
}

export default App;
