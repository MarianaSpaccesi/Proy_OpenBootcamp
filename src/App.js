import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetStyle';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
        <TaskListComponent />
        {/**<GreetingStyled />*/}
        {/* <Father></Father> */}
    </div>
  );
}

export default App;
