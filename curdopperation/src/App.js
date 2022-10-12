import "./App.css";
import Todo from "./components/Todo";
import MainRouter from "./Mainrouter/MainRouter";
export const BaseUrl = "http://localhost:8080"
function App() {
  return (
    <div className="App">
      <MainRouter />
      <Todo/>
    </div>
  );
}

export default App;
