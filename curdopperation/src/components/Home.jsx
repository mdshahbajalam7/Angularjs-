import axios from "axios";
import React, { useEffect, useState } from "react";
import Carddata from "./Carddata";
import styles from "../components/data.module.css";
import { BaseUrl } from "../App";
import { CircularProgress } from "@mui/material";

function Home() {
  const [getdata, setGetdata] = useState([]);
  const [loadding, setloadding] = useState(false);
  const [pageNo, setpageNo] = useState(1);
  //   get data here
  useEffect(() => {
    getDataget();
  }, [pageNo]);
  const getDataget = () => {
    axios
      .get(`${BaseUrl}/emplyes_Details`)
      .then(({ data }) => {
        setloadding(true);
        setTimeout(() => {
          console.log("getdata", data);
          let pagenumber = data.slice((pageNo - 1) * 2, pageNo * 2);
          setGetdata(pagenumber);
          setloadding(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.homecard}>
        {loadding ? (
          <h1 style={{ textAlign: "center" }}>
            <CircularProgress color="success" />
          </h1>
        ) : getdata.length === 0 ? (
          <h1 style={{ textAlign: "center",color:"red" }}>No data....</h1>
        ) : (
          getdata.map((elem) => {
            return <Carddata key={elem.id} {...elem} getDataget={getDataget} />;
          })
        )}
      </div>
      <div className={styles.pageNo}>
        <div
          className={styles.page}
          onClick={() => (pageNo > 1 ? setpageNo(pageNo - 1) : setpageNo(1))}
        >
          {"<<"}
        </div>
        <div className={styles.page} onClick={() => setpageNo(1)}>
          1
        </div>
        <div className={styles.page} onClick={() => setpageNo(2)}>
          2
        </div>
        <div className={styles.page} onClick={() => setpageNo(3)}>
          3
        </div>
        <div className={styles.page} onClick={() => setpageNo(4)}>
          4
        </div>
        <div className={styles.page} onClick={() => setpageNo(5)}>
          5
        </div>
        <div className={styles.page} onClick={() => setpageNo(pageNo + 1)}>
          {">>"}
        </div>
      </div>
    </>
  );
}

export default Home;
