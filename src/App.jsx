import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect( ( ) => {
    fetch('data.json')
    .then ( res => res.json())
    .then ( data => setAllData(data))
  }, [ ])

  console.log(allData);
  return (
    <div className="">
    <Navbar> </Navbar>
    </div>
  );
}

export default App;
