import "./App.css";
// import Todo from "./components/Todo";
import MainRouter from "./Mainrouter/MainRouter";
export const BaseUrl = "https://mini-server5.herokuapp.com/api"
function App() {
  return (
    <div className="App">
      <MainRouter />
      {/* <Todo/> */}
    </div>
  );
}

export default App;
