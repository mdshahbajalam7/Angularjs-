import axios from "axios";
import React, { useEffect, useState } from "react";
import Carddata from "./Carddata";
import styles from "../components/data.module.css";
import { BaseUrl } from "../App";
// let baseUrl = "http://localhost:8080";
function Home() {
  const [getdata, setGetdata] = useState([]);
  const [loadding,setloadding]=useState(false)
  //   get data here
  useEffect(() => {
    // http://localhost:8080/emplyes_Details
    axios
      .get(`${BaseUrl}/emplyes_Details`)
      .then(({ data }) => {
        console.log("getdata", data);
        setGetdata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getdata.length]);

  return (
    <div className={styles.homecard}>
      {getdata.map((elem) => {
        return <Carddata key={elem.id} {...elem} />;
      })}
    </div>
  );
}

export default Home;
