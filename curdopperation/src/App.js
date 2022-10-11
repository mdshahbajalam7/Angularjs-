import "./App.css";
import MainRouter from "./Mainrouter/MainRouter";
export const BaseUrl = "http://localhost:8080"
function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
