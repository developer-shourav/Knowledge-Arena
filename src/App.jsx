import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

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
     
     <h1 className="text-6xl">How to get your first job as a self-taught programmer</h1>
      
    </div>
  );
}

export default App;
