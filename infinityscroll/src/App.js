import "./App.css";
import InfinityScroll from "./Components/InfinityScroll";


function App() {
  // const [state, setstate] = useState([]);
  // const [page, setpage] = useState(page_Number);
  // useEffect(() => {
  //   fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
  //     .then((res) => res.json())
  //     .then((json) => setstate([...state, ...json]));
  // }, [page]);


  // const scrollToEnd = ()=>{
  //   setpage(page+1)
  // }
  // Window.onscroll = function () {
  //   // /check if the page is scroll top to bottom
  //   if (
  //     window.innerHeight + document.documentElement.scrollTo ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     scrollToEnd()
  //   }
  // };
  return (
    <div className="App">
      {/* {state.length > 0 && state.map((elem,i )=>(
        <div key={elem.id} className="container">
          <h4>{elem.id}</h4>
          <h4></h4>
          <h4></h4>
        </div>
      ))} */}
      <InfinityScroll/>
    </div>
  );
}

export default App;
