
import './App.css';
import DarkMood from './components/DarkMood';
import Inputfocuse from './components/Inputfocuse';
import Todo from './components/Todo';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App">
     <ToggleButton/>
     <DarkMood/>
     <Inputfocuse/>
     <Todo/>
    </div>
  );
}

export default App;
