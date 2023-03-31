
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Blogs from "./components/Blogs/Blogs";
import Questions from "./components/Questions/Questions";
import { useState } from "react";

function App() {

   const [readingTime, setReadingTime] = useState(0);
   
   const addReadingTime = (time) => {
      const newTimeTotal = readingTime + time ;
      setReadingTime(newTimeTotal)
   }

  return (
    <div >
     {/*---- header ---- */}
     <header className="sticky top-0 z-50">
       {/* --Navbar-- */}
     <Navbar> </Navbar>
     </header>

    {/*---- Main ---- */}
    <main>

      {/* -----Blogs sections----- */}
      <div id="blog" className="grid grid-cols-1 my-8  md:grid-cols-3 gap-5">
        <div className=" md:col-span-2">
          <Blogs addReadingTime = {addReadingTime}> </Blogs>
        </div>

      {/* -----Cart sections----- */}
        <div>
          <Cart time ={readingTime}> </Cart>
        </div>

      </div>

    {/* -----Questions and Answers----- */}
     <div className="my-10 py-10">
     <h2 id="questions" className="font-bold text-3xl mb-10">Common Questions</h2>
     <Questions> </Questions>
     </div>
      
    </main>

    </div>
  );
}

export default App;
