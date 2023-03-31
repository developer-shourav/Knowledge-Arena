
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState} from "react";
import Cart from "./components/Cart/Cart";
import Blogs from "./components/Blogs/Blogs";
import Questions from "./components/Questions/Questions";
import { addToCart } from "./utilities/utilities";


function App() {

   const [allBlogs, setAllBlogs] = useState([]);
   const [readingTime, setReadingTime] = useState(0);
   const [cartData, setCardData] = useState([]);
   
   
   /* Total Reading Time Calculator Function */
   const addReadingTime = (time) => {
      const newTimeTotal = readingTime + time ;
      setReadingTime(newTimeTotal)
   }

   /* Bookmark Data in local Storage */
   const addToBookMark = (value) => {
    const bookmarkBlog = allBlogs.find( blog => blog.id === value);
    addToCart(value, bookmarkBlog?.title)
    
  };

  useEffect( ( ) => {
    fetch('data.json')
    .then ( res => res.json())
    .then ( data => setAllBlogs(data))
  }, [ ])
  
  /* Get Data form localStorage  */
  useEffect( ( ) => {
    const storedData = JSON.parse(localStorage.getItem('bookMarkedItems'));
    
    setCardData(storedData)
  }, [addToBookMark])


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
          <Blogs allBlogs = {allBlogs} addToBookMark ={addToBookMark} addReadingTime = {addReadingTime}> </Blogs>
        </div>

      {/* -----Cart sections----- */}
        <div>
          <Cart cartData={cartData} time ={readingTime}> </Cart>
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

