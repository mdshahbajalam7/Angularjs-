import "./App.css";
// import Todo from "./components/Todo";
import MainRouter from "./Mainrouter/MainRouter";
// import TodoList from "./page/TodoList";
export const BaseUrl = "https://mini-server5.herokuapp.com/api"
function App() {
  return (
    <div className="App">
      <MainRouter />
      {/* <Todo/> */}
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
