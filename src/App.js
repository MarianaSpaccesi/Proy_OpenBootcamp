import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetStyle';
import Father from './components/container/father';
import LoginForm from './components/pure/form/loginForm';
import LoginFormik from './components/pure/form/loginFormik';

function App() {
  return (
    <div className="App">
        {/* <TaskListComponent /> */}
        {/**<GreetingStyled />*/}
        {/* <Father></Father> */}
        <LoginFormik></LoginFormik>
    </div>
  );
}

export default App;
