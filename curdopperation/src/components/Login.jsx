import { TextField } from '@mui/material'
import React from 'react'
import styles from "../components/data.module.css";

function Login() {
    const handlechange = ()=>{

    }
    
    const  handlesubmit = ()=>{

    }
  return (
    <div>
         <form onSubmit={handlesubmit}>
        <div className={styles.textField}>
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            name="email"
            label="Email"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Password"
            name="password"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <input className={styles.btn} type="submit" value="submit" />
          </div>
          </form>
    </div>
  )
}

export default Login