
import './App.css';
import DarkMood from './components/DarkMood';
import Inputfocuse from './components/Inputfocuse';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App">
     <ToggleButton/>
     <DarkMood/>
     <Inputfocuse/>
    </div>
  );
}

export default App;
