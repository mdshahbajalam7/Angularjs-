import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';

function InfinityScroll() {
  const [datasource, setdatasource] = useState(Array.from({ length: 20 }));
  const [hasMore,setHasMore]=useState(true)
  const style = {
    border: "2px solid green",
    width: "30%",
    margin: "auto",
    marginTop: "10px",
    // margin:"12",/
    padding: 10,
  };
  const fetchMoreData=()=>{
    // MAKING API CALL 
    setTimeout(() => {
        setdatasource(datasource.concat(Array.from({ length: 20 })))
    }, 3000);
  }
  return (
    <div >
      <InfiniteScroll dataLength={datasource.length} next={fetchMoreData} hasMore={hasMore}
      loader={<p>loading...</p>}>
        {datasource.map((elem, index) => {
          return (
            <div  style={style}>
              This is div#{index + 1} inside infintyScroll
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default InfinityScroll;
