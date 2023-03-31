import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Blogs from "./components/Blogs/Blogs";

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
     {/*---- header ---- */}
     <header>
       {/* --Navbar-- */}
     <Navbar> </Navbar>
     </header>

    {/*---- Main ---- */}
    <main>
      <div className="grid grid-cols-1 my-8  md:grid-cols-3 gap-5">
        <div className=" md:col-span-2">
          <Blogs> </Blogs>
        </div>

        <div>
          <Cart> </Cart>
        </div>

      </div>
    </main>

    </div>
  );
}

export default App;
